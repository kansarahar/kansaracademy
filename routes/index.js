const express = require('express');
const router = express.Router();

const path = require('path');

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.redirect('/home')
})

router.get('/home', (req, res, next)=> {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../html/home.html'))
});

module.exports = router;
