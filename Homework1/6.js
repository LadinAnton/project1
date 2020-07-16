let arr = [];
let line="";

for(let i = 1; i < 5; i++) {
    for(let j = 1; j <= i; j++) {
      line += i;
    }
    arr.push(line);
    line = ""; 
}
console.log(arr);