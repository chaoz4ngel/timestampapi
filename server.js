var express=require("express");
var time = require("strftime");
var port = 8080;
var router = express.Router();
var app = express();
const index = require('./public/index');

router.get('/', (req, res) => {
    res.send('YAY!');
});


app.get('/:dataInput', function (req, res) {
  
  var re = /^\w*(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec),\d{1,2},\d{2,4}/gi;
  var re2 = /^\d{1,10}$/;
  var date = req.params.dataInput;
  
  if (date.match(re)) {
    var timestamp = time('{ \n Natural: %A, %B %d, %Y \n Unix: %s \n }', new Date(date));
    res.send(timestamp);
  } else if (date.match(re2)) {
    var date2 = new Date(0);
    date2.setSeconds(date);
    var timestamp = time('{ \n Natural: %A, %B %d, %Y \n Unix: %s \n }', new Date(date2));
    res.send(timestamp);
  }else {
    res.send('Check syntax');
  }
});

app.use('/', index);

app.listen(port, function () {
  console.log('App listening on port ' + port);
});