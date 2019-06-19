const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* Login de usuarios */
router.get('/login', (req, res) =>{
  res.render('login')
})

module.exports = router;
