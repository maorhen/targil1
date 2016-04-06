//modules
var Emitter = require('events');
var util = require ('util');
var eventsConfig = require('../config').events;

//constructor
var hotelobject = function() {
	Emitter.call(this); //inherit from Emitter
	this.data = { 
		hotel_name: null ,
		hotel_rank:null ,
		hotel_branch:null
	};
	//methods
	this.setter = function(info) { 
		for(var i in this.data) { this.data[i] = info[i];}
	};
	this.getter = function() { 
		return this.data;
	};
};

util.inherits(hotelobject,Emitter); //instance inherit from Emitter
	//functions - prototypes
	hotelobject.prototype.like = function() {
		this.data.hotel_rank+=1;
		this.emit(eventsConfig.Event1); 	
	}
	hotelobject.prototype.dislike = function() {
		if(this.data.hotel_rank>0)
		this.data.hotel_rank-=1;
		this.emit(eventsConfig.Event2); 
	}

//module export
module.exports = function (info) { 
	var somehotel = new hotelobject(); //create instance
	somehotel.setter(info);
	return somehotel;
};