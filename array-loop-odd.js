let numbers = [12, 15, 20, 33, 40, 55, 60];

let count = 0;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 !== 0) {
		count = count + 1;
	}
}

console.log(count);