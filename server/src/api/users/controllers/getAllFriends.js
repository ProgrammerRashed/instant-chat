const User = require("../../../models/User")

const getAllFriends = async (req, res, next)=>{

    try {
        const activeUserId = req.user.id 
        const allFriends = await User.find({_id: {$ne: activeUserId}}).select("-password")
        res.status(200).send(allFriends)
    } catch (error) {
        next(error)
    }


}

module.exports = getAllFriends