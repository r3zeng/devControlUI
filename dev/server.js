var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});


// Routing
var router = express.Router();

app.use(express.static(__dirname + '/public'));
app.use("/",router);

router.get("/",function(req,res){
  res.sendFile(path.join(__dirname, '') + "/index.html");
});

router.get("/createRequest",function(req,res){
  res.sendFile(path.join(__dirname, '') + "/createRequest.html");
});
