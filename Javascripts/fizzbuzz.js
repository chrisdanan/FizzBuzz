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

	var i = 1, j, k,//Loop counter.
		stringArr1 = [], //Holds string of numbers, "Fizz", "Buzz", and "FizzBuzz" for fizzbuzz_1.
		stringArr2 = [], //Holds string of fizzbuzz_2.
		start, //Start parameter for fizzbuzz_2.
		end, //End parameter for fizzbuzz_2.
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
		}

		stringArr1.forEach(function(element){
			$("body .fizzbuzz_1").append($("<p>").text(element));
		});

	}//End fizzbuzz_1.

	function fizzbuzz_2(start, end){
		if(start <= end){
			for(j = start; j <= end; j++){
				if((j % 3 === 0) && (j % 5 !== 0)){
					stringArr2.push("Fizz");
				} else if((j % 3 !== 0) && (j % 5 ===0)){
					stringArr2.push("Buzz");
				} else if((j % 3 === 0) && (j % 5 === 0)){
					stringArr2.push("FizzBuzz");
				} else{
					stringArr2.push(j);
				}
			}
		} else{
			$("body .fizzbuzz_2").append($("<p>").text("ERROR: second parameter is larger than the first"));
			console.log("ERROR: start is greater than end.");
		}

		stringArr2.forEach(function(element){
			$("body .fizzbuzz_2").append($("<p>").text(element));
		});

	}//End fizzbuzz_2.

	fizzbuzz_1();
	fizzbuzz_2(11, 33);
};

$(document).ready(main);