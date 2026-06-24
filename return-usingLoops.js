function checkResult(marks) {

	if (marks >= 35) {
		return "Pass";
	}
	else {
		return "Fail";
	}
}

let result = checkResult(80);
console.log(result);