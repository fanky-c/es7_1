import "babel-polyfill"

function *test(){
	  yield 'first times';
	  yield 'second times';
	  return 'over';
}

var generator = test();
console.log(generator.next()); //{value: "first times", done: false}
console.log(generator.next());  //{value: "second times", done: false}
console.log(generator.next());  //{value: "over", done: true}
console.log(generator.next());  //{value: undefined, done: true}


//yield语句 
/**
遍历器对象的next方法的运行逻辑如下。

（1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。

（3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

**/


//取出嵌套数组的所有成员
function* iterTree(tree) {
  if (Array.isArray(tree)) {
    for(let i=0; i < tree.length; i++) {
      yield* iterTree(tree[i]);
    }
  } else {
    yield tree;
  }
}

let tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let val of iterTree(tree)){
      console.log(val)
}




