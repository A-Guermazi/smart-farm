"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { fetchWeatherApi } from "openmeteo";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function WeatherAreaChart() {
  const isMobile = useIsMobile();
  const [selectedMetric, setSelectedMetric] = React.useState("temperature_2m");
  const [weatherData, setWeatherData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const metricOptions = [
    {
      value: "temperature_2m",
      label: "Temperature (°C)",
      color: "var(--chart-2)",
      decimals: 1,
    },
    {
      value: "relative_humidity_2m",
      label: "Humidity (%)",
      color: "var(--chart-2)",
      decimals: 0,
    },
    {
      value: "windspeed_10m",
      label: "Wind Speed (km/h)",
      color: "var(--chart-2)",
      decimals: 1,
    },
    {
      value: "precipitation",
      label: "Precipitation (mm)",
      color: "var(--chart-2)",
      decimals: 1,
    },
  ];

  const getMetricInfo = (metricValue) => {
    return (
      metricOptions.find((option) => option.value === metricValue) ||
      metricOptions[0]
    );
  };

  const currentMetric = getMetricInfo(selectedMetric);

  React.useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);

        // We'll fetch all metrics at once to avoid multiple API calls when switching
        const params = {
          latitude: 35.5254,
          longitude: 11.05,
          hourly: [
            "temperature_2m",
            "relative_humidity_2m",
            "windspeed_10m",
            "precipitation",
          ],
          past_days: 7,
        };

        const url = "https://api.open-meteo.com/v1/forecast";
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];

        const utcOffsetSeconds = response.utcOffsetSeconds();
        const hourly = response.hourly();

        const startTime = Number(hourly.time());
        const endTime = Number(hourly.timeEnd());
        const interval = hourly.interval();

        const timeArray = Array.from(
          { length: (endTime - startTime) / interval },
          (_, i) =>
            new Date((startTime + i * interval + utcOffsetSeconds) * 1000)
        );

        const temperature2m = Array.from(hourly.variables(0).valuesArray());
        const humidity2m = hourly.variables(1).valuesArray();
        const windSpeed10m = hourly.variables(2).valuesArray();
        const precipitation = hourly.variables(3).valuesArray();

        // Create a daily average from hourly data to make the chart more readable
        const dailyData = [];
        let currentDate = null;
        let tempSum = 0;
        let humiditySum = 0;
        let windSum = 0;
        let precipSum = 0;
        let count = 0;

        for (let i = 0; i < timeArray.length; i++) {
          const date = timeArray[i].toISOString().split("T")[0];

          if (currentDate === null) {
            currentDate = date;
          }

          if (date === currentDate) {
            tempSum += temperature2m[i];
            humiditySum += humidity2m[i];
            windSum += windSpeed10m[i];
            precipSum += precipitation[i];
            count++;
          } else {
            dailyData.push({
              date: currentDate,
              temperature_2m: Number((tempSum / count).toFixed(1)),
              relative_humidity_2m: Math.round(humiditySum / count),
              windspeed_10m: Number((windSum / count).toFixed(1)),
              precipitation: Number((precipSum / count).toFixed(1)),
            });

            currentDate = date;
            tempSum = temperature2m[i];
            humiditySum = humidity2m[i];
            windSum = windSpeed10m[i];
            precipSum = precipitation[i];
            count = 1;
          }
        }

        // Add the last day
        if (count > 0) {
          dailyData.push({
            date: currentDate,
            temperature_2m: Number((tempSum / count).toFixed(1)),
            relative_humidity_2m: Math.round(humiditySum / count),
            windspeed_10m: Number((windSum / count).toFixed(1)),
            precipitation: Number((precipSum / count).toFixed(1)),
          });
        }

        setWeatherData(dailyData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(err);
        setLoading(false);
      }
    };

    getWeatherData();
  }, []);

  const getYAxisDomain = () => {
    switch (selectedMetric) {
      case "temperature_2m":
        return ["dataMin - 2", "dataMax + 2"];
      case "relative_humidity_2m":
        return [0, 100];
      case "windspeed_10m":
        return [0, "dataMax + 5"];
      case "precipitation":
        return [0, "dataMax + 2"];
      default:
        return ["dataMin", "dataMax"];
    }
  };

  const getYAxisUnit = () => {
    switch (selectedMetric) {
      case "temperature_2m":
        return "°C";
      case "relative_humidity_2m":
        return "%";
      case "windspeed_10m":
        return "km/h";
      case "precipitation":
        return "mm";
      default:
        return "";
    }
  };

  const formatTooltipValue = (value, name) => {
    const metric = getMetricInfo(name);
    if (!metric) return value;

    return metric.decimals === 0
      ? Math.round(value)
      : value.toFixed(metric.decimals);
  };

  const chartConfig = {
    [selectedMetric]: {
      label: currentMetric.label,
      color: currentMetric.color,
      valueFormatter: (value) => formatTooltipValue(value, selectedMetric),
    },
  };

  if (loading) {
    return (
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>Weather Data</CardTitle>
          <CardDescription>Loading weather information...</CardDescription>
        </CardHeader>
        <CardContent className="h-[250px] flex items-center justify-center">
          <div className="animate-pulse">Loading data...</div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>Weather Data</CardTitle>
          <CardDescription>Error loading weather information</CardDescription>
        </CardHeader>
        <CardContent className="h-[250px] flex items-center justify-center">
          <div className="text-red-500">
            Error: {error.message || "Failed to fetch weather data"}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Weather Data</CardTitle>
        <CardDescription>{currentMetric.label}:</CardDescription>
        <CardAction>
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger
              className="flex w-48 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
              size="sm"
              aria-label="Select weather metric"
            >
              <SelectValue placeholder="Select metric" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {metricOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  className="rounded-lg"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        {weatherData.length > 0 ? (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={weatherData}>
              <defs>
                <linearGradient id="fillMetric" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={currentMetric.color}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={currentMetric.color}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={getYAxisDomain()}
                tickFormatter={(value) => {
                  return currentMetric.decimals === 0
                    ? Math.round(value)
                    : value.toFixed(currentMetric.decimals);
                }}
                label={{
                  value: getYAxisUnit(),
                  position: "insideLeft",
                  angle: -90,
                  style: { textAnchor: "middle" },
                }}
              />
              <ChartTooltip
                cursor={false}
                defaultIndex={
                  isMobile ? -1 : Math.min(3, weatherData.length - 1)
                }
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      });
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey={selectedMetric}
                type="monotone"
                fill="url(#fillMetric)"
                stroke={currentMetric.color}
              />
            </AreaChart>
          </ChartContainer>
        ) : (
          <div className="h-[250px] flex items-center justify-center">
            <div>No weather data available</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
