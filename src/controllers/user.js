const User = require('../models/User')
const actionUser = {}

actionUser.createUser = async (req, res) => {
    const {name, age} = req.body
    const newUser = new User({name, age})
    newUser.save()
    .then(()=>res.json('User created success!'))
    .catch(e=> res.json(e))
}

actionUser.getUsers = (req, res) => {
    User.find()
    .then(users=> res.json(users))
    .catch(e=> res.json(e))
}

actionUser.getUser = (req, res) => {
    User.findById(req.params.id)
    .then(user=>res.json(user))
    .catch(e=> res.json(e))
}

actionUser.updateUser = (req, res) => {
    const {name, age} = req.body
    User.findByIdAndUpdate(req.params.id, {name, age})
    .then(()=>res.json('User updates success!'))
    .catch(e=> res.json(e))
}

actionUser.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(()=>res.json('User deleted success!'))
    .catch(e=> res.json(e))
}

module.exports = actionUser