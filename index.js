// console.log("Amit and Ashish watching bad things on computer")

// function sum(a,b) {
//     return a + b;
// }
// console.log(sum(112112 , 64446646));

// var myName = 'Ankit chauhan';
// console.log(myName);

// var _myName = 'amit';
// console.log(_myName);

// var $myName = 'Ashish';
// console.log($myName);


// var myName = ('Ankit Chauhan');
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var myNameIs = true;
// console.log(myNameIs);

// type of operator

// console.log(typeof(myNameIs));

// data type practice

// console.log(10 + "20");
// console.log(9 - "5");  //bug
// console.log("Java " + "script");
// console.log("Java" + "script");
// console.log("" + "");
// console.log("" + 0);
// console.log(true + true);
// console.log("Ankit" - "Chauhan");
// console.log(true + false);
// console.log(false - true);
// console.log(true - true);

// Interview Question 1
// Diffrence between null vs undefined

// var empty = null;
// console.log(empty);
// console.log(typeof(empty));
// // 2nd Javascript bug

// var option;
// console.log(option);
// console.log(typeof(option));


// Interview Question 1
// What is null?

// var myPhoneNumber = 1234567890;
// var myName = "Ankit Chauhan";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)){
//     console.log('Plzz enter a valid no.');
// }

// NaN Practice

// console.log(NaN === NaN);
// console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));


// Challenge time 4

// sol:- 1

// console.log(3**3);

// sol:- 2

// console.log(8 + " Chauhan");

// sol:- 3

// var a = 5;
// var b =10;

// var c = b; //c = 10;
// b = a; //b = 5;
// a = c; //a = 10;

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

// Sol:- 4

// var a = 5;
// var b =10;

// a = a + b; //a = 15;
// b = a - b; //b = 5;
// a = a - b; //a = 10;

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

// Interview Question 4

// var num1 = 5;
// var num2 ='5';

// console.log(num1 == num2);
// console.log(typeof(num1));
// console.log(typeof(num2));


// var num1 = 5;
// var num2 = '5';

// console.log(num2);
// console.log(num1 === num2);
// console.log(typeof(num1));
// console.log(typeof(num2));



//# Control Statement 

// *if...else.. statement

// if 50% off = Take two shirts. 
// else Take only one shirt.

// var buyMore = "No off";

// if (buyMore == "50% off") {
//     console.log('Take two shirts.');
// } else {
//     console.log('Take only one shirt.');
// }

// Challenge time 


// var year = 2016;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if(year % 400 === 0){
//         console.log("The year " + year + " is a leap year");
//       }else{
//         console.log("The year " + year + " is not a leap year");
//       }  
//     }else{
//         console.log("The year " + year + " is a leap year");
//     }
    
// }else{
//     console.log("The year " + year + " is not a leap year");
// }
    



// Challenge time again



// What is truthy and falsy values in Javascript

// We have total 5 falsy values in Javascript
// 0, "", undefined,null,NaN,false** is false anyway

// if (score = null) {
//     console.log("OMG, We lose the game.");
// } else {
//     console.log("Yay, We won the game.");
// }

// *conditional operator (ternary operator)

// variablename = ((condition) ? value 1 : value 2);

// var age = 17;
// console.log((age >=18) ? "You can come" : "You can't come");


// *elseif condition operator
// Find the area of circle, traingle, rectaingle.

// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;
// if (area == "circle") {
//     console.log("The area of circle is :" + PI*r**2 );
// }else if (area == "traingle") {
//     console.log("The area of traingle is :" + (l*b)/2 );
// }else if (area == "rectangle") {
//     console.log("The area of rectangle is :" + (l*b) );
// }else{
//     console.log("Plzz Enter Valid Data");
// }



// *switch case operator 
// Find the area of circle, traingle, rectaingle.


// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;

// switch (area) {
//     case 'circle':
//         console.log("The area of circle is :" + PI*r**2 );
//         break;
//     case 'traingle':
//          console.log("The area of traingle is :" + (l*b)/2 );
//         break;
//     case 'rectangle':     
//         console.log("The area of rectaingle is :" + (l*b));
//         break;

//     default:
//         console.log("Plzz Enter Valid Data");
//         break;
// }



// *while loop statement

// var num = 0;
// // block scope
// while (num <=10) {
//    console.log(num);
//    num++;
// }


// *do while loop statement 

// var num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num <=10);



// *For loop


// for (var num = 0; num <= 10; num++) {
//     console.log(num);
// }

// challenge time 


// for (var num = 0; num <= 10; num++) {
//     var tableof = 8;
//     console.log(tableof + "*" + num + "=" + tableof * num);
// }


// for (var num = 0; num <= 10; num++) {
//     var tableof = 9;
//     console.log(tableof * num);
// }

// #function 

// *function defination and fuction calling

// function sum(){
//     var a =20, b=40, total = a+b;  //defination of function
//     console.log(total);
// } 
// sum();   // calling function


// *function parameter and fuction arguments.


// function sum(a,b){                 // (a,b)  function parameter
//     var total = a+b;  
//     console.log(total);
// } 
// sum(); 
// sum(20,30);                 // (20,30)  values are function arguments
// sum(50,50); 


// *function expression 


// function sum(a,b){                 
//     var total = a+b;  
//     console.log(total);
// } 
// var funExp = sum(5,10);   //function expression 
// funExp;


// *return keyword


// function sum(a,b){                  
//     return total = a+b;     //return function 
// } 
// var funExp = sum(50,10);  
// console.log('The sum of two no. is ' + funExp);

// *anonymous function 

// var funExp = function(a,b){     // function anonymous expression "var funExp"             
//     return total = a+b;         //function(a,b){} function anonymous 
// } 
// var sum = funExp(50,10);  
// console.log('The sum of two no. is ' + sum);


// Now It's Time for Javascript


// Features of ECMAScript 2015 also know as ES6

//*LET VS CONST


// var myName = "ankit";
// console.log(myName);

// myName = "chauhan";
// console.log(myName);

// let myName = "ankit";
// console.log(myName);

// myName = "chauhan";
// console.log(myName);

// const myName = "ankit";
// console.log(myName);

// myName = "chauhan";
// console.log(myName);

// function biodata(){
//    let myFirstName = "Ankit";
//    console.log(myFirstName);

//    if(true){
//     let myLastName = "Chauhan";
//     console.log('inner '+ myLastName);
//     console.log('inner '+ myFirstName);
//    }

//     console.log('innerOuter '+ myLastName);
   
// }
// biodata();


// var => function scope
// let and const => block scope


// *Template literals (Template string)


// for(let num =1; num<=10; num++){
//     let tableof =12;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }


//*Default Parameters  


// function multi(a,b=6){    // default parameter
//     return a*b;
// }

// console.log(multi(4));


//* Fat Arrow Function

// Normal Way of writting Function

// function sum(){
//     let a =4; b =6;
//     let sum = a+b;
//     return `The sum of two no. is ${sum}`;
// }
// console.log(sum());


// how to convert in into Fat Arrow Function


// const sum = () => `The sum of two no. is ${(a=4)+(b=6)}`;

// console.log(sum());



// ****Arrays in Javascript****


// var myFriends = ['Ankit','Vishal','Anurag','Amit','Rohan','Ashish'];

// console.log(myFriends[0])

// *Array Subsection 1 = traversal in array

// var myFriends = ['Ankit','Vishal','Anurag','Amit','Rohan','Ashish'];

// console.log(myFriends[myFriends.length-1])
// console.log(myFriends.length)
// console.log(myFriends.length-1)

//we use for loop to nevigate

// var myFriends = ['Ankit','Vishal','Anurag','Amit','Rohan','Ashish'];

// for(var i=0; i<=myFriends.length; i++){
//     console.log(myFriends[i]);
// }

// After ES6 we have for...in and for...of loop too

// var myFriends = ['Ankit','Vishal','Anurag','Amit','Rohan','Ashish'];

// for(let elements in myFriends){
//     console.log(elements);
// }


// var myFriends = ['Ankit','Vishal','Anurag','Amit','Rohan','Ashish'];

// for(let elements of myFriends){
//     console.log(elements);
// }



//Array.prototype.forEach()

// var myFriends = ['Ankit','Vishal','Anurag','Amit','Rohan','Ashish'];

// myFriends.forEach(function(element, index, array){
//     console.log(element +" index :"+ index + " " + array);
// });


//using Fat Arrow function

// var myFriends = ['Ankit','Vishal','Anurag','Amit','Rohan','Ashish'];

// myFriends.forEach((element, index, array) => {
//     console.log(element +" index :"+ index + " " + array);

// });



//Array Subsection 2 = Searching and Filter in an Array


//array.prototype.indexOf()


// var myFriendNames = ['Ankit','Vishal','Anurag','Amit','Rohan','Ankit'];

// console.log(myFriendNames.indexOf("Ankit" , 3));


//array.prototype.lastIndexOf


// var myFriendNames = ['Ankit','Vishal','Anurag','Amit','Rohan','Ankit'];

// console.log(myFriendNames.lastIndexOf('Ankit'));


//array.prototype.includes()


// var myFriendNames = ['Ankit','Vishal','Anurag','Amit','Rohan','Ankit'];

// console.log(myFriendNames.includes('Ankit',2));



// aaray.prototype.find()


// const price = [100,200.300,400,500,600];

// // price < 500;

// const priceTag = price.find((currVal)=>{
//     return currVal < 500;
// });

// console.log(priceTag);





// const priceTag = price.find((currVal)=>currVal < 500);
// console.log(priceTag);




// console.log(price.find((currVal)=>currVal < 500));




//array.protoype.findIndex()


// const price = [100,200.300,400,500,600];


// const priceTag = price.findIndex((currVal)=>currVal > 500);
// console.log(priceTag);


// console.log(price.findIndex((currVal)=>currVal < 500));



// Array.prototype.filter()


const price = [100,200,300,400,500,600];

// price < 500;

const priceTagValues = price.filter((elem, index)=>{
    return elem < 500;

});

console.log(priceTagValues);



//Array subsection 3 = How To Sort And Compare an Array

// const months = ['March', 'April', 'Jan', 'Feb', 'oct'];
// console.log(months.sort());



// const numbers =[7,8,6,9,5,0,23,3,6,8,65,432,2,23];
// console.log(numbers.sort());



//Array subsection 4 = Perform CRUD

// array.prototype.push()

// const animals = ['Anuj','Dog','Anurag','Chutiya','Vishal','sellfish'];

// const count = animals.push('amit','Motu');
// console.log(animals);
// console.log(count);


// array.prototype.unshift()

// const animals = ['Anuj','Dog','Anurag','Chutiya','Vishal','sellfish'];

// const count = animals.unshift('Riya','Panda');
// console.log(animals);
// console.log(count);

// 2nd example

// const myNumbers = [1,3,6,9,0,4];

// myNumbers.unshift(5,2);
// console.log(myNumbers);


//Array.prototype.pop()

// const myVegitables = ['brinjal','tommato','potatto','cucumber'];

// console.log(myVegitables.pop());
// console.log(myVegitables);


//Array.prototype.shift()

// const myVegitables = ['brinjal','tommato','potatto','cucumber'];

// console.log(myVegitables.shift());
// console.log(myVegitables);



// challenge time 

//Aarry.prototype.splice()
//Add and/or removes elements from an array.

// 1: Add Dec at the end of the array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?

// const months = ['Jan','march','April','June','July'];

// //sol1:

// const newMonth = months.splice(months.length, 0 , 'Dec');
// console.log(months);

// sol3:

// const months = ['Jan','march','April','June','July'];

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March')
//     console.log(months);
// }else
// console.log('Data not found');


//sol4:

// const months = ['Jan','march','April','June','July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1)
//     console.log(months);
// }else
// console.log('Data not found');


// sol2:

// const months = ['Jan','march','April','June','July'];

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March')
//     console.log(months);
//     console.log(updateMonth);
// }else
// console.log('Data not found');

// Array subsection 4 = Map and Reduce Method

// Array.prototype.map()

// const array1 = [12,20,30,46,79,56];
// // num > 46

// let newArr = array1.map((currElm,index,arr)=>{
//     return currElm > 46;

// });

// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((currElm,index,arr)=>{
//     return `index no = ${index} and the value is ${currElm} belongs to ${arr}`

// });
// console.log(newArr);

// challenge Time

// 1: Find the square root of each element in an array?

//sol1:

// let arr = [144,169,100,1800,2400];

// let arrSqr = arr.map((currElem)=>{
//     return Math.sqrt(currElem);
// })

// console.log(arrSqr);


// 2: Multiply each element by 2 and return only those elements which are greater than 10?


// let aar1 = [1,2,3,4,5,6,7,8,9];

// let newArr = aar1.map((currElem)=>{
//      return currElem * 2;
// }).filter((currElem)=>{
//      return currElem > 10;
// })

// console.log(newArr);

// professional method

// let newArr = aar1.map((currElem)=> currElem * 2).filter((currElem)=> currElem > 10).reduce((Accumulator,currElem)=> Accumulator += currElem );
// console.log(newArr);



// Reduce method

//flatten array means to convert the 3rd or 2nd aaray into a 
// single dimensional array


// Accumulator
// Current Values 
// Curruemt Index
// Source Array


// let arr = [4,5,6];

// let sum = arr.reduce((Accumulator,currElem)=>{
//     return Accumulator += currElem;
// },10);                                // if you forget add no. in array you can add here also.

// console.log(sum);
 

// How to fatten an array
// converting 2d and 3d array into one dimensional array

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8']

// ];

// let flatArr = arr.reduce((accum, currVal)=> accum.concat(currVal));
// console.log(flatArr);


// Section 7 :Strings in javascript

// let myName = "Ankit chauhan";

// using string() constructor

// let myFullName = new String("Ankit Chauhan")

// console.log(myName);
// console.log(myFullName);


// String.prototype.length
// How to find the length of a string 

// let myName = "Ankit chauhan";
// console.log(myName.length);

// **Escape Character

// let anySentence = "We need to do \"Shopping\" tonight.";     // using back tick you can display special string
// console.log(anySentence);


// If you don't want to mess, simply use the alternate quotes

// let anySentence = 'We need to do "Shopping" tonight.';    
// console.log(anySentence);



// **Find string in a string
// String.prototype.indexof()

// const myBioData = "I willing to do something big in this";
// console.log(myBioData.indexOf("t",11));


// String.prototype.lastIndexof()

// const myBioData = "I willing to do something big in this";
// console.log(myBioData.lastIndexOf("t",11));

//**Searching for a String in a String
//String.prototype.search()


// const myBioData = "I willing to do something big in this";
// console.log(myBioData.search("something"));



//**Extracting String Parts

// There are 3 method for extracting a part of String

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice method 

// var str = "Apple, Banana, Grapes, Mango, PineApple";

// let newstr = str.slice(0,6);
// let newstr = str.slice(0,-10);
// let newstr = str.slice(5);

// console.log(newstr);

// Challenge Time

// Display only 280 characters of a string like the one used in Twitter

// let myTweets = "The son of sreenwriter Salim Khan, Khan began his acting career with the supporting role in Biwi ho to aisi (1988), followed by his breakthrough with a leading role in sooraj Barjatya's romance Maine pyar kiya"
// let myActualTweet = myTweets.slice(0,200);

// console.log(myActualTweet);
// console.log(myActualTweet.length)

// The substing() Method
// substring() is similar to slice().
// The diffrence is that substring() cannot accept negative indexes.


// var str = "Apple, Banana, Grapes, Mango, PineApple";

// let newstr = str.substring(0,6);
// let newstr = str.substring(0,-10);
// let newstr = str.substring(4);

// console.log(newstr);


// The substr() Method
// substr() is similar to slice().

// var fruits = "Apple, Banana, Grapes, Mango, PineApple";

// let res = fruits.substr(0,6);
// let res = fruits.substr(-7);  //gives backword output from string data
// console.log(res);

// **replacing string content()

// string.prototype.replace

// let myBioData = "I am ankit akhilesh chauhan ankit";
// let replaceData = myBioData.replace("ankit akhilesh chauhan","Ankit Akhilesh Chauhan");
// console.log(replaceData);
 

// **Extracting String Characters
// There are 3 method for extracting string characters

// charAt(position)
// charCodeAt(position)
// property access[]

// The charAt() method

// let str = 'HELLO WORLD';
// let newStr = str.length-1;
// console.log(str.charAt(newStr));

// The charCodeAt() method

// let str = "HELLO WORLD";

// console.log(str.charCodeAt(7));

// challenge Time 
// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length-1;
// console.log(str.charCodeAt(lastChar));

// Property Access

// var str = "HELLO WORLD";
// console.log(str[0]);      // is like an array but used in string as a property access 


//**Other Useful Methods

// let myName = "Ankit Chauhan";
// console.log(myName.toUpperCase())
// console.log(myName.toLowerCase())


// The concat mathod

// let fName = 'Ankit'
// let lName = 'Chauhan'

// console.log(fName.concat(lName))
// console.log(fName.concat(" ", lName))
// console.log(`${fName} ${lName}`)


// string.trim()

// var str = "                           Hello World                          ";
// console.log(str.trim())


//converting a string to an Array
//split() method

// var txt = "a,b,c ! d,e f,g";    // string
// console.log(txt.split(","))                  //split on commas 
// console.log(txt.split(" "))                  // split on spaces
// console.log(txt.split("!"))                  //split on pipe 



// *** Section 8 Date and Time in JavaScript ***

// creating Date Object:
// There are 4 ways to create a new date object:

// Date method

// new Date()
// new Date(year, month, day, hours, minutes, seconds, miliseconds)
// // it takes 7 arguments
// new Date(miliseconds)
// // we cannot avoid month section 
// new Date(date String)

// new Date()

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// Date.now()

// console.log(Date.now());

// new Date(year, month,.......)
//Note: Javascript months count from 0 to 11 
// january is 0 and December is 11.


// var d = new Date(2023, 2, 3, 5, 11, 45, 34);
// console.log(d.toLocaleString());

// new Date(dateString)


// var d = new Date("october 06, 2022 11:13:00");
// console.log(d.toLocaleString());


// new Date(milliseconds)

// var d = new Date(0);
// var d = new Date(1679302873440);
// var d = new Date(86400000*2);

// console.log(d.toLocaleString());


//Dates Method 


// const currDate = new Date();

// How to get individual date
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());      //0-11 jan to Dec
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// How to set individual date

// const currDate = new Date();

// console.log(currDate.setFullYear(2022));
// // The setFullYear() method can optionallly set month and day
// console.log(currDate.setFullYear(2022, 10, 5));
// console.log(currDate.setMonth(10));      //0-11 jan to Dec
// console.log(currDate.setDate(5));
// console.log(currDate.toLocaleString());


// Time method

// const currTime = new Date();

// // How to get individual time

// console.log(currTime.getTime());
// // The getTime() method returns the number of milliseconds since january 1,1970
// console.log(currTime.getHours()); // gethours() method returns the hours of date as a number (0-23)
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// // How to set individual time

// const currTime = new Date();

// console.log(currTime.setTime());
// console.log(currTime.setHours(5)); 
// console.log(currTime.setMinutes(5));
// console.log(currTime.setSeconds(5));
// console.log(currTime.setMilliseconds(5));

// // Practice Time
// new Date().toLocaleDateString();  //  11/16/2015
// //---
// new Date().toLocaleTimeString();  //  11:18:48 AM  
// //---
// new Date().toLocaleString();   //   11/16/2015,  11:18:48 AM


//***Section 9: Math Object in Javascript*** 

// The JavaScript Math object allow you to perform mathematical tasks on numbers.

// Math.PI()

// console.log(Math.PI);

// Math.round()
// returns the value of x rounded to it's nearest integer

// let num = 10.457;
// console.log(Math.round(num));

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt()
// Math.sqrt() returns the square root of x

// console.log(Math.sqrt(144));
// console.log(Math.sqrt(69));
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(4));

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-123));     //always give positive Number
// console.log(Math.abs(34));
// console.log(Math.abs(-67));
// console.log(Math.abs(4-6));

// Math.ceil()

// console.log(Math.ceil(45.1));      // If value in decimal form then it will returns ++value in output
// console.log(Math.ceil(35));      
// console.log(Math.ceil(99.1));

// Math.floor()

// console.log(Math.floor(5.6));    // decreses the demial form and gives output
// console.log(Math.floor(7.6));


// Math.min()
// Math.min() returns lowest value in alist of arguments

// console.log(Math.min(123, 345, 65, -1, -9));


// Math.max()
// Math.max() returns lowest value in alist of arguments

// console.log(Math.max(123, 345, 65, -1, -9)); 

// Math.random()

// console.log(Math.random());                    //always return decimal form randomly
// console.log(Math.floor(Math.random()*10));        // using this returns decimal values in between 0 to 9

// Math.trunc()
// returns only integer value as it is

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));


// Practice Time

// if the argument is a positive number, Math.trunc() is equivalent to 
// Math.floor(), 
// otherwise Math.trunc() is equivalent to Math.ceil()  .

// ***Dom in Javascript : section 10

// # Window vs Document
// # DOM vs BOM
// # DOM Navigation
// # Searching and getting Elements Reference

// *** Section 11 : EVENTS in JavaScript ****

// # 4 Ways of writting Events in JavaScript
// # What is Event Object?
// # MouseEvent in JavaScript
// # KeyboardEvent in JavaScript
// # inputEvent in JavaScript

// *** Section 12 : Timing Based in JavaScript ***


// # setTimeOut()
// # clearTimeout()
// # setInterval() 
// # clearInterval()


// **** Object Oriented in JavaScript****

// # What is Object Literal ? 

// Object literal is simply a key:value pair data structure.
// Storing variables and Functions together in one container,
// we can refer this as an object. 

// How to create an object.

// 1st Way

// let bioData = {
//     myName : 'Ankit Chauhan',
//     myAge : 26,
//     getData : function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}.`);
//     }
// }

// console.log(bioData.myName);

// 2nd way no need to write functionsn as well after es6.


// let bioData = {
//     myName : 'Ankit Chauhan',
//     myAge : 26,
//     getData (){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}.`);
//     }
// }

// bioData.getData();

// What if we want object as a value inside a object.

// let bioData = {
//     myName : {
//        realName : 'Ankit Akhilesh Chauhan',
//        instaName : 'ankit.__.chauhan'
//     },
//     myAge : 26,
//     getData (){
//         console.log(`My name is ${bioData.myName.instaName} and my age is ${bioData.myAge}.`);
//     }
// }

// // console.log(bioData.myName.realName);
// bioData.getData();

// # What is "this" object?


// The defination of "this" object is that it contain the current context.

// The ths object can have different vlaues depending on where it is placed.

// For example 1

// console.log(this.alert('Awesome')); 

// ex 2

// function myName(){
//     console.log(this);
// }
// myName();

//ex 3

// var myNames = 'Ankit';

// function newName() {
//     console.log(this.myNames);
// }
// newName();

// const obj = {
//     myAge : 21,
//     myName :() {
//          console.log(this.myAge);
        
//     }
// }
// obj.myName();

// ex 5 
// this object will not work with arrow function bcz arrow

// const obj = {
//     myAge : 21,
//     myName  : () => {
//          console.log(this);
        
//     }
// }
// obj.myName();


// ex 6

// let bioData = {
//     myName : {
//        realName : 'Ankit Akhilesh Chauhan',
//        instaName : 'ankit.__.chauhan'
//     },
//     myAge : 26,
//     getData (){
//         console.log(`My name is ${this.myName.instaName} and my age is ${this.myAge}.`);
//     }
// }

// console.log(bioData.myName.realName);
// bioData.getData();

// **** Destructuring in ES6 ****

// => Array Destructuring

// const myBioData = ['Ankit','Chauhan',21];

// let myfName = myBioData[0];
// let mylName = myBioData[1];
// let myAge = myBioData[2];



// let [myfName, mylName, myAge] = myBioData;

// console.log(myAge);

// we can add value too

// let [myFName, myLName, myAge, myDegree ='Msc'] = myBioData;

// console.log(myDegree);

// Object Destructuring

// const myBioData = {
//     myFName : 'Ankit',
//     myLName : 'Chauhan',
//     myAge : 21
// }

// let age = myBioData.myAge;
// let myFName = myBioData.myFName;
// console.log(age);


// let {myFName, myLName, myAge, myDegree ='Msc'} = myBioData;
// console.log(myDegree);


// ** Object Properties**

// => we can now use Dynamic properties

// let myName = 'Ankit';
// const bioData = {
//     [myName] : 'Hello, how are you?',
//     26     : 'is my age'
// }

// console.log(bioData);

// => no Need to write key and value, if both are same

// let myName = 'Ankit';
// let myAge = '21';
// const bio = { myName , myAge }
// console.log(bio);


// Spread operator


// const myFriendsName = ['Ankit','Amit','Rohan','Ashish','Vishal','Anurag'];

// const newFriendsAdd = ['Ankit','Amit','Rohan','Ashish','Vishal','Anurag','Anuj','Rajesh'];

// insteed of this we can write 

// const newFriendVer = [...myFriendsName, 'Anuj', 'Rajesh'];

// console.log(newFriendVer);


// **ES7 Features** // 2016

// Array.prototype.include
// Exponentiation operator  

// **ES8 Features** // 2017

// String padding
// Object.values()
// Object.entries()


// string padding()
// const msg = 'My Name is Ankit';
// console.log(msg);
// console.log(msg.padStart(4));
// console.log(msg.padEnd(6));


// Object.values()

// const person = { name: 'Ankit', age: 21 };
// console.log(Object.values(person));

// Object.entries()

// const person = { name: 'Ankit', age: 21 }; 
// console.log(Object.entries(person));     // convert object into array



// ***ES9*** // 2018
// spread operator for object

// const person = { name: 'Ankit', age: 21, degree: 'MSC' };

// const sPerson = { ...person  }

// console.log(person);
// console.log(sPerson);

// ES10 // 2019

// Array.prototype.{Flat,flatMap}()

// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'],
//     ['zone_5', 'zone_6'],
//     ['zone_7', 'zone_8',['zone_7', 'zone_8'],['zone_7', 'zone_8'],['zone_7', 'zone_8'],'zone10']

// ];

// console.log(arr.flat());
// Object.fromEntries()


// const person = { name: 'Ankit', age: 21 }; 
// const arrObj = Object.entries(person);        // convert  agin Array into object


// console.log(Object.fromEntries(arrObj));

// **ES10** // 2020

// #1 bigInt

// let oldNum = Number.MAX_SAFE_INTEGER;

// console.log(oldNum);
// console.log(9007199254740991n + 12n);

// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);


// 2014
// "use strict";     // if we use "use strict" then we have to give variable to "x" otherwise you get error

// let x = 2.15;
// console.log(x);


// *********************** Advance JavaScript *******************************

// Advanced JavaScript Section 

// 1 : Event Propagation (Event Bubbling and Event Capturing)

// Check html file 

// 2 : Higher Order Function
// wo function jo dusare function ko as an argument accept karta hai use HOF 

// 3 : Callback Function 
// jis function ko hum kisi or function ke under as an argument passed karte hai
// then usko hum callback function bolte hai.


// we need to create a calculator

// const add = (a,b) => {
//     return a+b;
// }

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }

// const mult = (a,b) => {
//     return a*b;
// }


// const calculator = (num1,num2,operator) => {
//      return operator(num1,num2);
// }

// console.log(calculator(10,5,add));


// *****Asynchronous Java Script*****

// 1 : Hosting in JavaScript

// 2 : What is scope chain and Lexical Scoping in JavaScript?

// For Example

// let a = "Hellow guys. ";  // global scope

// const first = () => {
//    let b = " How are you.";

//      const second = () => {
//        let c = " Hii, I am fine thank you.";
//        console.log(a+b+c);
//     }
//     second();
// }
// first();


// 3 : What is Closures in JavaScript


// For Example 

// const outerFun = (a) => {
//      let b = 10;
//      const innerFun = () => {
//           let sum = a+b;
//           console.log(`The sum of the two no is ${sum}`);
//      }
//      return innerFun;
// }

// let checkClousure = outerFun(5);
// checkClousure();

// 4 **** Synchronous JavaScript prog vs Asynchronous JavaScript prog 

// Synchronous JavaScript prog 

// const Fun2 = () => {
//     console.log("function 2 is calling");
// }

// const Fun1 = () => {
//     console.log("function 1 is calling");
//     Fun2();
//     console.log("function 1 is calling again");
// }
// Fun1();

// Asynchronus JavaScript Prog


// const Fun2 = () => {
//     setTimeout(() => {
//         console.log("function 2 is calling");
//     }, 2000);
// }

// const Fun1 = () => {
//     console.log("function 1 is calling");
//     Fun2();
//     console.log("function 1 is calling again");
// }

// Fun1();


// 6 What is event loop in javaScript?


// ****Back to Advanced JavaScript****

// 7 : Function Currying

// function sum(num1){
//     // console.log(num1);
//     return function(num2){
//     // console.log(num1,num2);
//     return function(num3){
//        console.log(num1+num2+num3); 
//     }
//     }
// }
// sum(5)(3)(8);

// using fat arrow function

// const sum = (num1) => (num2 )=> (num3)=> console.log(num1+num2+num3);


// sum(5)(3)(8);

// callBack Hell

// setTimeout(() => {
//     console.log(`1 Works is done`);
//     setTimeout(() => {
//         console.log(`2 Works is done`);
//         setTimeout(() => {
//             console.log(`3 Works is done`);
//             setTimeout(() => {
//                 console.log(`4 Works is done`);
//                 setTimeout(() => {
//                     console.log(`5 Works is done`);
//                 }, 1000);
                
//             }, 1000);
            
//         }, 1000);
        
//     }, 1000);
    
// }, 1000);


// *********************BONUS JSON****************************************

// JSON.stringify turns a JavaScript object into a JSON text and stores that JSONtext in a string, eg:


// var my_object = {key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);
// console.log(object_as_string);
// typeof(object_as_string);


// JSON.parse turns a string of a JSON text into a JavaScript object, eg:


// var object_as_string_as_object = JSON.parse(object_as_string);
// console.log(object_as_string_as_object);
























































































































































































































































































































































































































































































































































































  





































































































































































    






 









 


































































