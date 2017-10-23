var _ = require('lodash');
var randomInt = require('random-int');
var temp;
var assigned = [];
var obj = {};

var people = ["jared", "jared", "chapman", "chapman", "dave", "dave", "dan", "dan", "krista", "krista", "lance", "lance", "nino", "nino", "taylor", "taylor", "matt", "matt", "seth", "seth"];
var cases = ["4307", "4185", "4183", "4182", "4180", "4179", "4178", "4177", "4175", "4174", "4172", "4171", "4170", "4169", "4168", "4167", "4166", "4165", "4164", "4161", "4160", "4158", "4157", "4156", "4154"];

_.forEach(people, function(val){
	temp = randomInt(cases.length - 1);
	obj[cases[temp]] = val;
	assigned.push(obj);
	cases.splice(temp, 1);
	obj = {};
});

console.log(assigned);
console.log(cases);