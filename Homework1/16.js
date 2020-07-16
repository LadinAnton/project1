  
let num = 56;
function Plus(num) {
    if (num == 0) return 0;
    return (num - 1) % 9 + 1;
}
console.log(Plus(num));