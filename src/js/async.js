/**
    ES6:
		回调函数 ==> fs.readFile('fileName',callBack)
		事件监听
		发布/订阅
		Promise 对象 


	ES7:
	    Async函数  
**/
import "babel-polyfill";

async function f() {
  return 'hello world';
}

// async function testReturn(){
// 	  return 'hello world';
// }

// testReturn().then((v) =>{
// 	  console.log(v)
// })