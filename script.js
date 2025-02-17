
// 1 //
const isBirthday = true ;
let age = 25
if (isBirthday){
  age = age + 1 
}

console.log(age)
console.log(`current age: ${age}`)
console.log("\n")

// 2 //
const ticketPrice = 100;
const passangerAge = 65;
let discountedPrice;

if(passangerAge>60){
  discountedPrice = ticketPrice * 1
  console.log(`ticket price for age greater than 60 : ${discountedPrice}`)
}else {
  console.log(`ticket price for age less than or equal to 60 : ${ticketPrice}`)
}

console.log("\n")

// 3 //
  const num1 = 19;
  const  num2 = 29;
  const  num3 = 39;

if (num3 > num1 && num3 > num2){
  console.log(`third number  ${num3} is the largest`)
}else {
   console.log(`third number  ${num3} is not the largest`)
  
}

// 4 //

const saareePrice = 500;
const kurtaPrice = 300;
const jeansPrice = 900;
const shoesPrice = 400;

totalCartPrice = saareePrice + kurtaPrice + jeansPrice + shoesPrice
deliveryChargeStatus = ''
if(totalCartPrice < 1999){
deliveryChargeStatus = " optional delivery charge : 99"
 totalCartPrice = totalCartPrice + 99
}else {
 deliveryChargeStatus = "no delivery Charge"
}

console.log("shopping cart: ")
console.log("----------------------")

console.log(` Saree: ₹${saareePrice}`);
console.log(`Kurta: ₹${kurtaPrice}`); 
console.log(`Jeans: ₹${jeansPrice}`); 
console.log(`Shoes: ₹${shoesPrice}`); 
console.log("----------------------")
console.log(deliveryChargeStatus); 
console.log("----------------------")
console.log(`Total Cart Price: ₹${totalCartPrice}`)


// 5 //

const number = 5

if(number > 0 ){
 console.log("number is positive")
} else if(number < 0){
 console.log("number is negetive")
}else{
 console.log("number is Zero")
}

// 6 //

const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const stud1 = "sanjay"
const stud2 =" yashas"
const stud3 =" chatan"

if(marks1 > marks2 && marks3){
 console.log(` ${stud1}, scored the highest marks`)
}else if(marks2 > marks3 && marks1){
  console.log(` ${stud2}, scored the highest marks`)
}else{
  console.log(` ${stud3}, scored the highest marks`)
}


