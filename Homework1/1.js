
var str = 'заглавная буква';
str = str[0].toUpperCase() + str.substr(1);
console.log(str); //первый вариант


var str = 'тоже заглавная буква';
str = str.split('');
str[0] = str[0].toUpperCase();
var result = str.join('');
console.log(result); //второй вариант