//bài 1 ----array.filter()---
const arr1 = [1,2,4,5,6]
const arr2 = [1,6,8,9,0]
//lay gia tri so dau so voi so cuoi
const getDuplicateitems = [...arr1 ,...arr2].filter
((value, index, arr)=>{
console.table({
     arr : arr.indexOf(value),
    index: index,
    value: value
});
    return arr.indexOf(value) != index;
});

console.log("cau1",getDuplicateItems);


//bài 2 ----array.map()----//
const arr = [1,54,6,7]
const newArr = arr.map(value => value += 5);
console.log("cau 2",newArr)


//bài 3 array.slice()-----
m = [1,2,4,5,6,7];
n = [3,5,675,8,96];
const removeList = [1,8,10,96,7];
 function removeItems(arr, arrRemove) 




//bài 4
players = [
{ id: 11, name: 'Messi', age: 33 },      
{ id: 12, name: 'Ronaldo', age: 34 },  
{ id: 13, name: 'Young', age: 35 },   
{ id: 14, name: 'Mane', age: 21 },  
{ id: 15, name: 'Salah', age: 24 },]
    
