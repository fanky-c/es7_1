/**
  ES6提供了新的数据结构Set。
  它类似于数组，但是成员的值都是唯一的，没有重复的值。
**/
// var s = new Set();
// [2,2,3,3,4].map(x => s.add(x));
// for (let i of s) {
//   console.log(i);
// }

/**
 add(value)：添加某个值，返回Set结构本身。
 delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 has(value)：返回一个布尔值，表示该值是否为Set的成员。
 clear()：清除所有成员，没有返回值。

**/
var s1 = new Set([1,1,2,2,3,3,4,5]);
s1.add(2).add(2);
console.log(s1,'size:'+s1.size)
console.log(s1.has(2))




/**
  Map 
**/

//Map转为数组
// let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
// console.log([...myMap])


//数组转为Map
// let myMaps = new Map([[true, 7], [{foo: 3}, ['abc']]])
// console.log(myMaps)

//Map转为对象(如果所有Map的键都是字符串，它可以转为对象。)
// const strMapToObj = (strMap) => {
//   let obj = Object.create(null);
//   for (let [k,v] of strMap) {
//     obj[k] = v;
//   }
//   return obj;	  
// }

// function strMapToObj(strMap) {
//   let obj = Object.create(null);
//   for (let [k,v] of strMap) {
//     obj[k] = v;
//   }
//   return obj;
// }

// let myMap = new Map().set('yes', true).set('no', false);
// console.log(strMapToObj(myMap))


//对象转为Map
// function objToStrMap(obj) {
//   let strMap = new Map();
//   for (let k of Object.keys(obj)) {
//     strMap.set(k, obj[k]);
//   }
//   return strMap;
// }
// console.log(objToStrMap({yes: true, no: false}))


//Map转为JSON
// function strMapToObj(strMap) {
//   let obj = Object.create(null);
//   for (let [k,v] of strMap) {
//     obj[k] = v;
//   }
//   return obj;
// }

// function strMapToJson(strMap) {
//   return JSON.stringify(strMapToObj(strMap));
// }
// let myMap = new Map().set('yes', true).set('no', false);
// console.log(strMapToJson(myMap))


//Map的键名有非字符串，这时可以选择转为数组JSON
// function mapToArrayJson(map) {
//   return JSON.stringify([...map]);
// }
// let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
// console.log(mapToArrayJson(myMap))



//JSON转为Map
function objToStrMap(obj) {
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k]);
  }
  return strMap;
}

// function jsonToStrMap(jsonStr) {
//   return objToStrMap(JSON.parse(jsonStr));
// }

// console.log(jsonToStrMap('{"yes":true,"no":false}'))


//有一种特殊情况，整个JSON就是一个数组，且每个数组成员本身，又是一个有两个成员的数组
function jsonToMap(jsonStr) {
  return new Map(JSON.parse(jsonStr));
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'))