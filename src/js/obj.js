//ES6允许在对象之中，只写属性名，不写属性值。这时，属性值等于属性名所代表的变量

/**
   Object.prototype.toString.call()  检测数据类型
**/

function testObj(x='x',y='y'){
	 return {x,y};
}
console.log(testObj().x);

//除了属性简写，方法也可以简写
let age = 12;
let obj = {
	  method(){
	  	  return 'method';
	  },
	  name:'chao',
	  age
}
console.log(obj.age);


//ES5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。
//它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。
//Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
console.log(Object.is('foo','foo'));  //true
console.log(Object.is({},{})); //false

//兼容Object.is
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
})


/**
  Object.assign方法用于对象的合并，
  将源对象（source）的所有可枚举属性，复制到目标对象（target）
**/

var target = { a: 1 };
var source1 = { b: 2 };
var source2 = { c: 3 };

var assignObj = Object.assign(target, source1, source2);
console.log(assignObj)

//拷贝对象
const clone = (origin={}) => {
      return Object.assign({},origin);
}

//合并多个对象
const merge = (target,...sources) => {
     return Object.assign(target,...sources);
}