
let line = 'let_text_hello';
let b = line.split('_');
let newarr = [];
for (let i = 0; i < b.length; i++) {
    newarr.push(upCase(b[i]));
}
console.log(newarr.join(''));

function upCase(str) {
let a = str[0].toUpperCase() + str.substr(1);
return(a);
}