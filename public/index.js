var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>Welcome to Timestamp API!</h1>' +
             '<h2>API usage: <h2>'               +
             'https://path_server/1450137600 '+
             'https://path_server/dec,1,2060'+
             '<h2>Output is: <h2>'+
             '<h3>{ Date: Tuesday, December 15, 2015 UnixEpochTime: 1450137600 }</h3>');
});





module.exports = router;