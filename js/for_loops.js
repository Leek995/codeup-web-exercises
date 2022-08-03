"use strict"
function showMultiplicationTable(multiple) {
	for (var i = 0; i <= 10; ++i) {
		if (multiple > 0) {
             console.log(multiple + " x " + i + " = " + (multiple * i));
		} else {
        	alert("multiples of zero is always zero");
			break;
		}
	}
}

function evenOdd(ran_number) {
	for (var i = 0; i <= 10; ++i) {
		if (ran_number % 2 === 0) {
			console.log(ran_number + " is an even number.");
			ran_number = Math.floor(Math.random() * 180) + 20;

		} else if (ran_number % 2 !== 0) {
			console.log(ran_number + " is an odd number");
			ran_number = Math.floor(Math.random() * 180) + 20;

		} else if(ran_number === 0) {
			console.log("undefined");
		}
	}
}
evenOdd();

for (var i = 1; i < 9; ++i) {
	console.log(i.toString().repeat(i));
}

for(var i =100; i >= 5; i -=5 ) {
	console.log(i);
}



