const express = require("express")
const router = express.Router()
const { Farms, GreenHouse, WeatherStation } = require("../models")
const { where } = require("sequelize")

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




module.exports = router