// console.log(x);
// var x=10;

// function.bind(thisArguments);

//example
// const john1 = {
//     name: 'John',
//     age: 24,
//   };
//   function greeting() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
//   const greetingJohn = greeting.bind(john1);
//   // Hi, I am John and I am 24 years old
//   greetingJohn();

//  const student={
//      name:"pavan",
//      age:"10"
//  };
//  //function.bind(thisArg);

//  function greet(h,i){
//      console.log(`${h},${i} ${this.name} and age ${this.age}`)
//  }
// greet.apply(student,["helo","im"]);

//call
//fun.call(thisArg,arg1,arg2....)

//fun.apply(thisArg,[arg1,arg2])
//  var n=10;
//  function x(a){
//     //  var a=10;
//      return function y(){
//         console.log(a)
//          return function z(){
//             console.log(a)
//          }
//      }
//     //  y();
//  }
// x(n)()();

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// x()();

// function greet() {
//     console.log('Hello world');
// }

// var t=setTimeout(greet, 1000);
// console.log('This message is shown first');

// program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }

// let intervalId = setTimeout(greet, 2000);
// console.log('Id: ' + intervalId);

// function showTime() {

//     // return new date and time
//     let dateTime= new Date();

//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();

//     console.log(time)

//     // display the time after 3 seconds
//      var id=setTimeout(showTime, 10000);
//      clearTimeout(id);
     
// }

// calling the function
// showTime();

// var son ={
//     this.father="x",
//    this. mother="y"
// }
// var s= new son()

// console.log(s)

// var obj = {
//    // name:  "vivek",
//     getName: function(){
//     console.log(this);
//   }
        
// }
        
// obj.getName();      
// var obj2 = {name:"akshay", getName };

// class Car {
//     constructor() {  // Constructor
//       this.carname ="Ford";
//     }
//   }
//   mycar = new Car();
// console.log(mycar)
  

