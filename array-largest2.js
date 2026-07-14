let numbers = [40, 50, 55, 60, 66, 70];

let largest = numbers[0];
let secondLargest = numbers[0];

for (let i = 0; i < numbers.length; i++) {

	if (numbers[i] > largest) {
		secondLargest = largest;
		largest = numbers[i];
	}

	else if (numbers[i] > largest) {
		secondLargest = largest;
	}
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
