// bài 1 duplicate array
arr1 = [1,2,3,5]
// Spread Operator
const arr = [...arr1,...arr1] ;

//bài 2
arrA = [Hello, Xinchao];
arrB = [Bonjour, Olá]
// Spread Operator.
const waysToSayHello =[...arrA,...arrB];

//bài 3
const arrX = [0,1,2,3,4,5,6,7,8]
//arrX bình phương
const arrSquare = arrX.map((num) => {
    return num*num;
})
console.log(arrSquare);

//số lẻ nằm trong arrX.
const arrOdds = arrX.filter((num) => {
    return (num %2 == 1);
})

console.log(arrOdds);

//bài 4
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
console.log(filterRange([1,2,3,4], 2, 4));

 // bài 5
 