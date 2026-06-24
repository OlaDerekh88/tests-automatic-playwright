// Your task:
// 1. Write body of function 'elementChecker'
// 2. Inside this function there is forEach to iterate through elements from an array
// 3. During iteration check value of each element
// 4. If it equals number 1 - then print on console 'Element value is one!'
// 5. If it equals number 0 - then print on console 'Element value is zero!'

// to test your solution in terminal You can run following command:
// npm run es2e2

//// TODO:

function elementChecker(anArray) {
	anArray.forEach(element => {
		// here place your solution:
		if (element === 1) {
			console.log('Element value is one!');
		} 
        if (element === 0) {
			console.log('Element value is zero!');
		}
	});
}

//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise

elementChecker([1, 2, false, 0, 8, 0, 1, 8, true, 'test', '0']);

// Expected output:
// Expected output of this script is following info on console:
// Element value is one!
// Element value is zero!
// Element value is zero!
// Element value is one!

// UWAGA! W przypadku funkcji warunkowej, które składa się z dwóch ifów, spevniających ten sam warunek - program zostaję wykonany dla każdego z nich. 
function elementChecker(anArray) {
    anArray.forEach(element => {
        if (element >= 18) {
            console.log("Element value is one!");
        } if (element >= 13) {
            console.log("Element value is zero!");
        }
    });
}

elementChecker([19])
// Natomiast jeżeli sklada się z ifa oraz else if, które spewniają jednakowe warunki - to wykonuje się tyłko sam if!!!
function elementChecker(anArray) {
    anArray.forEach(element => {
        if (element >= 18) {
            console.log("Element value is one!");
        } else if (element >= 13) {
            console.log("Element value is zero!");
        }
    });
}

elementChecker([19])