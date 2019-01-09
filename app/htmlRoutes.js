const express = require('express');
const path = require('path');

const app = express();

app.get('/:survey', (req, res) => {
    res.send('ab+cd');
})



app.listen(8080, function () {
    console.log('listening on port 8080....')
})