// Programe 1
// 1. Write a js program to find maximum between two numbers.

// let number1 = prompt("Enter your first number");
// let number2 =prompt("Enter your second Number");

// if(number1>number2){
//     alert(`${number1} is greater than ${number2}`);
// }

// else{
//     alert(`${number2} is greater than ${number1}`);
// }

// Programe 2
// 2. Write a js program to find maximum between three numbers.

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

//Programe 3
// 3. Write a js program to check whether a number is negative,         positive or zero.

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

//Programe 4
// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// let number = prompt("Enter the number:");

// if(number%5==0 && number%11==0){
//     alert(`${number} is divisible by 5 and 11 `)
// }

// else{
//     alert(`${number} is not divisible by 5 and 11 `)
// }

// Programe 5
// 5. Write a js program to check whether a number is even or odd.

// let number=prompt("Enter number");

// if(number%2==0){
//     alert(`${number} is even`)
// }
// else{
//     alert(`${number} is odd`)
// }

// Programe 6
// 6. Write a js program to check whether a year is leap year or not.

// let year=prompt("Enter the year");

// if(year%4==0  && year%100==!0 || year%400==0){
//     alert(`${year} is a leap year`);
// }
// else{
//     alert(`${year} is not a leap year`);
// }

// *** LEAP YEAR IS MULTIPLE OF 4 and not a multiple of 100
// *** LEAP YEARI IS MULTIPLE OF 400

// Programe 7
// 7. Write a js program to check whether a character is alphabet or not.

// let char = prompt("Enter the alphabet:");
//     if(char.match(/[a-zA-Z]/)){
//         alert(`${char} is a alphabet`)
//     }
//     else{
//         alert(`${char} is not a alphabet`)
//     }

//Program 8
// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// let alphabet = prompt("Enter the alpbahet:");

// if (alphabet.match(/[a-zA-Z]/)) {
//   if (
//     alphabet == "a" ||
//     alphabet == "e" ||
//     alphabet == "i" ||
//     alphabet == "o" ||
//     alphabet == "u"
//   ) {
//     alert(`${alphabet} is vowel`);
//   }
//   else{
//     alert(`${alphabet} is not vowel`);
//   }
// }

// else{
//     alert("Invalid alphabet");
// }


// Programe 9
// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

let char= prompt("Enter any character:");
if(isNaN(char) && char.match(/[a-zA-Z]/)){
    alert("Not a number");
}
else{
    alert("Number");
}
