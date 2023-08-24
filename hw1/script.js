let password = String(prompt('Введите свой пароль'));
if (password === 'password123') {
    console.log('Пароль верный');
} else {
    console.log('Пароль неверный');
}

let c = -2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно')
}
let d = 2;
let e = 36;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно')
}

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

let monthNumber = prompt('Введите месяц');

if (monthNumber === '1') {
  console.log('Зима');
} else if (monthNumber === '2') {
  console.log('Зима');
} else if (monthNumber === '3') {
  console.log('Весна');
} else if (monthNumber === '4') {
  console.log('Весна');
} else if (monthNumber === '5') {
  console.log('Весна');
} else if (monthNumber === '6') {
  console.log('Лето');
} else if (monthNumber === '7') {
    console.log('Лето');
} else if (monthNumber === '8') {
    console.log('Лето');
  } else if (monthNumber === '9') {
    console.log('Осень');
  } else if (monthNumber === '10') {
    console.log('Осень');
  } else if (monthNumber === '11') {
    console.log('Осень');
  } else if (monthNumber === '12') {
    console.log('Зима');
} else {
  console.log('В году всего 12 месяцев');
}

let foreverNumber = Number(prompt('Введите любое число'));

if (foreverNumber % 2 === 0) {
  alert('Число четное');
} else {
  alert('Число не четное')
}

let clientOS = prompt("Введите 0, если вы используете iOS, или 1, если вы используете Android:");
let clientDeviceYear = prompt("Введите год создания вашего устройства:");

if (clientDeviceYear >= 2015) {
    if (clientOS === 0) {
        console.log("Установите приложение для iOS по ссылке");
    } else if (clientOS === 1) {
        console.log("Установите приложение для Android по ссылке");
    } else {
        console.log("Неизвестная операционная система");
    }
} else {
    if (clientOS === 0) {
        console.log("Установите облегченную версию приложения для iOS по ссылке");
    } else if (clientOS === 1) {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    } else {
        console.log("Неизвестная операционная система");
    }
}
