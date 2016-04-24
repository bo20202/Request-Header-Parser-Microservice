var express = require('express');
var app = express();
var route = require("./app/routes/routes.js")
var port = process.env.PORT || 8080;

route(app);

app.listen(port,function(){
  console.log("Listening on port: " + port);
})




