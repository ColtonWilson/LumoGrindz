//Skeleton code from Module 14 lesson 20 /controllers/index.js
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.send("<h1>Wrong Route!</h1>")
//   });


module.exports = router;