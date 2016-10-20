/**
   Array.from()
   方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象 
**/

// let arrayLike = {
// 	 '0':'a',
// 	 '1':'b',
//      '2':'c',
//      length: 3
// }

// //es5
// let reslut = [].slice.call(arrayLike);
// console.log(reslut)

// //es6
// let reslut1 = Array.from(arrayLike)
// console.log(reslut1)



//实际应用中，常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象。
//Array.from都可以将它们转为真正的数组。
// let ps = document.querySelectorAll('p');
// Array.from(ps).forEach(function (p) {
//   console.log(p);
// });

// // arguments对象
// function foo() {
//   var args = Array.from(arguments);
// }

const toArray = (() =>
  Array.from ? Array.from : obj => [].slice.call(obj)
)();


/**
    Array.of方法用于将一组值，转换为数组。
    [].slice.call()/Array.prototype.slice.call(arguments) ==> 能将具有length属性的对象转成数组
**/
//console.log(Array.of('1',5))   //['1',5]



/**
   数组实例的copyWithin(target,start,end)

	target（必需）：从该位置开始替换数据。
	start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
	end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。    
**/
// console.log([1,2,3,4,5].copyWithin(0,1))     //[2, 3, 4, 5, 5]
// console.log([1,2,3,4,5].copyWithin(4,1,3))   //[1, 2, 3, 4, 2]


/**
   数组实例的find()  用于找出第一个符合条件的数组成员
   findIndex()   返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
**/
// var res = [1,2,3,-5,-6].find((value, index, arr) => {
// 	  return value < 0
// })

// console.log(res);  //-5

// var res = [1,2,3,-5,-6].findIndex((value, index, arr) => {
// 	  return value < 0
// })

// console.log(res);  //3



/**
   keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
**/

for (let [key,value] of ['a', 'b','c'].entries()) {
  console.log(key);
}