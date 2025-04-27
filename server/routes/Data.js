const express = require("express")
const router = express.Router()
const { Farms, GreenHouse, WeatherStation, Notification } = require("../models")
const { where } = require("sequelize")
const { validateToken } = require("../middlewares/AuthMiddleware")


router.get("/getLastGreenHouse", validateToken, async (req, res) => {
    const data = await GreenHouse.findOne({
        where: { FarmId: req.user.farm },
        order: [['createdAt', 'DESC']]
    });

    if (!data) {
        return res.json({ error: "No data found for this farm" });
    }
    res.json(data)
})
router.get("/getLastWeatherStation", validateToken, async (req, res) => {
    const data = await WeatherStation.findOne({
        where: { FarmId: req.user.farm },
        order: [['createdAt', 'DESC']]
    });

    if (!data) {
        return res.json({ error: "No data found for this farm" });
    }
    res.json(data)
})



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











//add data to green house
router.post("/postGreenHouse", async (req, res) => {
    const { temperature, FarmId } = req.body
    console.log("tempture")
    const farm = await Farms.findOne({ where: { id: FarmId } })
    if (!farm) { return res.json("form not exist") }
    GreenHouse.create({
        temperature: temperature,
        FarmId: farm.id
    });
    res.json("success")
})

router.get("/getLastTempture", async (req, res) => {
    const { FarmId } = req.body
    console.log("tempture")
    const farm = await Farms.findOne({ where: { id: FarmId } })
    if (!farm) { return res.json("form not exist") }

    const latestTemp = await GreenHouse.findOne({
        where: { FarmId: FarmId },
        order: [['createdAt', 'DESC']]
    });

    if (!latestTemp) {
        return res.json({ error: "No temperature data found for this farm" });
    }


    res.json(latestTemp.temperature)
})






//the function bellow will create dummy data for the last 6 months


// Helper function to increment date by a number of days and set specific times for AM and PM entries
const incrementDateByDays = (date, days) => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days); // Increment by given days
    return newDate;
};

// Helper function to set time for a specific hour and minute
const setTime = (date, hour, minute) => {
    const newDate = new Date(date);
    newDate.setHours(hour, minute, 0, 0); // Set specific hour and minute
    return newDate;
};

router.post("/testSensors", async (req, res) => {
    try {
        const farmId = 1; // Change to a valid farm ID
        const entriesCount = 180; // Two entries per day for 6 months (6 months = 180 days)
        let currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 6); // Start from 6 months ago

        for (let i = 0; i < entriesCount; i++) {
            // For morning entry at 9 AM
            const morningDate = setTime(incrementDateByDays(currentDate, i), 9, 0);
            const eveningDate = setTime(incrementDateByDays(currentDate, i), 21, 0); // Evening entry at 9 PM

            // Insert GreenHouse data for morning entry
            await GreenHouse.create({
                temperature: Math.floor(Math.random() * 35) + 10, // 10 - 44 °C
                humidity: Math.floor(Math.random() * 50) + 30,     // 30% - 80%
                soilHumidity: Math.floor(Math.random() * 50) + 20, // 20% - 70%
                gas: Math.floor(Math.random() * 100),              // 0 - 100 (arbitrary unit)
                fan: Math.random() > 0.5 ? 1 : 0,                  // Fan ON or OFF
                FarmId: farmId,
                createdAt: morningDate,
                updatedAt: morningDate,
            });

            // Insert WeatherStation data for morning entry
            await WeatherStation.create({
                Wind: Math.floor(Math.random() * 100),             // Wind speed in km/h
                rain: Math.random() > 0.7 ? true : false,          // Raining or not (true/false)
                FarmId: farmId,
                createdAt: morningDate,
                updatedAt: morningDate,
            });

            // Insert GreenHouse data for evening entry
            await GreenHouse.create({
                temperature: Math.floor(Math.random() * 35) + 10, // 10 - 44 °C
                humidity: Math.floor(Math.random() * 50) + 30,     // 30% - 80%
                soilHumidity: Math.floor(Math.random() * 50) + 20, // 20% - 70%
                gas: Math.floor(Math.random() * 100),              // 0 - 100 (arbitrary unit)
                fan: Math.random() > 0.5 ? true : false,                  // Fan ON or OFF
                FarmId: farmId,
                createdAt: eveningDate,
                updatedAt: eveningDate,
            });

            // Insert WeatherStation data for evening entry
            await WeatherStation.create({
                Wind: Math.floor(Math.random() * 100),             // Wind speed in km/h
                rain: Math.random() > 0.7 ? true : false,          // Raining or not (true/false)
                FarmId: farmId,
                createdAt: eveningDate,
                updatedAt: eveningDate,
            });
        }

        res.json({ message: "Test data inserted with sequential timestamps for 6 months" });
    } catch (err) {
        console.error("Error inserting test data:", err);
        res.status(500).json({ error: "Failed to insert test data" });
    }
});




const generateDummyData = async () => {
    const currentDate = new Date(); // Get the current date and time

    // GreenHouse dummy data
    const temperature = Math.floor(Math.random() * 20) + 13; // Random temperature between 20 and 30
    const humidity = Math.floor(Math.random() * 50) + 60; // Random humidity between 50 and 100
    const soilHumidity = Math.floor(Math.random() * 40) + 40; // Random soil humidity between 40 and 70
    const gas = Math.floor(Math.random() * 7) + 5; // Random gas between 5 and 10
    const fan = Math.random() > 0.7 ? true : false; // Random fan status (0 or 1)

    // const normalRange = (current, min, max) => {
    //     if (current >= min && current <= max) {
    //         return { status: "bon", color: "text-green-500" }; // green for normal
    //     } else if (current < min) {
    //         return { status: "trop bas", color: "text-red-500" }; // red for too low
    //     } else if (current > max) {
    //         return { status: "trop haut", color: "text-yellow-500" }; // yellow for too high
    //     } else {
    //         return { status: "erreur", color: "text-gray-500" }; // gray for error
    //     }
    // }
    if (temperature < 15 || temperature > 25) {
        await Notification.create({
            title: "Temperature Alert",
            text: `Temperature out of range: ${temperature}°C`,
            FarmId: 1, // Assuming FarmId is 1

        });
    }
    if (humidity < 30 || humidity > 70) {
        await Notification.create({
            title: `Humidity Alert`,
            text: `Humidity out of range: ${humidity}%`,
            FarmId: 1, // Assuming FarmId is 1

        });
    }
    if (soilHumidity < 20 || soilHumidity > 60) {
        await Notification.create({
            title: `Soil Humidity Alert`,
            text: `Soil Humidity out of range: ${soilHumidity}%`,
            FarmId: 1, // Assuming FarmId is 1

        });
    }
    if (gas < 0 || gas > 10) {
        await Notification.create({
            title: `Gas Alert`,
            text: `Gas out of range: ${gas} PPM`,
            FarmId: 1, // Assuming FarmId is 1

        });
    }



    // Insert GreenHouse data
    await GreenHouse.create({
        temperature,
        humidity,
        soilHumidity,
        gas,
        fan,
        FarmId: 1, // Assuming FarmId is 1

    });

    // WeatherStation dummy data
    const wind = Math.floor(Math.random() * 10); // Random wind between 0 and 10
    const rain = Math.random() > 0.5 ? true : false; // Random rain (0 or 1)
    if (rain) {
        await Notification.create({
            title: `Rain Alert`,
            text: `Rain detected`,
            FarmId: 1, // Assuming FarmId is 1

        });
    }
    if (wind > 5) {
        await Notification.create({
            title: `Wind Alert`,
            text: `Wind detected: ${wind} km/h`,
            FarmId: 1, // Assuming FarmId is 1

        });
    }
    // Insert WeatherStation data
    await WeatherStation.create({
        Wind: wind,
        rain: rain,
        FarmId: 1, // Assuming FarmId is 1

    });

    console.log("New dummy data generated for the current minute!");
};

// Set an interval to run every 1 minute (60000 ms)
setInterval(generateDummyData, 50000); // Run the function every minute




module.exports = router;



