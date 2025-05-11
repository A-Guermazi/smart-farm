'use client';
import React, { useEffect, useState } from 'react';
import { fetchWeatherApi } from 'openmeteo';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Button } from './ui/button';

export default function AnalyzeWeather() {

    const [adviceList, setAdviceList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const getWeather = async () => {
            try {
                const params = {
                    latitude: 35.5254,
                    longitude: 11.05,
                    hourly: ['temperature_2m', 'relative_humidity_2m', 'windspeed_10m', 'precipitation']
                };
                const url = 'https://api.open-meteo.com/v1/forecast';
                const responses = await fetchWeatherApi(url, params);

                const response = responses[0];
                const hourly = response.hourly();
                const temperature = hourly.variables(0).valuesArray().at(-1);
                const humidity = hourly.variables(1).valuesArray().at(-1);
                const windSpeed = hourly.variables(2).valuesArray().at(-1);
                const precipitation = hourly.variables(3).valuesArray().at(-1);

                const advice = [];

                // 🌡️ Temperature analysis
                if (temperature >= 35) {
                    advice.push("🌡️ Température très élevée – risque de déshydratation, arrosage plus fréquent recommandé.");
                } else if (temperature >= 28) {
                    advice.push("☀️ Température chaude – conditions favorables mais surveiller les plantes sensibles.");
                } else if (temperature <= 5) {
                    advice.push("❄️ Température très basse – risque de gel, protection des cultures nécessaire.");
                } else {
                    advice.push("✅ Température dans une plage normale.");
                }

                // 💧 Humidity analysis
                if (humidity < 30) {
                    advice.push("💧 Humidité faible – risque de dessèchement, prévoir un arrosage.");
                } else if (humidity > 80) {
                    advice.push("💦 Humidité élevée – surveiller le risque de moisissure ou champignons.");
                } else {
                    advice.push("✅ Humidité dans la plage optimale.");
                }

                // 🌬️ Wind analysis
                if (windSpeed >= 50) {
                    advice.push("🌬️ Vents très forts – sécuriser les équipements, attention aux structures légères.");
                } else if (windSpeed >= 30) {
                    advice.push("🍃 Vents modérés – surveillance recommandée pour les serres ou panneaux.");
                } else {
                    advice.push("✅ Vitesse du vent faible à modérée.");
                }

                // 🌧️ Precipitation analysis
                if (precipitation >= 10) {
                    advice.push("🌧️ Fortes précipitations attendues – planifier les activités extérieures avec précaution.");
                } else if (precipitation > 1) {
                    advice.push("☔ Légères précipitations – irrigation naturelle possible.");
                } else {
                    advice.push("☀️ Pas de précipitations prévues – irrigation manuelle nécessaire.");
                }

                setAdviceList(advice);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getWeather();
    }, []);

    if (loading) return <div>Chargement de l’analyse météo...</div>;
    if (error) return <div>Erreur lors du chargement des données météo: {error}</div>;

    return (
        <>
            <div >
                <Card className="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto my-6 border border-gray-200">
                    <CardHeader className="border-b-2 border-gray-300 pb-4">
                        <CardTitle className="text-3xl font-semibold text-gray-900">Analyse Météo</CardTitle>
                        <CardDescription className="text-base text-gray-600 mt-2">Recommandations basées sur les données actuelles</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 mt-6">
                        {adviceList.map((line, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <div className="text-2xl text-gray-500">•</div>
                                <p className="text-lg text-gray-700">{line}</p>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="mt-6">
                        <p className="text-sm text-gray-500 text-center">Données basées sur la météo actuelle</p>
                    </CardFooter>
                </Card>

            </div>
        </>

    );
}
