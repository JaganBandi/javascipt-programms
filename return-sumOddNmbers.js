function sumOddNumbers() {
	let sum = 0;

	for (let i = 1; i <= 10; i++) {

		if (i % 2 !== 0) {
			sum = sum + i;

		}
	}
	return sum;
}

let result = sumOddNumbers();
console.log(result);