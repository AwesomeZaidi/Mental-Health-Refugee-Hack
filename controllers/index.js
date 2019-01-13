const express = require('express');
const router = express.Router();
// const User = require("../models/user");
// const twilio = require("./twilio.js");
// console.dir(twilio);  
// console.dir(router);


/* GET index page. */
router.get('/', (req, res) => {
    console.log('in this route');
    res.render('index'); //render this file from the partials folder, it knows this cuz we told it to just know this in our server file.
});

module.exports = router;