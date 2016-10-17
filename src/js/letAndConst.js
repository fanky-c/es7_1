
/**
	需要注意的是，如果在严格模式下，函数只能在顶层作用域和函数内声明，
	其他情况（比如if代码块、循环代码块）的声明都会报错
**/

// 块级作用域
// {
// 	 let a = 1;
// 	 var b = 2;
// }
// alert(a) //a is not defined

// function f1() {
//   let n = 5;
//   if (true) {
//       let n = 10;
//   }
//   console.log(n); // 5
// }



//let不允许在相同作用域内，重复声明同一个变量。
// {
//     let a = 10;
//     var a = 1;
// }
// {
//     let a = 10;
//     let a = 1;
// }

//let不像var那样，会发生“变量提升”现象
// function b() {
//   alert(foo); //ReferenceError
//   let foo = 2;
// }
// b()

//下面代码在ES5中运行，会得到“I am inside!”，但是在ES6中运行，会得到“I am outside!”。es5变量提升,而ES6支持块级作用域，不管会不会进入if代码块，其内部声明的函数皆不会影响到作用域的外部
// function f() { console.log('I am outside!'); }
// (function () {
//   if(true) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//     f();
//   }

//   f();
// }())





//const的作用域与let命令相同：只在声明所在的块级作用域内有效。
// if (condition) {
//     const MAX = 5;
// }
// 常量MAX在此处不可得

//const声明的常量，也与let一样不可重复声明。
// const age = "Goodbye!";
// let age = 30;