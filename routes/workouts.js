const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.get('/strength-training', ensureAuthenticated, (req, res) => res.render('strength-training'));
router.get('/bodybuilding', ensureAuthenticated, (req, res) => res.render('bodybuilding'));
router.get('workouts/users/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router; 
