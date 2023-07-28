let a = 10;
alert(a)

let year = 2007
alert(year)

let nameCreator = 'Brendan Eich'
alert(nameCreator)

let num = 10;

alert(num + 2);
alert(num - 2);
alert(num * 2);
alert(num / 2);

let result = 32;
alert(result);

let b = 9;
let c = 2;

alert(b % c);

let age = prompt('Сколько Вам Лет?');
alert(age);

let user = {
    age: 28,
    name: "John",
    isAdmin: false
};
user['city of residence'] = true;
user.age = 14;
delete user['city of residence'];
let info = prompt(`Какую информацию хотите узнать о пользователе? ${user.name}`);
alert(user[info]);

let yourName = prompt('Введите пожалуйста Ваше имя');
alert(`Привет, ${yourName}`);
