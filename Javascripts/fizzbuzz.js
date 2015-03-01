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
		stringArr1 = [], //Holds string of numbers, "Fizz", "Buzz", and "FizzBuzz".
		$ul = $("<ul>");

	//Purpose: Solve FizzBuzz problem.
	function fizzbuzz_1(){
		for(i; i <= 100; i++){
			if((i % 3 === 0) && (i % 5 !== 0)){
				stringArr1.push("Fizz");
			} else if((i % 3 !== 0) && (i % 5 === 0)){
				stringArr1.push("Buzz");
			} else if((i % 3 === 0) && (i % 5 === 0)){
				stringArr1.push("FizzBuzz");
			} else{
				stringArr1.push(i);
			}
		}//End for-loop.

		stringArr1.forEach(function(element){
			$ul.append($("<li>").text(element));
		});

		$("body .fizzbuzz_1").append($ul);
	}

	fizzbuzz_1();
};

$(document).ready(main);