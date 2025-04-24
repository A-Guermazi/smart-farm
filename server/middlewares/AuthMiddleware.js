
const { verify } = require("jsonwebtoken")
const validateToken = (req, res, next) => {
    const accessToken = req.header("accessToken");
    if (!accessToken) return res.json({ error: "User not logged in!" })
    try {
        const validToken = verify(accessToken, "thisIsAPasswordForToken")
        req.user = validToken
        if (validToken) { console.log("valid"); return next() }
        else { return res.json("user not logged in") }
    }
    catch (err) {
        return res.json({ error: err })

    }
}
module.exports = { validateToken }