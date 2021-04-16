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

// Program 3

// 3. Write a js program to toggle case of each character of a string.

// function toggle(){
//         let str = 'I Am Tariq';
//         let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         let lower = 'abcdefghijklmnopqrstuvwxyz';
//         let final = [];

//           for(let x=0; x<str.length; x++)
//           {
//             if(upper.includes(str[x]))
//             {
//               final.push(str[x].toLowerCase());
//             }
//             else if(lower.includes(str[x]))
//             {
//               final.push(str[x].toUpperCase());
//             }
//             else
//             {
//               final.push(str[x]);
//             }
//           }
//         console.log(final.join(''));

//     }

//     toggle();

// Program 5
// 5. Write a js program to count total number of vowels and consonants in a string.

// function countVowels(){

// function countVowel(str) {

//         const vowels = str.match(/[aeiou]/gi).length;

//         return vowels;

//     }

//     const string = prompt('Enter a string: ');

//     const totalVowels = countVowel(string);

//     console.log("Total Vowels are:",totalVowels);
// }
// countVowels();

// Program 6
// 6. Write a js program to count total number of words in a string.

// function totalWords(){

// function countWords(str) {
//         str = str.replace(/(^\s*)|(\s*$)/gi,"");
//         str = str.replace(/[ ]{2,}/gi," ");
//         str = str.replace(/\n /,"\n");
//         return str.split(' ').length;
//         }
// let string=prompt("Write a string");
// let result=countWords(string);
// console.log(result);
// }
// totalWords();

// Program 7

// 7. Write a JavaScript program to list the properties of a JavaScript object

// function listProp(){
// let student = {
//         name : "David Rayy",
//         sclass : "VI",
//         rollno : 12 };

// let objProp= Object.keys(student);
// console.log(objProp);
// }
// listProp();

// Program 8
// 8. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object:

// function delProp(){
// let student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(student);

// delete student.rollno;

// console.log(student);

// }

// delProp();

// Program 9
// Write a JavaScript program to get the length of a JavaScript object.
// 9. Sample object :

// function objLength(){
// let student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12,
// institue:"Saylani"
// };

// let obj=Object.entries(student).length;
// console.log(obj);

// }

// objLength();

// Program 10

// 10. Write a JavaScript program to display the reading status (i.e. display book name,
//         author name and reading status) of the following books.

// function readStatus(){
// let library = [
//         {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//         },
//         {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//         },
//         {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',readingStatus: false
//         }];

// console.log(JSON.stringify(library[0]));
// console.log(JSON.stringify(library[1]));
// console.log(JSON.stringify(library[2]));
// }

// readStatus();

// Program 11
// 11. Write a JavaScript program to get the volume of a Cylinder with four decimal places
// using object classes.
// Volume of a cylinder : V = πr2h

// function CylinderVol(){
// class Cylinder {
//         constructor(height, radius) {
//           this.height = height;
//           this.radius = radius;
//         }
//         //
//        get calcVol() {
//           return this.height * this.radius*2*3.14;
//         }
//       }

//       const square = new Cylinder(10, 10);

//       console.log("The volume of Cylinder",square.calcVol);

// }
// CylinderVol();

// Program 26
// 26. Write a js program to input any alphabet and check whether it is vowel or consonant.

// function vowelOrNot(){
// let string=prompt("Enter your input");

// if(string.match(/[aeiou]/gi)){
//         console.log("This is vowel");
// }
// else{
//         console.log("Not a vowel");
// }
// }
// vowelOrNot();

// Program 27
// 27. Write a js program to input any character and check whether it is alphabet, digit or special

// function checkValue() {
//   let string = prompt("Enter your input");

//   if (string.match(/[a-zA-Z]/)) {
//     console.log("This is alphabet");
//   }
//   else if(string.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
//   console.log("This is a special character")
//   }
//   else{
//     console.log("This is a number");
//   }
// }
// checkValue();


// Program 28
// 28. Write a js program to find cube of any number using function.

// function findCube(){
// function cube(number){
//   return number*number*number;
// }
// let number=parseInt(prompt("Enter your number"));
// let result = cube(number);

// console.log(result);
// }
// findCube();

// Program 29
// 29. Write a js program to find diameter, circumference and area of circle using functions.

// function circleCal(){

// function diameter(radius){
//   return 2*radius;

// }

// function circumference(radius){
//  return 2*3.14*radius;
// }

// function area(radius){
//   return 3.14*radius*radius;
// }


// let radiusVal=parseInt(prompt("Enter the radius of cirlce:"));

// let diameterVal = diameter(radiusVal);
// console.log("Diamter of circle is:",diameterVal);

// let circumferenceVal = circumference(radiusVal);
// console.log("Circumference of circle is:",circumferenceVal);

// let areaVal = area(radiusVal);
// console.log("Area of circle is:",areaVal);
// }
// circleCal();


// Program 30
// 30. Write a js program to find maximum and minimum between two numbers using functions.

