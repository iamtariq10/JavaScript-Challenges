// Program 1
// 1. Write a js program to convert lowercase string to uppercase.


// let string1 = "my name is tariq";

// for(let i = 0; i<=string1.length;i++){
//    let toUC= string1.toUpperCase();
//    console.log(toUC);
// }


// Program 2
// 2. Write a js program to convert uppercase string to lowercase.


// let string2 = "MY FATHER NAME IS SALAMAT ALI";

// for(let i=0;i<=string2.length;i++){
// let toLC = string2.toLocaleLowerCase();
// console.log(toLC);
// }



        // // Program 3
        // // Write a js program to toggle case of each character of a string

        // let string3 = "i LiVe in  FaISALABAD";


        // for(let i=0;i<=string3.length;i++){
        //     if(string3[i].match(/[a-z]/)){
        //     let toUC =  string3.toUpperCase();
        //     console.log(toUC);
        //     }



// Program 4
// 4. Write a js program to find total number of alphabets, digits or special character in a string


// function toggleCase(){
//     let str = 'I Am Tariq and i am graphic designer';
//     let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let lower = 'abcdefghijklmnopqrstuvwxyz';
//     let final = [];
      
//       for(var x=0; x<str.length; x++)
//       {
//         if(upper.includes(str[x]))
//         {
//           final.push(str[x].toLowerCase());
//         }
//         else if(lower.includes(str[x]))
//         {
//           final.push(str[x].toUpperCase());
//         }
//         else 
//         {
//           final.push(str[x]);
//         }
//       }
//       console.log(final.join(''))
//     }

    
// Program 12
// 12. Write a js program to print all odd number between 1 to 100

// function oddNumber(){
// for(let i=0;i<100;i++){
//   if(i%2==1){
//     console.log(i);
//   }
// }
// }

// oddNumber();


// Program 13
// 13. Write a js program to find sum of all natural numbers between 1 to n.

// program to display the sum of natural numbers

// take input from the user

// function sumOfNaturalNum(){
// let number = parseInt(prompt('Enter a positive integer or Number: '));

// let sum = 0;

// for (let i = 1; i <= number; i++) {
//     sum =sum+i;
// }

// console.log('Sum of natural numbers:', sum);

// }

// sumOfNaturalNum();


// Program 14
// // 14. Write a js program to find sum of all even numbers between 1 to n


// function sumOfEvenNumber(){
// let number = parseInt(prompt("Enter the Number:"));

// let sum = 0;

// for(let i=1;i<=number;i++){
//   if(i%2==0){
//     sum = sum+i;
    
//   }
 
// }
// console.log("Sum of even numbers is: ",sum);

// }
// sumOfEvenNumber();


// Program 15
// 15. Write a js program to find sum of all odd numbers between 1 to n.


// function sumOfOddNumbers(){
// let number = parseInt(prompt("Enter the Number:"));

// let sum = 0;

// for(let i=1;i<=number;i++){
//   if(i%2==1){
//     sum = sum+i;
    
//   }
 
// }
// console.log("Sum of odd numbers is: ",sum);

// }
// sumOfOddNumbers();


// Program 16
// Write a js program to print multiplication table of any number

// function tablePrint(){
// let tableNumber = parseInt(prompt("Enter the Table Number:"));


// for(let i=1;i<=10;i++){
//  let table= i*tableNumber;
//  console.log(`${tableNumber} x ${i} =${table}`);

// }
// }

// tablePrint();

// Program 17
// 17. Write a js program to count number of digits in a number

// function digitsInNumber(){
// let number =prompt("Enter the Number:");

// let digits=parseInt( number.length);

// console.log (digits);

// }

// digitsInNumber();


// Programe 19
// 19. Write a js program to find maximum between two numbers.


// function maximumTwoNum(){
// let number1 = prompt("Enter your first number");
// let number2 =prompt("Enter your second Number");

// if(number1>number2){
//     alert(`${number1} is greater than ${number2}`);
// }

// else{
//     alert(`${number2} is greater than ${number1}`);
// }

// }
// maximumTwoNum();

// Programe 20
// 20. Write a js program to find maximum between three numbers.


// function maximumThreeNum(){
// let number1 = prompt("Enter your first number");
// let number2 =prompt("Enter your second Number");
// let number3 =prompt("Enter your third Number");

// if(number1>number2 && number1>number3){
//         alert(`${number1} is greater than ${number2} & ${number3} `);
// }

// else if(number2>number3 && number2>number1){
//         alert(`${number2} is greater than ${number3} & ${number1}`);
// }
// else{
//         alert(`${number3} is greater than ${number2} $ ${number1}`);
// 

// }
// }

// maximumThreeNum();


//Programe 21
// 21. Write a js program to check whether a number is negative,        positive or zero.
// function numberCheck(){
// let number = prompt("Enter number:");
// if(number>0){
//     alert(`${number} is positive`);
// }
// else if(number<0){

// alert(`${number} is negative`);
// }

// else{
//     alert(`${number} is zero`);
// }
// }
// numberCheck();


//Programe 22
// 22. Write a js program to check whether a number is divisible by 5 and 11 or not.


// function isDivisbleFive(){
// let number = prompt("Enter the number:");

// if(number%5==0 && number%11==0){
//     alert(`${number} is divisible by 5 and 11 `)
// }

// else{
//     alert(`${number} is not divisible by 5 and 11 `)
// }

// }

// Programe 23
// 23. Write a js program to check whether a number is even or odd.


// function evenOdd(){
// let number=prompt("Enter number");

// if(number%2==0){
//     alert(`${number} is even`)
// }
// else{
//     alert(`${number} is odd`)
// }
// }
// evenOdd();


// Programe 24
// 24. Write a js program to check whether a year is leap year or not.
// function leapYear(){
// let year=prompt("Enter the year");

// if(year%4==0  && year%100==!0 || year%400==0){
//     alert(`${year} is a leap year`);
// }
// else{
//     alert(`${year} is not a leap year`);
// }

// *** LEAP YEAR IS MULTIPLE OF 4 and not a multiple of 100
// *** LEAP YEARI IS MULTIPLE OF 400

// }
// leapYear();



// Programe 25
// 25. Write a js program to check whether a character is alphabet or not.
// function checkAlphabet(){
// let char = prompt("Enter the alphabet:");
//     if(char.match(/[a-zA-Z]/)){
//         alert(`${char} is a alphabet`)
//     }
//     else{
//         alert(`${char} is not a alphabet`)
//     }

// }
// checkAlphabet();





