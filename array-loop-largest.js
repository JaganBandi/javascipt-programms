let marks = [65, 76, 82, 43, 54, 96];

let largest = marks[0];

for (let i = 0; i < marks.length; i++) {
	if(marks[i] > largest) {
		largest = marks[i];
	}
}

console.log(largest);