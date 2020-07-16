let arr = [1,2,3,4,5,6,7,8,9];

elem(arr);

function elem(arr){
    console.log("Элемент массива - "+arr.shift());

    if (arr.length != 0){
    elem(arr);
    }
}