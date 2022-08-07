let letters = document.querySelectorAll('.letters span');
let wordRows = document.querySelectorAll('.words .row');
let images = document.querySelectorAll('.images img');

let wordsArr = ['aaaaaa', 'bbbbbbb', 'nnnnn'];

let currentRow = 0;

for (let i = 0; i < images.length; i++) {
	images[i].onclick = function() {
		currentRow = this.dataset.num;

	}
}

for (let i = 0; i < letters.length; i++) {
	letters[i].onclick = function() {
		addLetter(this);
	}
}

function addLetter(targetElem) {
	for (let i = 0; i < wordRows[currentRow].children.length; i++) {
		if (wordRows[currentRow].children[i].innerText == '') {
			wordRows[currentRow].children[i].innerText = targetElem.innerText;
			if (i == wordRows[currentRow].children.length - 1) {
				if( wordsArr.includes(wordRows[currentRow].innerText
					.split('\n')
					.join("")
					.toLowerCase()) ) {
					
					let currentRowSubElems = wordRows[currentRow].querySelectorAll('div');
					for (let i = 0; i < currentRowSubElems.length; i++) {
						currentRowSubElems[i].style.background = 'green';
						currentRowSubElems[i].style.color = 'white';
					}
				}
			}
			break;
		}
	}
}