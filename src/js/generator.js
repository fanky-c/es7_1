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

// function* iterTree(tree) {
//   if (Array.isArray(tree)) {
//     for(let i=0; i < tree.length; i++) {
//       yield* iterTree(tree[i]);
//     }
//   } else {
//     yield tree;
//   }
// }

// let tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

// for(let val of iterTree(tree)){
//       console.log(val)
// }



// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历

function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// 下面生成二叉树
function make(array) {
  // 判断是否为叶节点
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
  result.push(node);
}

console.log(result)


//Generator与状态机 


//es5
let ticking = true;
let clock = function() {
  if (ticking)
    console.log('Tick!');
  else
    console.log('Tock!');
    ticking = !ticking;
}
clock()
clock()
clock()
clock()

//es6
function*clockes6() {
  while (true) {
    console.log('---Tick!');
    yield; 
    console.log('---Tock!');
    yield; 
  }
};

clockes6().next();
clockes6().next();
clockes6().next();
clockes6().next();



//异步操作的同步化表达 

function* loadUI() {
  showLoadingScreen();
  yield loadUIDataAsynchronously();
  hideLoadingScreen();
 
}

function showLoadingScreen(){
	  console.log('显示登录页ui');
}
function loadUIDataAsynchronously(){
	    console.log('加载数据');
}
function hideLoadingScreen(){
	  console.log('隐藏登录页ui');
}
var loader = loadUI();

// 加载UI
loader.next()

// 卸载UI
loader.next()



