//ES6+ -> modern js

// ---------let/const-----
function sayHello(){
    for (var index = 0; index < 5; index ++){
        console.log(index);
    }
    
}
sayHello();

//-----arrow funtions----

const square = function(num) {
    return num*num;

}

const square2 = ((num)=> num*num)

//-----array.map()----

const colors = ['red','green','purple']
colors.map(function(color){
    return(color);
})
colors.map(color =>console.log(color));

const itemList = colors.map(function(color) {
   return '<li>' + color + '</li>';
})

const itemLists = colors.map((color)=> `<li>${color}</li>`);


const nums = [1,5,3,9,10,0,12]

const sum = nums.reduce(((total,num)=> total + num),0)
console.log(sum);

const fil =nums.filter(function(num){
    return num >3 ;
})
console.log(fil)


//num lớn hơn 3
const fill = nums.filter( num => num > 3);
//num bé hơn bằng 5
const fills = nums.filter(num => num <= 5);


const students = [
    {name: "A", age: 11, subject: ['sb1', 'sb2','sb3']},
    {name: "B", age: 12, subject: ['sb3', 'sb1','sb5']}, 
    {name: "C", age: 14, subject: ['sb5', 'sb8','sb2']},
    {name: "D", age: 10, subject: ['sb2', 'sb4','sb1']},
    {name: "E", age: 8, subject: ['sb1', 'sb2','sb3']},
]
//loc tuoi <= 11
const ageList = students.filter(st => st.age <= 11)
console.log(ageList)

//loc co sb1 
const fillSB = students.map(function(student){
    return student.subject.filter
})

// in tuoi cac ban
const printAge = students.map(st => st.age);
console.log(printAge)


//tinh tong mon hoc
const sumSb = students.map(st =>st.subject)
console.log(sumSb)
const sumSB = students.reduce(((total,num)=> total + num),0)
console.log(sumSB);

