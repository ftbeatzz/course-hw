let a = 1;

while (a <= 2) {
  console.log('Привет!');
  a++;
}

for (let b = 1; b <= 5; b++) {
  console.log(b);
}

for (let c = 7; c <= 22; c++) {
  console.log(c);
}

let obj = {
  'Коля': '200',
  'Вася': '300',
  'Петя': '400'
};

for (let key in obj) {
  console.log(`${key} — зарплата ${obj[key]} долларов.`);
}

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log("Получившееся число:", n);
console.log("Количество итераций:", num);

const firstFriday = 5;

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
