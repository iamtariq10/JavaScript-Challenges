// Program 1
// function lowerUpper(){
// 1. Write a js program to convert lowercase string to uppercase.

// let string1 = "my name is tariq";

// for(let i = 0; i<=string1.length;i++){
//    let toUC= string1.toUpperCase();
//    console.log(toUC);
// }
// }



// Program 2
// 2. Write a js program to convert uppercase string to lowercase.
// function runThisByCall(){
// let string2 = "MY FATHER NAME IS SALAMAT ALI";

// for(let i=0;i<=string2.length;i++){
// let toLC = string2.toLocaleLowerCase();
// console.log(toLC);
// }}

// // Program 3
// // Write a js program to toggle case of each character of a string
// function runThisByCall(){
// let string3 = "i LiVe in  FaISALABAD";

// for(let i=0;i<=string3.length;i++){
//     if(string3[i].match(/[a-z]/)){
//     let toUC =  string3.toUpperCase();
//     console.log(toUC);
//     }}

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

// }
// }

// maximumThreeNum();

// Programe 21
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

// Programe 22
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

// // Program 27
// // 27. Write a js program to input any character and check whether it is alphabet, digit or special

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

// function numMaxMin(){

// let number1=parseInt(prompt("Enter your Number 1:"))
// let number2=parseInt(prompt("Enter your Number 2:"))

// function numberMax(){

// console.log("First number is Maxium");
// }

// function numberMin(){
//   console.log("First number is Minimum");
// }

// if(number1>number2){
//   numberMax();
// }

// else{
//   numberMin();
// }

// }

// numMaxMin();

// Program 31
// 31. Write a js program to check whether a number is even or odd using functions.

// function evenOddCheck(){

// function evenOdd(number){
// if(number%2==0){
//   return "Even";
// }
// return "Odd";
// }

// let number = parseInt(prompt("Enter your Number:"));

// let result = evenOdd(number);

// console.log("Result is:",result);

// }

// evenOddCheck();

// Programe 33
// 33. Write a js program to find maximum between two numbers using conditional operator.

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

// Program 34
// 34. Write a js program to find maximum between three numbers using conditional operator.

// Programe 34
// 34. Write a js program to find maximum between three numbers.

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

// }
// }

// maximumThreeNum();

// Programe 35
// 35. Write a js program to check whether a number is even or odd.

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

// Programe 36
// 36. Write a js program to check whether a year is leap year or not.

// function leapYear(){
// let year=prompt("Enter the year");

// if(year%4==0  && year%100==!0 || year%400==0){
//     alert(`${year} is a leap year`);
// }
// else{
//     alert(`${year} is not a leap year`);
// }

// // *** LEAP YEAR IS MULTIPLE OF 4 and not a multiple of 100
// // *** LEAP YEARI IS MULTIPLE OF 400

// }
// leapYear();

//  Programe 37
// 37. Write a js program to check whether a character is alphabet or not.
// function checkAlphabet(){
// let char = prompt("Enter the alphabet:");
//     if(char.match(/[a-zA-Z]/)){
//         alert(`${char} is a alphabet`)
//     }
//     else{
//         alert(`${char} is not a alphabet`)
//     }

// }

// Program 38
// 39. Write a js program print total number of days in a week switch case.

// function dayCheck(){
// let day = parseInt(prompt("Enter the day:"));
// switch (day) {
//   case 1:
//     console.log("Sunday");

//     break;
//   case 2:
//     console.log("Monday");

//     break;
//   case 3:
//     console.log("Tuesday");

//     break;
//   case 4:
//     console.log("Wednesday");

//     break;
//   case 5:
//     console.log("Thursday");

//     break;
//   case 6:
//     console.log("Friday");

//     break;
//   case 7:
//     console.log("Saturday");

//     break;

//   default:
//     break;
// }

// }
// dayCheck();

// Program 39
// 39. Write a js program print total number of days in a month using switch case.


// function printMonth(){
// let month = parseInt(prompt("Enter month:"));

// switch (month) {
//   case 1:
//     console.log("31 Days");
//     break;

//   case 2:
//     console.log("28/29 Days");
//     break;

//   case 3:
//     console.log("31 Days");
//     break;

//   case 4:
//     console.log("30 Days");
//     break;

//   case 5:
//     console.log("31 Days");
//     break;

//   case 6:
//     console.log("30 Days");
//     break;

//   case 7:
//     console.log("31 Days");
//     break;

//   case 8:
//     console.log("31 Days");
//     break;

//   case 9:
//     console.log("30 Days");
//     break;

//   case 10:
//     console.log("31 Days");
//     break;

//   case 11:
//     console.log("30 Days");
//     break;

//   case 12:
//     console.log("31 Days");
//     break;

//   default:
//     break;
// }
// }




// function vowelOrNot(){
// let alphabet =prompt("Enter alphabet:")

// switch (alphabet) {
//   case 'a':case 'A':
//     console.log("Vowel");
//     break;

//   case 'e':case'E':
//     console.log("Vowel");
//     break;

//   case 'i':case 'I':
//     console.log("Vowel");
//     break;

//   case 'o':case 'O':
//     console.log("Vowel");
//     break;

//   case 'u':case'U':
//     console.log("Vowel");
//     break;


//   default:
//     console.log("Not a vowel")
//     break;
// }
// }
// vowelOrNot();



//Program 4
// 41. Write a js program to find maximum between two numbers using switch case.

// function greaterNum(){

// let num1=parseInt(prompt("Enter your Number 1"));
// let num2=parseInt(prompt("Enter your Number 2"));

// switch (num1>num2) {
//   case true:
//       console.log("Greater Number",num1);
//    break;
//    case false:
//        console.log("Greater Number",num2);
//    break;
// }

// }




// function evenOdd(){

//   let num1=parseInt(prompt("Enter your Number"));
  
//   switch (num1%2==0) {
//     case true:
//         console.log("Number is even");
//      break;
//      case false:
//          console.log("Number is odd");
//      break;
//   }
  
//   }

//   evenOdd();


// Program 43

// 43. Write a js program to check whether a number is positive, negative or zero using switch
// case.

// Program 43
// 43. Write a js program to check whether a number is positive, negative or zero using switch
// case.

// function numberCheck(){
// let number=parseInt(prompt("Enter your Number:"))

// switch (number>0) {
 
//   case true:
//     console.log("Number is Positive");

    
//     break;

//   default:
//     console.log("Number is Zero or Negative")
//     break;
// }
// }


// Program 54
// 54. Write a js program to merge two array to third array.

// function array(){
// let arr1=[1,2];
// let arr2=["My array"];

// let arr3 =["Third array"];

// let twoArray= arr1.concat(arr2);

// let threeArray=twoArray.concat(arr3);
// console.log(threeArray);





// }



// Program 49
// 49. Write a js program to delete an element from an array at specified position.

// function removeArray(){
// let arr1=["Apple","Banana","Orange","Mango","Gauva"];

// let afterRomove=arr1.splice(0,1);
// console.log("Before Removal:",arr1);
// console.log("After Removal:",afterRomove);
// }


//Program 57
// 47. Write a js program to copy all elements from an array to another array.
// function copiedArray(){
// let arr1=["Apple","Banana","Orange","Mango","Gauva"];
// console.log("Origianl Array:",arr1)
// let copiedArray=arr1.slice();


// console.log("New Copied Array from Original Array",copiedArray);
// }


// Program 53
// 53. Write a js program to delete all duplicate elements from an array.
    // function getUnique(array){
    //     var uniqueArray = [];
        
    //     // Loop through array values
    //     for(i=0; i < array.length; i++){
    //         if(uniqueArray.indexOf(array[i])===) {
    //             uniqueArray.push(array[i]);
    //         }
    //     }
    //     return uniqueArray;
    // }
    
    // var names = ["Ali","Ahmad","Ali","Waqas","Naveed"];
    // var uniqueNames = getUnique(names);
    // console.log(uniqueNames);


// Program 52
// 52. Write a js program to count total number of duplicate elements in an array.

// function count() {
//     array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

//     array_elements.sort();

//     var current = null;
//     var cnt = 0;
//     for (var i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] != current) {
//             if (cnt > 0) {
//                console.log(`${current} comes ${cnt} times`)
//             }
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//         console.log(`${current} comes ${cnt} times`)
//     }

// }

// count();




// Program 48
// 48. Write a js program to insert an element in an array.

// function insertElement(){
// let arr1= ["Ahmad",true,2];

// let insertElement=arr1.unshift("Tariq here");

// console.log("After inserted an element New is array is:",arr1);
// }



// Progra, 46
// 46. Write a js program to count total number of negative elements in an array.

// function negativeElement(){
// let arr1=[-1,20,9,-2];

// for(let i=0;i<=arr1.length;i++){
// if(arr1[i]<0){
    
//     console.log("Negative elements are:",arr1[i])
// }


// }


// }


// 45. Write a js program to create Simple Calculator using switch case.
// function swtitchCal(){
// let number1=parseInt(prompt("Enter your number 1:"));
// let number2=parseInt(prompt("Enter your number 2:"));
// let operator=prompt("Enter the Operation + , - , * , /");

// switch(operator){
//     case '+':

//     console.log(`${number1}`+`${number2}`);
//     break;
//     case '/':

//     console.log(`${number1}`/`${number2}`);
//     break;
//     case '-':

//     console.log(`${number1}`-`${number2}`);
//     break;

//     case '*':

//     console.log(`${number1}`*`${number2}`);
//     break;    
//     default:
//         console.log("invalid operation");
//         break;


// }



// }



// MATH BASIC PROGRAMS

// Program 1
// Question-01
// Write a function that converts hours into seconds.
// Examples
// howManySeconds(2) ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400
// Notes
// * 60 seconds in a minute, 60 minutes in an hour
// * Don't forget to return your answer.



// function hoursCal() {
    


// function howManySeconds(number) {
//     let result = number * 60 *60;
//     return result;
    

    
// }

// let num= parseInt(prompt("Enter your number"));
// console.log(howManySeconds(num));

    


// }
// hoursCal();


// Program 2

// Question-02
// Create a function that takes the age and return the age in days.
// Examples
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300
// Notes
// * Use 365 days as the length of a year for this challenge.
// * Ignore leap years and days between last birthday and now.
// * Expect only positive integer inputs.


// function ageCal() {
    


// function ageInDays(number) {
//     let result = number * 365;
//     return result;
    

    
// }

// let num= parseInt(prompt("Enter your Age:"));
// console.log("Age in Days: ",ageInDays(num));

    


// }
// ageCal();




// Program 3
// Question-03
// Create a function which takes an array of number arr and returns inverted array.
// Examples
// invertArray([1, 2, 3, 4, 5])) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5] ➞ [-1, 2, -3, 4, -5]
// invertArray([]) ➞ []

// Program 4
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false


// function stringCount() {
    

// function twoStrings(st1,st2) {
// let string1= st1.length;
// console.log("First String Length:",string1);
// let string2 = st2.length;
// console.log("Second String Length:",string2);
// if(string1===string2){
//     console.log("True")
// }
// else{
//     console.log("False")
// }


    
// }

// console.log(twoStrings(prompt("Enter your First String:"),prompt("Enter your 2nd String:")));

// }
// stringCount();



// Question-05
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// parseArray([]) ➞ []

// function changeArray(){

// function parseArray(arr) {
//     console.log("Original Array",arr);
//     let parsedArray=arr.map(function(element){return element.toString()})
//     console.log("Parsed Array: ",parsedArray);
    

// }

// let array =[1,2,'a','abe'];
// parseArray(array);

// }
// changeArrayArray();


// PROBLEM BASE PROGRAMS

// Question-01
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
// Examples
// cardHide("1234123456785678") ➞ "************5678"
// cardHide("8754456321113213") ➞ "************3213"
// cardHide("35123413355523") ➞ "**********5523"









// function cardHide(card) {
//     let hideNum = [];
//       for(let i = 0; i < card.length; i++){
//       if(i < card.length-4){
//         hideNum.push("*");
//       }else{
//         hideNum.push(card[i]);
//       }
//     }
//     return hideNum.join("");
//   }

//   console.log(cardHide("1234123456785678"));



// Program 2


// Question-02
// Create a function to return the amount of potatoes there are in a string.
// Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1


// function potato(potstring) {
// if(potstring==="potato"){
//     return 1;
// }
// else if(potstring==="potatopotato"){
//     return 2;


    
// }
// else if(potstring==="potatopotatopotato"){
//     return 3;


// }

// }
// console.log(potato("potatopotato"));


// Program 3


// Question-03
// Create a function that takes a string and returns a string in which each character is repeated once.
// Examples
// doubleChar("String") ➞ "SSttrriinngg"
// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"
// doubleChar("1234!_ ") ➞ "11223344!!__  "


// function repeatString(string) {

//     for(let i=0;i<=string.length;i++){
//         console.log((string[i]+string[i]));
        

        
        
//     }



// }

// console.log(repeatString("Hi"))


// function unitBill(units) {
//     if(units<=50){
//         let bill = units*0.5;
//         console.log("Total bill before Tax: ",bill)
//         let tax = (bill*20)/100;
//         console.log("Total bill after Tax 20%: ",bill+tax);
//     }
//     else if(units<=150){
//         let bill = (50*0.5) + (units-50)*0.75;
//         console.log("Total bill before Tax: ",bill)
//         let tax = (bill*20)/100;
//         console.log("Total bill is: ",bill+tax);        
//     }
//     else if(units<=250){
//        let bill =(50*0.5)+(100*0.75)+((units-200)*1.20);
//        console.log("Total bill before Tax: ",bill)
//        let tax = (bill*20)/100;
//         console.log("Total bill after Tax 20%: ",bill+tax);

//     }
//     else if(units>250){
//         let bill =units*1.50;
//         console.log("Total bill before Tax: ",bill)
//         let tax = (bill*20)/100;
//         console.log("Total bill after Tax 20%: ",bill+tax);
//     }
// }


// let yourUnits = parseInt(prompt("Enter your units: "));
// console.log(unitBill(yourUnits));






// function twoStrings(str1,str2) {
//     let arr=[];
// for(let i=0;i<=str2.length;i++){
//     if(str1===str2[i]){
//         arr.push(str2[i]);
//     }
    
    
// }
// console.log("Total Occurances:" ,arr.length);

// }


// console.log(twoStrings("a",prompt("Enter your Second String")));


// function multiples(number) {
    
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
  
//     if (i % 3 === 0 && i % 5 === 0) {
//       sum += i;
//         }
        
//       }
//       console.log(sum)
      
      
//     }
// multiples(1000);




// let string = "Hellow world !";

// let split = string.split(" ");
// console.log("Before join and after split:",split)
// let join = split.join("")

// console.log(join);





// Problem Base Programs
// 1- Write a js program to check whether a character is uppercase or lowercase alphabet.



// const alphabet = prompt("Write a character: ");

// if(alphabet.match(/[A-Z]/)){
//     console.log("Uppercase");

// }
// else{
//     console.log("LowerCase")
// }

// Program 5

//  Write a js program to input angles of a triangle and check whether triangle is valid or not.


// let angle1 =parseInt( prompt("Enter your First angle: "));
// let angle2 =parseInt( prompt("Enter your Second angle: "));
// let angle3 =parseInt( prompt("Enter your Third angle: "));

// let totalAngles = angle1 + angle2 + angle3;
// if(totalAngles===180){
//     console.log("It is valid Triangle");

// }
// else{
//     console.log("Not a triangle");
// }


// Program 7
// 7- Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// let angle1 =parseInt( prompt("Enter your First angle: "));
// let angle2 =parseInt( prompt("Enter your Second angle: "));
// let angle3 =parseInt( prompt("Enter your Third angle: "));


// if(angle1 ===angle2 && angle1===angle3 && angle2===angle3){
//     console.log("It is Equilateral triangle");
// }
// else{
//     console.log("it is isosceles or scalene triangle")
// }




// Program 8
// 8- Write a js program to find all roots of a quadratic equation.
// ax2 + bx + c = 0


// let a =parseInt( prompt("Enter your value of a: "));
// let b =parseInt( prompt("Enter your value of b: "));
// let c =parseInt( prompt("Enter your value of c: "));


// let equation = Math.sqrt((b*b) -( 4 * a * c));




// let root1 =parseInt( - b*(equation)/2*a);
// let root2 =parseInt( + b*(equation)/2*a);

// console.log("Root1 is: ",root1);
// console.log("Root2 is: ",root2);

// Program 9
// 9- Write a js program to calculate profit or loss.



// let price = parseInt( prompt( "Enter your product price you buy:"))
// let sell =parseInt( prompt("You sell it in rupees?"));

// if(price<sell){
//     console.log("This is Profit");
// }
// else{
//     console.log("This is loss");
// }


// Program 10
// 10- Write a js program to search all occurrences of a character in given string.

// let string = "This is string";
// for(let i=0;i<=string.length;i++){
//     console.log("Index Number ",i," => ",string.charAt([i]));
// }

// Program 11

// Write a js program to remove first occurrence of a character from string.
// let string = "This is string";
// let afterRemovealFirstChar= string.substring(1);
// console.log(afterRemovealFirstChar);

// Program 16
// 16- Write a js program to remove last occurrence of a character from string.

// let string = "This is string";
// let afterRemovealFirstChar= string.substring(0,string.length-1);
// console.log(afterRemovealFirstChar);



// Program 17
// 17- Write a js program to remove all occurrences of a character from string.

// let string = "This is string";
// let afterRemovealFirstChar= string.substring(string.length);
// console.log(afterRemovealFirstChar);

// Program 19
// 19- Write a js program to replace first occurrence of a character with another in a string.

// let string = "This is string";

// let result = string.charAt(0);
// let remove = result.replace(result,prompt("Enter the character to be replaced: "))
// console.log(remove+string.substring(1,string.length))


// Program 20
// 20- Write a js program to replace last occurrence of a character with another in a string.

// let string = "This is string";

// let result = string.charAt(string.length-1);
// let add = result.replace(result,prompt("Enter the character to be replaced: "))
// console.log((string.substring(0,string.length)+add));



// Program 21
// 21- Write a js program to replace all occurrences of a character with another in a string.


// let string = "This is string";

// let replace = string.replace(string,prompt("Enter replaced string:"));
// console.log("Original String:",string);
// console.log("Replaced String: ",replace)



// Program 22
// 22- Write a js program to find first occurrence of a word in a given string.

// let string = prompt("Enter your string to console the first word");
// let arr1=[];
//     for(let i=0;i<=string.length;i++){
//         arr1.push(string[i]);
//         if(string[i]===" "){
//             break;
//         }
//     }
//     let arr2 = arr1.slice(0,arr1.length-1);
//     let toStrings= arr2.toString();
//     let result = toStrings.replace(",","")
// console.log((result));




// let string = prompt("Enter your string to console the first word");

// let arr1=[];
//     for(let i =string.length;i>=0;i--){
//         arr1.push(string[i]);
//         if(string[i]===" "){
//             break;
//         }
//     }
//     let arr2 = arr1.slice(0,arr1.length-1);
//     let toStrings= arr2.toString();
//     let result = toStrings.replace(",","")
//       let result1 = arr1.reverse();
// console.log((result1));


// // Program 52

// 52- Write a js program to sort even and odd elements of array separately.

// let array = [10,2,4,6,1,3,2];
// let oddNumber=[];
// let evenNumbers = [];
// console.log(array.sort(function(a,b){return (a-b)}));

// for(let i =0;i<=array.length;i++){
//     if(array[i] % 2 ===0 ){
//         evenNumbers.push(array[i]);

//     }
//     else if(array[i] % 2===1){
//         oddNumber.push(array[i])
//     }
// }


// console.log("Odd Numbers: " ,JSON.stringify( oddNumber));
// console.log("Even Numbers: ",JSON.stringify( evenNumbers));


// 40- Write a js program to search an element in an array.

// let array = [1,2,3,4,5,"Mohammad",'T'];
// const number =parseInt( prompt("Enter your number"));

// for(let i =0;i<=array.length;i++){
     
// if(number === array[i]){
//     console.log("Number Founded");
// }
// else{
//     console.log("Number not found");
//     break;
// }

// }


// 45- Write a js program to find sum of all odd numbers between 1 to n.






// function isOdd(n) {
//     return Boolean(n % 2);
//   }
  
//   function findSum(no) {
//     let sum = 0;
  
//     for (var i = 0; i < no; i++) {
//       if (isOdd(i)) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   console.log(findSum(100));



// Program 5
// 5. Write a js program to print all odd number between 1 to 100.


// for(let i=1;i<=100;i++){
//   if(i%2==1){
//     console.log("Odd Numbers from 1 to 100 :",i);
//   }
// }

// Program 6
// 4. Write a js program to print all even numbers between 1 to 100. - using forloop


// for(let i=1;i<=100;i++){
//   if(i%2==0){
//     console.log("Even Numbers from 1 to 100 :",i);
//   }
// }

// Program 7
// 3. Write a js program to print all alphabets from a to z. - using for loop

// let alphabet ="abcdefghijklmnopqrstuvwxyz";


// for(let i=0;i<=alphabet.length;i++){
//   console.log(alphabet.charAt(i));
// }

// Program 7
// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using for loop

// let value =parseInt(prompt("Enter your Number: "))
// for(let i=value;i>=1;i--){
//   console.log(i)
// }


// 1. Write a js program to print all natural numbers from 1 to n. - using for loop


// let value =parseInt(prompt("Enter your Number: "))
// for(let i=1;i<=value;i++){
//   console.log(i)
// }



// 3-Write a js program to floor the number without using the math.floor method!


// 10. Write a js program to delete an element from an array at specified position.


// let array=[1,2,3,4,5,6];
// let remove=array.splice(2,1);
// console.log(array);




// 9. Write a js program to insert an element in an array.

// let array=[1,2,3,4,5,6];
// let remove=array.splice(2,1,"a");
// console.log(array);


// 8. Write a js program to copy all elements from an array to another array.


// let array1=[1,2,3,4,5,6];
// let array2=[7,8,9,10];


// array1.push(...array2);

// console.log(array1)
