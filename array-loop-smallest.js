let marks = [65, 76, 82, 43, 54, 96];

let smallest = marks[0];

for (let i = 0; i < marks.length; i++) {
	if(marks[i] < smallest) {
		smallest = marks[i];
	}
}

console.log(smallest);