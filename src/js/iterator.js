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
   调用Iterator接口的场合 
**/