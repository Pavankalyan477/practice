// var arr=[1,2,3,4];

// function sum(arr,n){

// }

// var result=arr.sum(2).multiple(2).sub(1);

// [2,4,5,6]=>[4,8,10,12]=>[3,7,9,11]

// constructor function
// function Person () {
//     this.arr = [1,2,3,4],
//     sum=function(){

//     }
// }

var o = {
  arr: [1, 2, 3, 4],
  sum: function (val) {
    for (var i = 0; i < this.arr.length; i++) {
      this.arr[i] = this.arr[i] + val;
    }
    //  var temp = this.arr;
    function multiple(v) {
      for (var i = 0; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i] * v;
      }
      //console.log(this.arr);
      return this.arr;
    }
    multiple()
  },
};
// console.log(o.multiple(2));
var result = o.sum(2).multiple(2);
console.log(result);

// // creating objects
// const person1 = new Person();
// const person2 = new Person();

// // adding property to constructor function
// Person.prototype.gender = 'male';

// // prototype value of Person
// console.log(Person.prototype);

// // inheriting the property from prototype
// console.log(person1.gender);
// console.log(person2.gender);

// var obj1={

// }
