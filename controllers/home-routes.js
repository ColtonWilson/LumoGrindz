//Skeleton code from Module 14 lesson 20 /controllers/home-routes.js
const router = require('express').Router();
const { User, JobPosting} = require('../models');
//Import middleware to check if logged on
const withAuth = require('./../utils/auth')
// GET all Posts for homepage
router.get('/', async (req, res) => {
  try {
    const JobPostingData = await JobPosting.findAll({
      include: [{ model: User }],
    });

    const posts = JobPostingData.map((post) =>
      post.get({ plain: true })
    );

    res.status(200).render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all Posts for user
router.get('/postings', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
        const postData = await JobPosting.findAll({
        include: [{
          model: User,
          where: {
            id: req.session.user_id,
          }

        }],
        });
        // console.log(postData);
        const userPosts = postData.map((post) =>
        post.get({ plain: true })
       );

        res.status(200).render('user-postings', {
        userPosts,
        loggedIn: req.session.loggedIn,
        });
        } catch (err) {
        console.log(err);
        res.status(500).json(err);
        }
    }
});


//GET login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});




//GET add-job page
router.get('/add-job', (req, res) => {
  if (req.session.loggedIn) {
    res.render('add-job');
    return;
  }
  res.redirect('/login');

});

module.exports = router;
