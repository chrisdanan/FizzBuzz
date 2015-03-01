/*Name: Christopher Dancarlo Danan
 *Created: February 28, 2015
 *Modified: February 28, 2015
 *Purpose: Solve the FizzBuzz problem.
 		   From the book: 	Write a program that prints the numbers from 1 to 100. 
 		   					But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz.” 
 		   					For numbers which are multiples of both three and five print “FizzBuzz.” 
*/

// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function(){
	"use strict";

	var i = 1, //Loop counter.
		stringArr = []; //Holds string of numbers, "Fizz", "Buzz", and "FizzBuzz".

	for(i; i <= 100; i++){
		if((i % 3 === 0) && (i % 5 !== 0)){
			stringArr.push("Fizz");
		} else if((i % 3 !== 0) && (i % 5 === 0)){
			stringArr.push("Buzz");
		} else if((i % 3 === 0) && (i % 5 === 0)){
			stringArr.push("FizzBuzz");
		} else{
			stringArr.push(i);
		}
	}//End for-loop.

	stringArr.forEach(function(element){
		console.log(element);
	});
};

$(document).ready(main);