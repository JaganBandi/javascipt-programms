function countOddNumber() {
	let count = 0;

	for (let i = 1; i <= 10; i++) {
		if (i % 2 !== 0){
			count++;
		}
	}
	return count;
}

let result = countOddNumber();
console.log(result);