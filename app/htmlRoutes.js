const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/home.html'));
})

router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/survey.html'));
});


//add router
app.use('/', router);
app.listen(process.env.port || 8080);