let letters = document.querySelectorAll('.letters button');
let wordRows = document.querySelectorAll('.words .row');
let images = document.querySelectorAll('.images img');

let wordsArr = ['aaaaaa', 'bbbbbbb', 'nnnnn'];

let currentRow = 0; // какая строка заполняется буквами, меняется при нажатии на изображения

for (let i = 0; i < images.length; i++) {
	images[i].onclick = function() {
		currentRow = this.dataset.num; // добавляем к изображениям обрабочик клика, при котором меняется номер строки в которую вводим слово

	}
}

for (let i = 0; i < letters.length; i++) {
	letters[i].onclick = function() {
		addLetter(this); // при нажатии на буквы добавляем букву в поле с помощью функции addLetter(). В функцию передаем обьект на который нажали
	}
}

function changeRow(color, backColor, reset = false) {
	let currentRowSubElems = wordRows[currentRow].querySelectorAll('div'); // находим все клетки текущей строки
	for (let i = 0; i < currentRowSubElems.length; i++) { // перебираем все клетки и каждую окрашиваем в зеленый цвет
		currentRowSubElems[i].style.background = backColor;
		currentRowSubElems[i].style.color = color;
		if (reset) {
			currentRowSubElems[i].innerText = '';
		}
	}
}

function addLetter(targetElem) {
	for (let i = 0; i < wordRows[currentRow].children.length; i++) { // перебираем все строки где вводятся слова

		if (wordRows[currentRow].children[i].innerText == '') { // перебираем все клетки строки на пустое значение
			wordRows[currentRow].children[i].innerText = targetElem.innerText;  // если значение пустое то добавляем букву в текущую клетку

			if (i == wordRows[currentRow].children.length - 1) { // если цикл с перебором клеток дошел до номера последней клетки

				if( wordsArr.includes(wordRows[currentRow].innerText
					.split('\n')
					.join("")
					.toLowerCase()) ) { // проверяем содержится ли наше собранное слово в списке верных ответов

					changeRow('white', '#33CC33'); // если слово подходит то меняем цвет клеток на зеленый
					currentRow++; // меняем номер строки на следующий
				} else {
					changeRow('white', '#FF3333'); // если слово не подходит то меняем цвет клеток на красный

					setTimeout(function() {
						alert('ответ неверный'); // и выводим окно 
					}, 200);

					setTimeout(function() {
						changeRow('black', '', true); // ждем секунду чтобы наш код не сработал раньше открытия окна
					}, 1000);
				}

			}

			break;
		}
	}
}