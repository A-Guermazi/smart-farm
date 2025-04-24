const express = require("express")
const router = express.Router()
const { Farms, } = require("../models")
const { where } = require("sequelize")
const { validateToken } = require("../middlewares/AuthMiddleware")


//create farm
router.post("/", async (req, res) => {
    const { name, code } = req.body
    Farms.create({
        name: name,
        code: code

    });
    res.json("success")
})



router.get("/", validateToken, async (req, res) => {
    // const listOfFarms = await Farms.findAll({ include: [Likes] })
    // const likedFarms = await Likes.findAll({ where: { userId: req.user.user } })
    // res.json({ listOfFarms: listOfFarms, likedFarms: likedFarms, username: req.user.username })

})
router.get("/byId/:id", validateToken, async (req, res) => {
    //response.json("hello world")
    // const id = req.params.id
    // const singleFarm = await Farms.findByPk(id)
    // const likedFarm = await Likes.findOne({ where: { userId: req.user.user, FarmId: id } })
    // likeCount = await Likes.count({ where: { FarmId: id } })
    // if (likedFarm) {
    //     res.json({ singleFarm: singleFarm, likedFarm: true, likeCount: likeCount })
    // }
    // else { res.json({ singleFarm: singleFarm, likedFarm: false, likeCount: likeCount }) }
    // //const Farm=await Farms.findOne({where:{id:id}})
})


router.delete("/:id", validateToken, async (req, res) => {

    // const username = req.user.username
    // const id = req.params.id
    // const Farm = await Farms.findByPk(id)
    // console.log(Farm.id)
    // console.log(username)
    // console.log(Farm.username)
    // if (username == Farm.username) {
    //     await Farms.destroy({ where: { id: Farm.id } })
    //     res.json("deleted");
    // }

    // else {
    //     res.json("you can't delete someone else Farm");
    // }
})

module.exports = router