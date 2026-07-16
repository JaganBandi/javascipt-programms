let numbers = [50, 20, 50, 10];

let largest = numbers[0];
let secondlargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > largest) {
		secondlargest = largest;
		largest = numbers[i];
	}
	else if (numbers[i] > secondlargest && numbers[i] !== largest) {
		secondlargest = numbers[i];

	}
}

console.log("Largest:", largest);
console.log("Second Largest:", secondlargest);