//first class function

// var x = function firstClassFun(cb) {
//   return function y() {
    
//   }
// }

// x(function test(){})

//HOF & CBF

// function Hof(cb) {
//   console.log('hello')
//   function y() {
    
//   }
//   cb()
//   return y
// }
// Hof(function cb() {
//   console.log('hi')
// })

//pure

// function pure(a,b,c) {
//   console.log(a+b+c)
// }

// pure(1,2,3)

//impure

// function impure(a, b, c) {
//   var d = Math.random()*10
//   console.log(a+b+c+d)
// }
// impure(1,2,3)

//recursion function


// function factorial(n) {
//   console.log(n)
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// var result = factorial(5);
// console.log(result)

// IIFE

var a = 100;
( () => {
        var a = 100
    }
)()
console.log(first)
// console.log(b)

//Function currying

// without curry

// function a(a,b,c) {
//     console.log(a+b+c)
// }

// a(1, 2, 3)

//with curry

// function a(a) {
//     return function b(b) {
//         return function c(c) {
//             console.log(a+b+c)
//         }
//     }
// }

// a(1)(2)(3)

// without curry

// function calPrice(price, dis) {
//     var dis = price * dis
//     return dis
// }
// console.log(calPrice(1000, .1))
// console.log(calPrice(1000, .2))
// console.log(calPrice(1000, .3))
// console.log(calPrice(1000, .4))
// console.log(calPrice(1000, .5))


// with curry

// function calPrice(price) {
//     return function calDis(dis) {
//         var disAmount = price * dis
//         return disAmount
//     }
// }

// var calDis = calPrice(1000)

// console.log(calDis(.1))
// console.log(calDis(.2))
// console.log(calDis(.3))
// console.log(calDis(.4))
// console.log(calDis(.5))

//callback function


// function test(cb) {
//     cb()
// }

// test(function cb(){})












