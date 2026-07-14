let numbers = [30, 60, 10, 70, 90, 100];

let largest = numbers[0];
let secondlargest = numbers[0];

for (let i = 0; i < numbers.length; i++) {

	if (numbers[i] > largest) {
		secondlargest = largest;
		largest = numbers[i];
	}

	else if (numbers[i] > secondlargest) {
		secondlargest = numbers[i];

	}
}

console.log("Largest:", largest);
console.log("Second Largest:", secondlargest);