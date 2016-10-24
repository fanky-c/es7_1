/**
   es5集合数据：Array Object
   ES6新增：Map和Set
   Iterator的作用有三个：
   是为各种数据结构，提供一个统一的、简便的访问接口；
   二是使得数据结构的成员能够按某种次序排列；
   三是ES6创造了一种新的遍历命令for...of循环 
**/

var it = makeIterator(['a', 'b']);

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}

console.log(it.next())
console.log(it.next())
console.log(it.next())






/**
   for...of循环 
   for...of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象
   （比如arguments对象、DOM NodeList对象）、后文的Generator对象、以及字符串。   
**/

/**
  A:数组
**/

//for...in循环读取键名，for...of循环读取键值。
//如果要通过for...of循环，获取数组的索引，可以借助数组实例的entries方法和keys方法
// var arr = ['red', 'green', 'blue'];
// for(let i in arr){
//     console.log('forIn:'+i)  //0,1,2
// }
// for (let a of arr) {
//     console.log(a); // a b c d
// }



/**
  B:某些类似数组的对象(arguments\document.querySelector(nodeList))
**/

// function arrayLike (){
// 	  for(let i of arguments){
//           console.log(i)
// 	  }
// }
// arrayLike(1,'nnnn');


//并不是所有类似数组的对象都具有iterator接口，
//一个简便的解决方法，就是使用Array.from方法将其转为数组
// var arrayLike = { length: 2, 0: 'a', 1: 'b' };
// for(let [key,value] of Array.from(arrayLike)){
//      console.log(key)
// }


/**
  C:字符串
**/
// var str = 'i love zhaochao';
// for(let i of str){
//     console.log(i)
// }


/**
  D:对于普通的对象，for...of结构不能直接使用，会报错，
  必须部署了iterator接口后才能使用。
  但是，这样情况下，for...in循环依然可以用来遍历键名
**/

var objList = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

for(let i in objList){
    console.log(i,objList[i])
}

for (let key of Object.keys(objList)) {
  console.log(key + ": " + objList[key]);
}