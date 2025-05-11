"use client";
import React, { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            try {
                const params = {
                    latitude: 35.5254,
                    longitude: 11.05,
                    hourly: [
                        "temperature_2m",
                        "relative_humidity_2m",
                        "wind_speed_10m",
                        "precipitation"
                    ].join(",")
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
                    (_, i) => new Date((startTime + i * interval + utcOffsetSeconds) * 1000)
                );

                const temperature2m = hourly.variables(0).valuesArray();
                const humidity2m = hourly.variables(1).valuesArray();
                const windSpeed10m = hourly.variables(2).valuesArray();
                const precipitation = hourly.variables(3).valuesArray();

                const lastIndex = temperature2m.length - 1;

                const data = {
                    time: timeArray[lastIndex].toLocaleString(),  // ✅ Convert Date to string
                    temperature: temperature2m[lastIndex].toFixed(1),
                    humidity: humidity2m[lastIndex].toFixed(1),
                    windSpeed: windSpeed10m[lastIndex].toFixed(1),
                    precipitation: precipitation[lastIndex].toFixed(1),
                };

                setWeatherData(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        getWeather();
    }, []);

    const normalRange = (current, min, max) => {
        if (current >= min && current <= max) {
            return { status: "bon", color: "text-green-500" }; // green for normal
        } else if (current < min) {
            return { status: "trop bas", color: "text-red-500" }; // red for too low
        } else if (current > max) {
            return { status: "trop haut", color: "text-yellow-500" }; // yellow for too high
        } else {
            return { status: "erreur", color: "text-gray-500" }; // gray for error
        }
    }

    if (loading) {
        return <div>Loading weather data...</div>;
    }

    if (error) {
        return <div>Error fetching weather data: {error.message}</div>;
    }

    return (
        <div className=' grid grid-cols-4 gap-4 
                    px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs
                     lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4'>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Temperature</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {weatherData.temperature} °C
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className={`${normalRange(weatherData.temperature, 15, 25).color}`}>
                        {normalRange(weatherData.temperature, 15, 25).status}
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Humidity</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {weatherData.humidity} %
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className={`${normalRange(weatherData.humidity, 30, 70).color}`}>
                        {normalRange(weatherData.humidity, 30, 70).status}
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Wind Speed</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {weatherData.windSpeed} km/h
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className={`${normalRange(weatherData.windSpeed, 5, 40).color}`}>
                        {normalRange(weatherData.windSpeed, 5, 40).status}
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Precipitation</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                        {weatherData.precipitation} mm
                    </CardTitle>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className={`${normalRange(weatherData.precipitation, 0, 5).color}`}>
                        {normalRange(weatherData.precipitation, 0, 5).status}
                    </div>
                </CardFooter>
            </Card>



        </div>
    );
};

export default WeatherComponent;
