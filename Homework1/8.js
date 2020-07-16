let arr = [1, 2, 3, 4, 3, 45, 2];
let a = 0;
for(let i = 0; i < arr.length; i++) {
  a += arr[i];
  if(a > 10) {
    console.log(i + 1);
    break;
  }
}