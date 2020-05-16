const express = require('express')
const router = express.Router()
const {createUser, getUser, getUsers, updateUser, deleteUser} = require('../controllers/user')

//Asings controllers
router.route('/')
.get(getUsers)
.post(createUser)

router.route('/:id')
.get(getUser)
.put(updateUser)
.delete(deleteUser)

module.exports = router