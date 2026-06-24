function sumEvenNumbers() {
	let sum = 0;

	for (let i = 2; i <= 10; i += 2) {
		sum = sum + i;
	}

	return sum;
}

let result = sumEvenNumbers();
console.log(result);

