//Skeleton code from Module 14 lesson 20 /controllers/home-routes.js
const router = require('express').Router();
const { User, JobPosting} = require('../models');
//Import middleware to check if logged on
const withAuth = require('./../utils/auth')
// GET all Posts for homepage
router.get('/', async (req, res) => {
  try {
    const postData = await JobPosting.findAll({
      include: [{ model: User }],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.status(200).render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
    console.log(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all Posts for id
router.get('/dashboard', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{model: Comment}, {model: User}],
    });

    const userPosts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.status(200).render('dashboard', {
      userPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Post
router.get('/post/:id',withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
    // If the user is logged in, allow them to view the post
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{model: Comment}, {model: User}],
      });
      if(!postData){
        res.status(404).json({ message: 'No post found with that id!' });
      }else{
        const post = postData.get({ plain: true });
        res.status(200).render('post', { post, loggedIn: req.session.loggedIn });
      }   
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one comment
router.get('/comment/:id',withAuth, async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
    // If the user is logged in, allow them to view the post
    try {
      const commentData = await Comment.findByPk(req.params.id, {
        include: [{model: User}],
      });
      if(!commentData){
        res.status(404).json({ message: 'No comment found with that id!' });
      }else{
        const comment = commentData.get({ plain: true });
        res.status(200).render('comment', { comment, loggedIn: req.session.loggedIn });
      }   
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


//GET add-comment Page
router.get('/post/:id/add-comment', (req, res) => {
  if (req.session.loggedIn) {
    res.render('add-comment', { loggedIn: req.session.loggedIn });
    return;
  }

  res.redirect('/');
});

module.exports = router;
