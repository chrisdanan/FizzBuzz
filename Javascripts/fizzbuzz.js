/*Name: Christopher Dancarlo Danan
 *Created: February 28, 2015
 *Modified: February 28, 2015
 *Purpose: Solve the FizzBuzz problem.
 		   From the book: 	Write a program that prints the numbers from 1 to 100. 
 		   					But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz.” 
 		   					For numbers which are multiples of both three and five print “FizzBuzz.” 
 *References:
 	-Help on JavaScript objects:
 	 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 	 http://stackoverflow.com/questions/7764536/pass-object-to-javascript-function
 	-Help on how to use config for JSHint:
 	 http://jshint.com/docs/
*/

// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function(){
	"use strict";

	var i = 1, j, k,//Loop counter.
		stringArr1 = [], //Holds string of numbers, "Fizz", "Buzz", and "FizzBuzz" for fizzbuzz_1.
		stringArr2 = [], //Holds string of fizzbuzz_2.
		stringArr3 = [], //Holds string of fizzbuzz_3.
		stringArr4 = []; //Holds string of fizzbuzz_4.

	//Purpose: Solve FizzBuzz problem for integers 1 - 100.
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

	//Purpose: Solve FizzBuzz problem for integers between start and end (inclusive).
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

	//Purpose: Takes in array of numbers to apply FizzBuzz on.
	function fizzbuzz_3(tempArray){
		if(tempArray.length > 0){
			for(k = 0; k < tempArray.length; k++){
				if((tempArray[k] % 3 === 0) && (tempArray[k] % 5 !== 0)){
					stringArr3.push("Fizz");
				} else if((tempArray[k] % 3 !== 0) && (tempArray[k] % 5 === 0)){
					stringArr3.push("Buzz");
				} else if((tempArray[k] % 3 === 0) && (tempArray[k] % 5 === 0)){
					stringArr3.push("FizzBuzz");
				} else{
					stringArr3.push(tempArray[k]);
				}
			}
		}

		stringArr3.forEach(function(element){
			$("body .fizzbuzz_3").append($("<p>").text(element));
		});

	}//End fizzbuzz_3.
	
	function fizzbuzz_4(arg){
		console.log(arg.divisibleByThree);
		console.log(arg.divisibleByFive);
	}
	/*
	fizzbuzz_1();
	fizzbuzz_2(200, 300);
	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
	*/
	fizzbuzz_4({divisibleByThree: "Foo", divisibleByFive: "Bar"});
};

$(document).ready(main);

/*t
fflvd*/