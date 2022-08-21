let letters = document.querySelectorAll('.letters button');
let wordF = document.querySelector('.words .front');
let imgDiv = document.querySelector('.images div');
let message = document.querySelector('.message p');

// imgDiv.style.height = '416px';

let data = [
	['ацгәы', '1.png'],
	['аҽада', '2.png'],
	['апарпар', '3.png'],
	['ауаса', '4.png'],
	['акәты', '5.png'],
];

let current = 0;

function generate() {
	if (wordF.children.length != 0) {
		imgDiv.children[0].style.display = 'none';
		imgDiv.innerHTML = '';
		wordF.innerHTML = '';
		current++;
	}

	let img = document.createElement('img');
	img.setAttribute('src', 'img/' + data[current][1]);
	imgDiv.append(img);

	for(let i = 0; i < data[current][0].length; i++) {
		let div = document.createElement('div');
		wordF.append(div);
	}
}

generate();

for (let i = 0; i < letters.length; i++) {
	letters[i].onclick = function() {
		add(this);
	}
}

function add(letter) {
	for (let i = 0; i < data[current][0].length; i++) {
		if (wordF.children[i].innerText == '') {
			wordF.children[i].innerText = letter.innerText;
			if (i == wordF.children.length - 1) {
				done();
			}
			break;
		}
	}
}

function done() {
	let divs = wordF.querySelectorAll('div');
	if (wordF.innerText.split('\n').join("").toLowerCase() == data[current][0]) {
		change('green', 'white');
		setTimeout(function() {
			generate();
		}, 2000)
	} else {
		change('red', 'white');
		setTimeout(function() {
			reset();
		}, 2000)
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