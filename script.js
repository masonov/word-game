let letters = document.querySelectorAll('.letters button');
let field = document.querySelector('.words .front');
let img = document.querySelector('.images div img');
let message = document.querySelector('.message p');
let result = document.querySelector('.result p');

let current = 0;
let resultCount = 0;
let data = [
	['ақәыџьма', 'ALMA-07.png'],
	['ацгәы', 'адиле-08.png'],
	['аҽада', 'амина-07.png'],
	['амшә', 'ялса-08.png'],
	['аԥынҵатәыҩа', 'Артём-08.png'],
	['апарпар', 'Артём-09.png'],
	['ажьа', 'Щазина-07.png'],
	['ажә', 'Щазина-08.png'],
	['ала', 'эля-07.png'],
	['аҳәа', 'эля-08.png'],
	['ауаса', 'ялса-07.png'],
	['арбаӷь', 'ялса-09.png'],
];

function dels() {
	for (let i = 0; i < field.children.length; i++) {
		field.children[i].onclick = function() {
			this.innerText = '';
			console.dir('true')
		}
	}
}

function generate() {
	if (field.children.length != 0) {
		field.innerHTML = '';
		current++;
		img.setAttribute('src', 'img/animals/' + data[current][1]);
	}

	for(let i = 0; i < data[current][0].length; i++) {
		let div = document.createElement('div');
		field.append(div);
	}

	sumResult();
	dels();
}

function sumResult() {
	result.innerText = "Ииашаны рҭак ҟацоуп: " + resultCount + ' / ' + data.length
}

generate();

for (let i = 0; i < letters.length; i++) {
	letters[i].onclick = function() {
		add(this);
	}
}

function add(letter) {
	for (let i = 0; i < data[current][0].length; i++) {
		if (field.children[i].innerText == '') {
			field.children[i].innerText = letter.innerText;
			if (i == field.children.length - 1) {
				done();
			}
			break;
		}
	}
}

function done() {
	let divs = field.querySelectorAll('div');
	if (field.innerText.split('\n').join("").toLowerCase() == data[current][0]) {
		change('#33CC33', 'white');
		setTimeout(function() {
			resultCount++;
			if (current == data.length - 1) {
				finish();
			} else {
				generate();
			}
		}, 1000)
	} else {
		change('#FF3333', 'white');
		setTimeout(function() {
			// reset();
			if (current == data.length - 1) {
				finish();
			} else {
				generate();
			}
		}, 1000)
	}

	function change(back, color) {
		for (let i = 0; i < divs.length; i++) {
			divs[i].style.background = back;
			divs[i].style.color = color;
		}
	}

	function reset() {
		for (let i = 0; i < divs.length; i++) {
			divs[i].innerText = '';
			divs[i].style.background = '';
			divs[i].style.color = 'black';
		}
	}
}

function finish() {
	img.parentElement.parentElement.remove();
	field.remove();
	result.classList.add('finish');
	sumResult();
}