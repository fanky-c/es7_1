//变量的解构赋值

//A:数组的解构赋值
// let [a,b,c] = [1,2,'y'];
// alert(c)

// let [foo, [[bar], baz]] = [1, [[2], 3]];
// alert(baz)

//let [,,third] = ["foo", "bar", "baz"];
//console.log(third)

//let  [head, ...tail] = [1, 2, 3, 4];
//console.log(tail)

//let [x, y='b'] = ['a'];   //允许默认值
//console.log(x,y)



//B:对象的解构赋值(数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值)

//let { bar, foo } = { foo: "aaa", bar: "bbb" };
//console.log(bar)


// var { p : [x, { y }] } = {
//   p: [
//     "Hello",
//     { y: "World" }
//   ]
// };

// console.log(y)  //注意，这时p是模式，不是变量，因此不会被赋值。


//用途 

//（1）交换变量的值  ==> [x, y] = [y, x];

//（2）从函数返回多个值
// 返回一个数组
// function example() {
//     return [1, 2, 3,4];
// }
// var [a, b, c] = example();
// alert(c)

// 返回一个对象
// function example() {
//   return {
//     foo: 'foo',
//     bar: 'bar'
//   };
// }
// var { bar, foo } = example();
// alert(foo)
// alert(foo1) //foo1 is not defined

//（3）函数参数的定义


//（4）函数参数的默认值
// jQuery.ajax = function(url, {
// 	async = true,
// 	beforeSend = function() {},
// 	cache = true,
// 	complete = function() {},
// 	crossDomain = false,
// 	global = true
// }) {
// 	// ... do stuff
// };


//（5）遍历Map结构
// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// 获取键名
// for (let [key] of map) {
//   // ...
// }

// 获取键值
// for (let [,value] of map) {
//   // ...
// }


//（6）输入模块的指定方法
//const { SourceMapConsumer, SourceNode } = require("source-map");

