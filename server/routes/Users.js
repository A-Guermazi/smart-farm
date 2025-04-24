const express = require("express")
const router = express.Router()
const { Users, Farms } = require("../models")

//const bcrypt=require("bcrypt")
//both are the same but bcrypt is depricated (still runs ig ) but faster
const bcrypt = require("bcryptjs")
const { sign } = require("jsonwebtoken")
const { validateToken } = require("../middlewares/AuthMiddleware")

//sign up
router.post("/", async (req, res) => {
    const { name, lastName, password, email } = req.body
    const user = await Users.findOne({ where: { email: email } });
    if (user) { return res.json({ error: "email is used" }); }
    //we use async and await to make sure all post is created before moving
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            name: name,
            lastName: lastName,
            email: email,
            password: hash,

        }); 10
        res.json("succsess")
    })
})

//login
router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // // Find user
    const user = await Users.findOne({ where: { email: email } })
    if (!user) {
        return res.json({ error: "User not exist" });
    }
    // Compare password
    console.log("user")
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { return res.json({ error: "Invalid credentials" }); }
    //this is where you create a token
    const accessToken = sign({ email: user.email, farm: user.FarmId, admin: user.admin }, "thisIsAPasswordForToken")
    res.json({ accessToken: accessToken, farmId: user.FarmId });

});


//assosiate to farm
router.post("/assosiateToFarm", validateToken, async (req, res) => {
    const { code, admin } = req.body;
    const user = await Users.findOne({ where: { email: req.user.email } })
    const farm = await Farms.findOne({ where: { code: code } })
    if (!farm) { return res.json("form not exist") }
    user.FarmId = farm.id
    user.admin = admin
    await user.save()
    res.json(farm)
    //user has a farm id and admin that are currently null
    // i want to update it with the farm id

});


router.get("/validToken", validateToken, async (req, res) => {
    res.json(req.user)
})

module.exports = router