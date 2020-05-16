const User = require('../models/User')
const actionUser = {}

actionUser.createUser = async (req, res) => {
    const {name, age} = req.body
    const newUser = new User({name, age})
    await newUser.save()
    res.json('Added success!')
}

actionUser.getUsers = async (req, res) => {
    User.find()
    .then(users=> res.json(users))
    .catch(e=> res.json(e))
}

actionUser.getUser = async (req, res) => {
    let user = await User.findById(req.params.id)
    res.json(user)
}

actionUser.updateUser = async (req, res) => {
    const {name, age} = req.body
    await User.findByIdAndUpdate(req.params.id, {name, age})
    res.json('Updated success!')
}

actionUser.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json('Deleted success!')
}

module.exports = actionUser