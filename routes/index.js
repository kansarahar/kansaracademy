const express = require('express');
const router = express.Router();

const path = require('path');

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.redirect('/home')
})

router.get('/home', (req, res, next)=> {
  res.render('index', { 
    home: 'active', 
    projects: 'not-active', 
    about: 'not-active' 
});
});

router.get('/projects', (req, res, next)=> {
  res.render('index', { 
    home: 'not-active', 
    projects: 'active', 
    about: 'not-active' 
  });
});

router.get('/about', (req, res, next)=> {
  res.render('index', { 
    home: 'not-active', 
    projects: 'not-active', 
    about: 'active' 
  });
});
module.exports = router;
