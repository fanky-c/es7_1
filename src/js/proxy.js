/**
  var proxy = new Proxy(target, handler);
  Proxy对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。
  其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，
  handler参数也是一个对象，用来定制拦截行为   
**/

var proxy = new Proxy({},{
	  get:function(target, property){
	  	   return property;  //  target=object{} property=对象属性，
	  }
})
console.log(proxy.b);

/**
  get方法用于拦截某个属性的读取操作
**/
var person = {
	  name:'chao'
}
var proxy = new Proxy(person,{
	  get:function(target,property){
           if(property in target){
                return target[property]
           }else{
                throw new ReferenceError('property \"' + property + '\"does not exist.');
           }
	  }
})
console.log(proxy.name)
//proxy.age

//链式操作
// var pipe = (function(){
// 	  return function(value){
//          var funStack = [];
//          var proxy_o = new Proxy({},{
//          	   get:function(target,property){
//                     if(property === 'get'){
//                         return funStack.reduce(function(val,fn){
//                         	  return fn(val)
//                         },value)
//                     }
                    
//                     funStack.push(window[property]);
//                     return proxy_o;
//          	   }
//          })

//          return proxy_o;
// 	  }
// }())

// var double = (n) => n*2;
// var pow = (n) => n*n;
// var reverseInt = (n) => n.toString().split('').reverse().join('') || 0;

// console.log(reverseInt);

// var pipe = (function () {
//   return function (value) {
//     var funcStack = [];
//     var oproxy = new Proxy({} , {
//       get : function (pipeObject, fnName) {
//         if (fnName === 'get') {
//           return funcStack.reduce(function (val, fn) {
//             return fn(val);
//           },value);
//         }
//         funcStack.push(window[fnName]);
//         return oproxy;
//       }
//     });

//     return oproxy;
//   }
// }());

// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;

// pipe(3).double.pow.reverseInt.get; // 63

// const dom = new Proxy({}, {
//   get(target, property) {
//     return function(attrs = {}, ...children) {
//       const el = document.createElement(property);
//       for (let prop of Object.keys(attrs)) {
//         el.setAttribute(prop, attrs[prop]);
//       }
//       for (let child of children) {
//         if (typeof child === 'string') {
//           child = document.createTextNode(child);
//         }
//         el.appendChild(child);
//       }
//       return el;
//     }
//   }
// });

// const el = dom.div({},
//   'Hello, my name is ',
//   dom.a({href: '//example.com'}, 'Mark'),
//   '. I like:',
//   dom.ul({},
//     dom.li({}, 'The web'),
//     dom.li({}, 'Food'),
//     dom.li({}, '…actually that\'s it')
//   )
// );

// document.body.appendChild(el);

/*
  set方法用来拦截某个属性的赋值操作。 
**/

let validator = {
	 set:function(target,property,value){
         if(property === 'age'){
             if(!Number.isInteger(value)){
                  throw new TypeError('The age is not an integer');
                  return;
             }
             if(value > 200){
                  throw new TypeError('The age seems invalid');
                  return;
             }
                  console.log('符合年龄要求!')
         }

         target[property] = value;   
	 }
}

let p = new Proxy({},validator)
p.age = 100;
p.name = 'testName';
console.log(p.age)

/**
   has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，
   这个方法会生效。典型的操作就是in运算符 
**/