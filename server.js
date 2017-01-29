//var http = require('http');
//var fs = require('fs');
//
//http.createServer(function(req, res){
//
//  switch(req.url) {
//    case '/':
//      sendFile('index.html', res);
//      break;
//    default:
//      res.statusCode = 404;
//      res.end('Not found');
//  }
//
//  function sendFile(fileName, res) {
//    var fileStream = fs.createReadStream(fileName);
//    fileStream
//      .on('error', function() {
//        res.statusCode = 500;
//        res.end('Server error');
//      })
//      .pipe(res);
//
//    res.on('close', function() {
//      fileStream.destroy();
//    });
//  }
//
//
//}).listen(8080);

var http = require('http'),
    filed = require('filed');

server = http.createServer(function(req, resp){
  if(req.url === "/"){
    req.pipe(filed('index.html')).pipe(resp);
  }else{
    req.pipe(filed("./" + req.url)).pipe(resp);
  }
});

var port = process.argv[2] || 80;

server.listen(port, function(){
  console.log("Server started on " + port);
});
