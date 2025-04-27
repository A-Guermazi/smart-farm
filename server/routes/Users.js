const express = require("express")
const router = express.Router()
const { Users, Farms, FarmJoinRequests } = require("../models")

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
    // find user
    const user = await Users.findOne({ where: { email: email } })
    if (!user) {
        return res.json({ error: "User not exist" });
    }
    // compare password
    console.log("user")
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { return res.json({ error: "Invalid credentials" }); }
    //this is where you create a token
    const accessToken = sign({ userId: user.id, email: user.email, farm: user.FarmId, admin: user.admin }, "thisIsAPasswordForToken")
    res.json({ accessToken: accessToken, farmId: user.FarmId });

});


//assosiate to farm
router.post("/assosiateOwnerToFarm", validateToken, async (req, res) => {
    const { code, admin } = req.body;
    const user = await Users.findOne({ where: { email: req.user.email } })
    const farm = await Farms.findOne({ where: { code: code } })
    if (!farm) { return res.json("form not exist") }
    user.FarmId = farm.id
    user.admin = admin
    await user.save()
    res.json(farm)
    //user has a farm id and admin that are currently null
    // this will update it with the farm id

});

router.post("/farmjoinreq", validateToken, async (req, res) => {
    const { code } = req.body;
    const user = await Users.findOne({ where: { id: 1 } })
    const farm = await Farms.findOne({ where: { code: code } })
    if (!farm) { return res.json("farm not exist") }
    const existingRequest = await FarmJoinRequests.findOne({
        where: {
            UserId: req.user.userId,
            FarmId: farm.id,
        },
    });

    if (existingRequest) {
        return res.json("request already submitted");
    }
    FarmJoinRequests.create({
        UserId: req.user.userId,
        FarmId: farm.id,
    })
    res.json("success")
});
router.get("/showReqsToJoinFarm", validateToken, async (req, res) => {
    const userReqs = await FarmJoinRequests.findAll({
        where: {
            FarmId: req.user.farm,
            status: "pending"
        }
        ,
        include: [{
            model: Users,
            attributes: ['id', 'name', 'lastName', 'email'], // change as needed
        }]
    })
    const users = userReqs.map(req => req.User);
    res.json(users)
    //find all where they have a req in FarmJoinRequests table with the current farm id
})
router.post("/handleReqsToJoin", validateToken, async (req, res) => {
    const { user, type } = req.body
    const db_req = await FarmJoinRequests.findOne({ where: { UserId: user.id } })

    if (type == "accept") {
        const db_user = await Users.findOne({ where: { email: user.email, id: user.id } })

        db_user.FarmId = req.user.farm
        db_user.admin = false
        await db_user.save()

        db_req.status = "approved"
        await db_req.save()
        return res.json("accepted")

    }
    else if (type == "reject") {
        db_req.status = "rejected"
        await db_req.save()
        return res.json("rejected")
    } else {
        res.json("not valid")
    }


    //find all where they have a req in FarmJoinRequests table with the current farm id
})







router.get("/validToken", validateToken, async (req, res) => {
    res.json(req.user)
})





router.post("/justForTesting", async (req, res) => {
    //this will  
    for (let i = 3; i < 10; i++) {
        console.log(i)
        FarmJoinRequests.create({
            UserId: i,
            FarmId: 1,
        })
    }
    res.json("zebi")


});




module.exports = router

