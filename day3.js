

console.log(!(7 == 7))
console.log(!(8 === 8))

let numT = 17

if(numT > 0 && numT <= 5 ){
    console.log('10 % discount')
}
if(numT > 5 && numT <= 10){
    console.log('20 % discount')
}
if(numT > 10){
    console.log('30 % discount')
}

let numt2 = -17

if(numt2 > 0 && numt2 <= 5 ){
    console.log('10 % discount')
}
else if(numt2 > 5 && numt2 <= 10){
    console.log('20 % discount')
}
else if(numt2 > 10){
    console.log('30 % discount')
}
else {
    console.log("incorrect input")
}



let marks = 92


if(marks > 90){
    console.log("Grade A")
}
else if(marks >= 75){
    console.log("Grade B")
}
else if(marks >= 65){
    console.log("Grade C")
}
else {
    console.log("please try again")
}



let a = 10 
let b = 50

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}


let x1 = 10
let x2 = 50 
let x3 = 300

if(x1 > x2 && x1 > x3){
    console.log("x1 is greater")
}
else if(x2 > x1 && x2 > x3){
    console.log("x2 is greater")
}
else {
    console.log("x3 is greater")
}