// // ---------------Task-1------------------------

// function compareNumbers(numberOne, numberTwo) {
// 	if (numberOne < numberTwo) {
// 		return '-1';
// 	}
// 	else if (numberOne > numberTwo) {
// 		return '1';
// 	}
// 	else {
// 		return '0';
// 	}
// }

// let numOne = prompt('Введите первое число :');
// let numTwo = prompt('Введите второе число :');
// alert(compareNumbers(numOne, numTwo));



// // ---------------Task-2------------------------

// function calcFactorial(number) {
// 	userNumber = number;
// 	if (number > 0) {
// 		for (let i = 1; (number - i) != 0; i++) {
// 			userNumber *= (number - i);
// 		}
// 		return alert(`Факториал числа ${number}!` + ' = ' + userNumber);
// 	}
// 	else {
// 		return alert('Нужно вводить число больше 0');
// 	}
// }

// calcFactorial(number = +prompt('Введите число'));



// // ---------------Task-3------------------------

// let numSum = function (numOne, numTwo, numThree) {
// 	alert(Number(numOne + numTwo + numThree));
// };
// numSum(numOne = prompt(),
// 	numTwo = prompt(),
// 	numThree = prompt());



// // ---------------Task-4------------------------

// function calcFunc(a, b) {
// 	if (a > 0 && b > 0) {
// 		result = a * b;
// 		return alert('Площадь прямоугольника' + ' = ' + result);
// 	}
// 	else if (a > 0 && b == 0) {
// 		result = a ** 2;
// 		return alert('Площадь квадрата' + ' = ' + result);
// 	}
// 	else if (b > 0 && a == 0) {
// 		result = b ** 2;
// 		return alert('Площадь квадрата' + ' = ' + result);
// 	}
// }

// calcFunc(numOne = +prompt('Введите длину'), numTwo = +prompt('Введите ширину'));



// // ---------------Task-5------------------------

// function checkNumber(number) {
// 	let n = 0;
// 	for (let i = 1; i !== number; i++) {
// 		if (number % i == 0) {
// 			n += i;
// 		} else { continue }
// 	}
// 	if (number == n) {
// 		return alert('Это число совершенное!');
// 	}
// 	else {
// 		return alert('Это число не совершенное!');
// 	}
// }
// checkNumber(number = +prompt('Введите число :'))



// // ---------------Task-6------------------------

// function checkNumber(number) {
// 	let n = 0;
// 	for (let i = 1; i !== number; i++) {
// 		if (number % i == 0) {
// 			n += i;
// 		} else { continue }
// 	}
// 	if (number == n) {
// 		return alert('Это число совершенное :' + ' ' + number);
// 	}
// }

// function diapason(number, numberEnd) {
// 	for (number; number <= numberEnd; number++) {
// 		checkNumber(number);
// 	}
// }

// diapason(number = +prompt('Введите начало диапазона :'), numberEnd = +prompt('Введите конец диапазона :'));



// // ---------------Task-7------------------------

// function time(hours, minutes, seconds) {

// 	if (hours == null || hours == '') {
// 		hours = '00';
// 	}
// 	if (hours <= 9) {
// 		hours = '0' + hours;
// 	}
// 	if (minutes == null || minutes == '') {
// 		minutes = '00';
// 	}
// 	if (minutes <= 9) {
// 		minutes = '0' + minutes;
// 	}
// 	if (seconds == null || seconds == '') {
// 		seconds = '00';
// 	}
// 	if (seconds <= 9) {
// 		seconds = '0' + seconds;
// 	}

// 	alert('<< ' + hours + ':' + minutes + ':' + seconds + ' >>')
// }

// time(hours = prompt('Введите часы'), minutes = prompt('Введите минуты'), seconds = prompt('Введите секунды'));



// // ---------------Task-8------------------------

// function convertTime(hours, minutes, seconds) {
// 	result = (hours * 3600) + (minutes * 60) + seconds;
// 	alert('Вот Ваше время в секундах :' + ' ' + result);
// }

// convertTime(hours = +prompt('Введите часы'), minutes = +prompt('Введите минуты'), seconds = +prompt('Введите секунды'));

// // ---------------Task-9------------------------

// function convertTime(seconds) {
// 	hours = Math.trunc(seconds / 3600);
// 	minutes = Math.trunc((seconds - (hours * 3600)) / 60);
// 	seconds = seconds - ((hours * 3600) + (minutes * 60));
// 	if (hours <= 9) {
// 		hours = '0' + hours;
// 	}
// 	if (minutes <= 9) {
// 		minutes = '0' + minutes;
// 	}
// 	if (seconds <= 9) {
// 		seconds = '0' + seconds;
// 	}

// 	alert('Ваше время :' + ' ' + hours + ':' + minutes + ':' + seconds)
// }

// convertTime(seconds = prompt('Введите секунды'))



// // ---------------Task-10-----------------------

// function convertDate(day, month, year) {

// 	let dM = 0;
// 	let dY = 0;

// 	for (let y = 1; year > y; y++) {
// 		if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
// 			dY += 366;
// 		}

// 		else {
// 			dY += 365;
// 		}
// 	}

// 	for (let m = 1; month > m; m++) {

// 		if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
// 			dM += 31;
// 		}

// 		else if (m == 2) {
// 			if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
// 				dM += 29;
// 			} else {
// 				dM += 28;
// 			}
// 		} else {
// 			dM += 30;
// 		}
// 	}

// 	return convertDay = day + dM + dY;
// }

// function mainFunc(day1, month1, year1, day2, month2, year2) {
// 	result = Math.abs(convertDate(day1, month1, year1) - convertDate(day2, month2, year2));
// 	alert(result)
// }
// mainFunc(day1 = +prompt('Введите день начальной даты'),
// 	month1 = +prompt('Введите месяц начальной даты'),
// 	year1 = +prompt('Введите год начальной даты'),
// 	day2 = +prompt('Введите день конечной даты'),
// 	month2 = +prompt('Введите месяц конечной даты'),
// 	year2 = +prompt('Введите год конечной даты'));