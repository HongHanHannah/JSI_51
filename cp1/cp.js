//bai 1
const mm = [1,2,3,4,5,6,"hh","9",80,100]

let a = mm.filter(Number).map(Number).map(x => Math.pow(x,2))
console.log(a)

const mSquared = a.map(num => num*num)
console.log(mSquared)

//cau 2


//cau 3
const arr1 = [1,2,4,5,6]
const arr2 = [1,6,8,9,0]
let newarray = arr1.filter((x)=> arr2.includes(x))
console.log(newarray)


//cau 4
const arr = [1,54,6,7]
const newArr = arr.map( num =>  num + 5)
console.log(newArr)

//cau 5
const m = [1,2,4,5,6,7];
const n = [3,5,675,8,96];
const duplicatedList = [1,8,10,96,7];

let arr3 = [...m,...n];
let arr5 = arr3.filter(item => !duplicatedList.includes(item));
console.log(arr5);




