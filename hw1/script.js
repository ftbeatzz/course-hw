function searchMinNumber(a, b) {
  let min;
  if (a < b) {
      min = a;
  } else {
      min = b;
  }
  return min;
}

console.log(searchMinNumber(6, 10));

function parity() {
  let result;
  let qestion = prompt('Введите число');
  if (qestion % 2 === 0) {
    result = 'Число четное'
  } else {
    result = 'Число нечетное'
  }
  return result;
}

function helloAge() {
  let age = prompt("Сколько вам лет?");

  if (age < 12) {
    console.log('Привет, Друг!');
  } else if (age > 12) {
    console.log('Добро пожаловать!');
    }
}
helloAge();


function checkNumbers(a, b) {
  let firstNumber = prompt("Введите первое число:");
  let secondNumber = prompt("Введите второе число:");

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
      return 'Одно или оба значения не являются числом';
  } else {
      return firstNumber * secondNumber;
  }
}
console.log(checkNumbers());

function squareNumber() {
  let result = prompt("Введите число:");

  if (isNaN(result)) {
      return 'Переданный параметр не является числом';
  } else {
      let cube = result ** 3;
      return `${result} в кубе равняется ${cube}`;
  }
}
console.log(squareNumber());

// Это задание не понял от слова совсем, сделал через нейросеть, но смысл остался тем же, ничего не понятно, пытался больше часа - все безуспешно :) 

let circle1 = {
  radius: 5,

  getArea: function() {
      return Math.PI * this.radius ** 2;
  },

  getPerimeter: function() {
      return 2 * Math.PI * this.radius;
  }
};

let circle2 = {
  radius: 8, 

  getArea: function() {
      return Math.PI * this.radius ** 2;
  },

  getPerimeter: function() {
      return 2 * Math.PI * this.radius;
  }
};

console.log("Площадь круга circle1:", circle1.getArea());
console.log("Периметр окружности circle1:", circle1.getPerimeter());

console.log("Площадь круга circle2:", circle2.getArea());
console.log("Периметр окружности circle2:", circle2.getPerimeter());


function timeYear() {
  let month = prompt('Укажите номер месяца')
  if (month >= 1 && month <= 12) {
      if (month >= 3 && month <= 5) {
          return "Весна";
      } else if (month >= 6 && month <= 8) {
          return "Лето";
      } else if (month >= 9 && month <= 11) {
          return "Осень";
      } else {
          return "Зима";
      }
  } else {
      return "Неправильный номер месяца";
  }
}
