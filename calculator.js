

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		const buttonSelect = button.value;
		console.log(buttonSelect);
		OnClick="document.getElementById('diplayResult').value += buttonSelect";
});
});


function add(a,b) {
	var ans = a + b;
	return ans;
}

function substract(a,b) {
	var ans = a - b;
	return ans;
}

function multiply(a,b) {
	var ans = a * b;
	return ans;
}

function divide(a,b) {
	var ans = a / b;
	return ans;
}


