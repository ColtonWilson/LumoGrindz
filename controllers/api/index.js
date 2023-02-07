//Skeleton code from Module 14 lesson 20 /controllers/index.js
const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;