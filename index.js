
// Answer1
let promots2=prompt("Enter a  number")
function checkNumber(num) {
    if (num > promots2) return "positive";
    else if (num < prompt) return "negative";
    else return "zero";
  }
  let num11=checkNumber(1)
  console.log(num11)

// Answer2
let promots=prompt("enter a  number")
function num51(num6){
    if (num6 <= promots ) return "within range"
    else return "outside range"
       }
let numbers1=num51(2)
console.log(numbers1)


//   Answer3
function number(num14,num19){
    if (number <= 22 && num2 >= 21) {
    console.log("they are equal")
}
else {
    console.log("the numbers are different")
}
 }
 let num20=number(10+15)


// Answer4
let promot2=prompt("Enter a number")
function age (ages) {
if(ages==promot2)return "Eligible to vote"


else return "Not eligible to vote"

}
let age2=age(18)
console.log(age2)
// Answer 5
let num3 = prompt("Enter a  number")
function greater (num4){
    if(num4<10){
        return "The number is greater"
    }
    if(num4>10){
        return "Both number are equal"
    }
}
let greaters=greater(11)
console.log(greaters)
// Answer 6
let num5 = prompt("Enter a number")
function multiply (num11 ){
if(num11*num5==20){
    return "Is a multiply of 5"
}
else{
    return "is a not multiply of"
}
}
let multi=multiply(5) 
console.log(multi)
// Answer7
let year1 = prompt("Enter a  number")
function years (year){
if(year==year1){
    return "leap year"
}
else{
    return "not a leap year"

}
}
let year3=years(5)
console.log(year3)
// Answer 8
let larger=prompt("Enter a number")

function larger1(num7){
    if(num7>larger){
        return "is the largest"
    }
    if(num7<larger){
        return "is not  the largest"

    }
}
let largest=larger1(10)
console.log(largest)

// Answer9
let romots =prompt("Enter a number") 
function citizen(num12){
    if(num12==romots){
        return "eligible to senior citizen"
    }
    if(num12!=romots){
        return "not eligible to senior citizen"
    }
}
let num12=citizen(5)
console.log( num12)
// Answer 10
function prinnumber(){
    let num=prompt("Enter a number")
    let i =1
    while(i <=num){
      console.log(i);i++
    }
  }
  let num8=prinnumber()
// // Answer 11
function evenumber(){
    let prompts=prompt("Enter a  number")
    let i=2
    while(i <=prompts){
      i=i+2
      console.log(i)
  
    }
  }
  let num1=evenumber()

// // Answer12
let sum11=prompt("Enter a  number")
let sum2=1
let sum=0
function add(){
  while(sum2<=sum11){
    sum=sum+sum2;sum2++
    console.log(sum)
  }

}
let addeds=add()
// // Answer13

function add(){
    let sum13=prompt("Enter a  number")
let sum21=1
let sums=1
  while(sum21<=sum13){
    sums=sums*sum21;sum21++
    console.log(sums)
  }

}
// let added=add()
// Answer14
function reverse(){
    let c=1
  
    let num10=prompt("Enter a number")
    while(c<=num10){
      console.log(num10,"revesre order");num10--
    }
  }
  let reverse1=reverse()
//  Answer14
function vaild(){
    let fc=prompt("Enter number less than 54 ")
    while(fc<54) return "vaild"
    if(fc>54) return "invaild"
    
     
  }
  let invaild=vaild()
  console.log(invaild)

  
// // Answer15
function multiply(){
    let nums = prompt("Enter a number")
  let e = 1
  while (e <= 10) {
      console.log( nums * e,); e++
  }
  }
  let multiplication=multiply()
//  Answr16

function sumdigit(){
    let z = parseInt(prompt("Enter a three digit"))
   let sum6 = 0
   while (z > 0) {
       sum6 += z % 10
       z = parseInt(z / 10)
   console.log("sum of digit number" + sum6)
   
   }
   }
   let sumdigits=sumdigit()
//  Answer17

function oddnumber(){
    let odd1=prompt("Enter a number");
    let odd2=1
    while(odd2 <odd1){
    console.log(odd2) ;odd2+=2
    }

}
let odd4=oddnumber()
// Answer18
function count(){
    let number=prompt("Enter a two digit")

let digits=0
while(digits<=number){
    number=number/10;
    digits++
}
console.log("The number of digit"+digits)
}
let counter=count()
// Answer19
function forlop1(){
    let printrer1=prompt("Enter a number")
    for(let y=1;y < printrer1;y++){
        console.log(y)
    }
}
let forloop2=forlop1()
// Answer20
function evennumbers(){
    let evens=prompt("Enter a number")
    for(let i=2;i <evens;i=i+2){
        console.log(i,"even number")
    }
}
let evennumbes1=evennumbers()
// Answer20
function name1(){
    let natural=prompt("Enter a  number")
    let sum15=0
    for(let k=1;k <= natural;k++){
        sum15=sum15+k
        console.log(sum15)
    }
}
let names=name1()
// Answer21
function tabel(){
    let tabels=prompt("Enter a number")
    for(let n=1;n<=10; n++){
        console.log(n*tabels)
    }
}
let tabel1=tabel()
// Answer22
function reverse(){
    let reevrese=prompt("Enter a number")
    for(let a=100;a >reevrese;a=a-1){
        console.log(a,"reverse order")
    }
}
let p=reverse()
// Answer23
function factorial(){
    let g = prompt("Enter a  number to factorial")
    let sumss = 1
    for (let b = 1; b <= g; b++) {
        sumss = sumss * b
        console.log("for loop factorial", sumss)
    }
}
let factorial2=factorial()
// Answer24
function rowses(){
    var rows=parseInt(prompt("Enter a row"))
for(var s=1;s<=rows;s++){
    var pattern=""
 for(var j=1;j<=s;j++){
    pattern+="*"
 }
  console.log(pattern);

}
}
let rows1=rowses()
// Answer25
function addedss(){
    let asad = parseInt(prompt("Enter a three digit"))
    for (let sum9=0;asad >sum9;) {
        sum9 += asad % 10
        asad = (asad / 10)
    console.log("sum of digit number" + sum9)
    
    }
}
let numbers2=addedss()
// Answer26
function primenumber(){
    let promot=prompt("enter  anumber")
    for(let z=1;z<=8;z=z+2){
    console.log("prime number 1 to 8",z)
    
    }
}
let printers=primenumber()

// Answer27
function conutinges(){
    var numsss=prompt("Enter a number")
    var digit=prompt("Enter a digit")
    var counting=1
    
    for(var ics=0;ics<=numsss;ics++){
        if(numsss==digit){
            counting++
        }
    }
    console.log("The digit"+digit+"appear"+counting+"time in"+numsss)
}
let countingess=conutinges()