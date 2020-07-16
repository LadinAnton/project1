
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
sum = 0;
for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j].reduce(function(sum, item) {
    return sum + item;
    })
  }
}
console.log(sum);