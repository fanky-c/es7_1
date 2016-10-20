//1,字符的Unicode表示法 


//JavaScript允许采用\uxxxx形式表示一个字符，其中“xxxx”表示字符的码点。
//这种表示法只限于\u0000——\uFFFF之间的字符
//超出这个范围的字符，必须用两个双字节的形式表达。
// let a = "\u0061"; //没超过范围
// let str = "\uD842\uDFB7"; //超过范围双字节的形式表达
// console.log(a); //a
// console.log(str);//𠮷
//ES6对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
// let str1 = "\u{20BB7}";
// console.log(str1) //𠮷
// console.log("\u{41}\u{42}\u{43}"); //ABC
// console.log('\u{1F680}' === '\uD83D\uDE80'); //true


//1,字符的Unicode表示法 

//codePointAt(),
//JavaScript内部，字符以UTF-16的格式储存，每个字符固定为2个字节。
//对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。 
// var s = "𠮷";
// console.log(s.length);  //2
// console.log(s.charAt(0));
// console.log(s.charCodeAt(0)) //55362 (UTF-16编码为0xD842 0xDFB7（十进制为55362 57271）)
// console.log(s.codePointAt(0));  //codePointAt方法会正确返回32位的UTF-16字符的码点。对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同

//for...of循环遍历。
// for (let codePoint of 'foo') {
//    console.log(codePoint)
// }

//at() 这个方法可以通过垫片库实现
// console.warn('abc'.charAt(0)) // "a"
// console.warn('𠮷'.charAt(0)) // "𠮷"
// console.log('𠮷'.at(0)) // "𠮷"  这个方法可以通过垫片库实现。


//repeat() repeat方法返回一个新字符串，表示将原字符串重复n次。
// console.log('zhaochao'.repeat(2)) //zhaochaozhaochao

//ES7 padStart()，padEnd()如果某个字符串不够指定长度，会在头部或尾部补全。
//padStart用于头部补全，padEnd用于尾部补全。
//console.log('x'.padStart(5, 'ab'))



//ES6模板字符串
//模板字符串（template string）是增强版的字符串，用反引号（`）标识。
//它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
let basket = {
	count: 'FFFF',
	onSale: 'hahahhh'  
}
// document.getElementById('testDom').innerHTML = `
//   There are <b>${basket.count}</b> items
//    in your basket, <b>${basket.onSale}</b>
//   are on sale!`;

//返回第一个满足条件的元素。
// document.querySelector('div.testString').innerHTML = `
//   There are <b>${basket.count}</b> items
//    in your basket, <b>${basket.onSale}</b>
//   are on sale!`;


//该方法返回所有满足条件的元素，结果是个nodeList集合
// var dom = document.querySelectorAll('.testString');
// dom[0].innerHTML = `
//   There are <b>${basket.count}</b> items
//    in your basket, <b>${basket.onSale}</b>
//   are on sale!`; 




// 普通字符串(转义字符)
// console.log(`In \` JavaScript '\n' is a line-feed.`)

// 多行字符串
// console.log(`string text line 1
// string text line 2`);

// 字符串中嵌入变量
// var name = "Bob", time = "today";
// console.log(`Hello ${name}, how are you ${time}?`)