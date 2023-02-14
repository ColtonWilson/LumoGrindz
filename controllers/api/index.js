const router = require('express').Router();

const userRoutes = require('./user-routes');
const postingRoutes = require('./posting-routes');
const adminRoutes = require('./admin-routes');

router.use('/user-routes', userRoutes);
router.use('/job-postings', postingRoutes);
router.use('/admin', adminRoutes);

module.exports = router;