var express = require('express');


//app

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on 3000.')
});
