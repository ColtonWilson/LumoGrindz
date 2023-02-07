//Copied from Module 14 lesson 20 /utils/auth.js
const withAuth = (req, res, next) => {
 
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
   next();
  }
};

module.exports = withAuth;