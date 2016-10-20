//默认值箭头函数
let test = (x = 5) =>{
	   console.log(x);
}

//箭头函数的一个用处是简化回调函数
//一般写法
console.log([1,4,2].map(function(x){
	  return x * 2;
}))

//箭头写法
console.log([1,4,2].map(x => x * 2));


//与解构赋值默认值结合使用 
let foo = (url,{x, y = 5}) => {
     console.log(x,y)
}

foo('',{x:1});


//rest参数(形式为“...变量名”)
//用于获取函数的多余参数，这样就不需要使用arguments对象了。
//rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

function add(...values){
    var sum = 0;
    for(let i of values){
         sum += i;
    }
    return sum;
}
console.log(add(1,2,3,4,5));

function sortNumbers(){
	  return Array.prototype.slice.call(arguments).sort(function(a,b){
            return a*1 - b*1;
	  });
}
console.log(sortNumbers(1,4,5,3,2,11));

const sortNumbers_1 = (...numbers) =>{
     return numbers.sort(function(a,b){
            return a*1 - b*1;
	  })
}
console.log(sortNumbers_1(1,4,5,3,2,11));


//替代数组的apply方法 

//es5
console.log(Math.max.apply(null,[1,3,10]));

//es6
console.log(Math.max(...[1,2,9]));


//实现了Iterator接口的对象

var nodeList = document.querySelectorAll('div');  //类数组
var array = [...nodeList];   //转为为真正数组  Array.from()

