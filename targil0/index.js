//moduels
var eventsConfig = require('./config').events;
var http = require ('http');
var hotel = require ('./ws');

//instances
var hotelexample = { hotel_name:'ambassador',hotel_rank:5,hotel_branch:'botique'};
var h1=hotel(hotelexample);

//event listeners and callbacks
h1.on(eventsConfig.Event1,function(){
	console.log(eventsConfig.Event1);
	console.log(h1.getter());	
});
h1.on(eventsConfig.Event2,function(){
	console.log(eventsConfig.Event2);
	console.log(h1.getter());	
});

//server creation
var server = http.createServer(function(req,res){
	res.writeHead(200);	
	//h1.like(); //browser calls it twice becuase of favicon.ico
	res.write("server created");
	res.end(" success");
});
server.listen(8080);
console.log('listening on port 8080');

//run methods 
	h1.like();
	h1.dislike();