// import express
const express = require('express')

// import userController
const userController = require('./controllers/userController')

// import projectController
const projectController = require('./controllers/projectController')

// import jwtmiddleware
const jwtmiddleware = require('./middleware/jwtMiddleware')

// import multer
const multerConfig = require('./middleware/multerMiddleware')

// instance router
const router = new express.Router()

// Register
router.post('/register',userController.register)

// Login
router.post('/login',userController.login)

// add-project
router.post('/add-project',jwtmiddleware,multerConfig.single("projectImage"),projectController.addProjectController)

// get all project
router.get('/all-project',jwtmiddleware,projectController.getAllProjectsController)

// get home projects
router.get('/home-project',projectController.getHomeProjectsController)

// user project
router.get('/user-project',jwtmiddleware,projectController.getUserProjectsController)

// remove user project
router.delete('/remove-userproject/:id', jwtmiddleware, projectController.removeUserProjectController)

// update userProject
router.put('/update-userProject/:id', jwtmiddleware, multerConfig.single("projectImage"),projectController.editProjectController)

// update profile
router.put('/update-userProfile', jwtmiddleware, multerConfig.single("profile"), userController.editProfileController)

// export router
module.exports = router
