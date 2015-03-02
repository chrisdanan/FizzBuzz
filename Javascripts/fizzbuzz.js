/*Name: Christopher Dancarlo Danan
 *Created: February 28, 2015
 *Modified: March 1, 2015
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

//JSHint config code:
// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function(){
	"use strict";

	var i = 1, j, k, v = 1, d,//Loop counters.
		stringArr1 = [], //Holds string of numbers, "Fizz", "Buzz", and "FizzBuzz" for fizzbuzz_1.
		stringArr2 = [], //Holds string of fizzbuzz_2.
		stringArr3 = [], //Holds string of fizzbuzz_3.
		stringArr4 = [], //Holds string of fizzbuzz_4.
		stringArr5 = []; //Holds string of fizzbuzz_5.

	//Purpose: Solve FizzBuzz problem for integers 1 - 100.
	function fizzbuzz_1(){
		for(i; i <= 100; i++){
			//Replace multiples of 3 with "Fizz".
			if((i % 3 === 0) && (i % 5 !== 0)){
				stringArr1.push("Fizz");
			//Replace multiples of 5 with "Buzz".
			} else if((i % 3 !== 0) && (i % 5 === 0)){
				stringArr1.push("Buzz");
			//Replace multiples of both 3 and 5 with "FizzBuzz".
			} else if((i % 3 === 0) && (i % 5 === 0)){
				stringArr1.push("FizzBuzz");
			//All other numbers remain as they are.
			} else{
				stringArr1.push(i);
			}
		}

		//Show output of function on web page.
		stringArr1.forEach(function(element){
			$("body .fizzbuzz_1").append($("<p>").text(element));
		});

	}//End fizzbuzz_1.

	//Purpose: Solve FizzBuzz problem for integers between start and end (inclusive).
	function fizzbuzz_2(start, end){
		//Ensure that start is less than or equal to end for loop to work properly.
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

			stringArr2.forEach(function(element){
				$("body .fizzbuzz_2").append($("<p>").text(element));
			});

		//Display error message that start is greater than end.
		} else{
			alert("Start parameter is greater than end parameter in fizzbuzz_2");
			console.log("ERROR: start is greater than end.");
		}
	}//End fizzbuzz_2.

	//Purpose: Takes in array of numbers to apply FizzBuzz on.
	function fizzbuzz_3(arr){
		//Make sure the array has some elements in it.
		if(arr.length > 0){
			for(k = 0; k < arr.length; k++){
				if((arr[k] % 3 === 0) && (arr[k] % 5 !== 0)){
					stringArr3.push("Fizz");
				} else if((arr[k] % 3 !== 0) && (arr[k] % 5 === 0)){
					stringArr3.push("Buzz");
				} else if((arr[k] % 3 === 0) && (arr[k] % 5 === 0)){
					stringArr3.push("FizzBuzz");
				} else{
					stringArr3.push(arr[k]);
				}
			}

			stringArr3.forEach(function(element){
				$("body .fizzbuzz_3").append($("<p>").text(element));
			});
			
		} else{
			alert("Array for fizzbuzz_3 has no elements in it");
			console.log("No output for fizzbuzz_3 because arr has no elements.");
		}

	}//End fizzbuzz_3.
	
	//Purpose: Take an object that specifies the words to be printed instead of "Fizz" and "Buzz".
	function fizzbuzz_4(obj){

		for(v; v <= 100; v++){
			if((v % 3 === 0) && (v % 5 !== 0)){
				stringArr4.push(obj.divisibleByThree);
			} else if((v % 3 !== 0) && (v % 5 === 0)){
				stringArr4.push(obj.divisibleByFive);
			} else if((v % 3 === 0) && (v % 5 === 0)){
				stringArr4.push(obj.divisibleByThree + obj.divisibleByFive);
			} else{
				stringArr4.push(v);
			}
		}

		stringArr4.forEach(function(element){
			$("body .fizzbuzz_4").append($("<p>").text(element));
		});
	}//End fizzbuzz_4.

	//Purpose: Combine fizzbuzz_3 and fizzbuzz_5.
	function fizzbuzz_5(arr, obj){
		if(arr.length > 0){
			for(d = 0; d < arr.length; d++){
				if((arr[d] % 3 === 0) && (arr[d] % 5 !== 0)){
					stringArr5.push(obj.divisibleByThree);
				} else if((arr[d] % 3 !== 0) && (arr[d] % 5 === 0)){
					stringArr5.push(obj.divisibleByFive);
				} else if((arr[d] % 3 === 0) && (arr[d] % 5 === 0)){
					stringArr5.push(obj.divisibleByThree + obj.divisibleByFive);
				} else{
					stringArr5.push(arr[d]);
				}
			}

			stringArr5.forEach(function(element){
				$("body .fizzbuzz_5").append($("<p>").text(element));
			});
		} else{
			alert("Array for fizzbuzz_5 has no elements in it");
			console.log("No output for fizzbuzz_5 because arr has no elements");
		}
	}//End fizzbuzz_5.

	fizzbuzz_1();
	fizzbuzz_2(200, 300);
	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
	fizzbuzz_4({divisibleByThree: "foo", divisibleByFive: "bar"});
	fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], {divisibleByThree: "foo", divisibleByFive: "bar"});
};

$(document).ready(main);

/*t
fflvd*/