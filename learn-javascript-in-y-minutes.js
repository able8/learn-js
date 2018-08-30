// https://learnxinyminutes.com/docs/zh-cn/javascript-cn/

/* Javascript 于 1995 年由网景公司的 Brendan Eich 发明。最初它作为一种简单的，用于开发网站的脚本语言而被发明出来，是用于开发复杂网站的 Java 的补充。但由于它与网页结合度很高并且在浏览器中得到内置的支持，所以在网页前端领域 Javascript 变得比 Java 更流行了。

不过，Javascript 不仅用于网页浏览器，一个名为 Node.js 的项目提供了面向 Google Chrome V8 引擎的独立运行时环境，它正在变得越来越流行。 */
// vscode 块注释快捷键  alt + shift + a

// 注释方式和c很像， 这是但行注释
/* 这是多行
注释 */

// 语句可以以分号结束
doStuff();

// ... 但是分号也可以省略，每当遇到一个新行时，分号自动插入(除了一些特殊情况)
dostuff()

// 因为这些特殊情况会导致意外的结果，所以我们保留分号。


//////////////////
// 1. 数字、字符串和操作符

// Javascript 只有一种数字类型，64位 双精度浮点数 double
// double 有52位表示尾数，足以精确存储大到 9✕10¹⁵ 的整数。
3; // = 3
1.5; // = 1.5

// 所有基本的算数运算都如你预期
1 + 1; // = 2
0.1 + 0.2; // 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

// 包括无法整除的除法
5 / 2; // = 2.5
10 / 3; // 3.3333333333333335

// 位运算也和其它语言一样
1 << 2; // 4

// 括号可以决定优先级
(1 + 3) * 2; // 8

// 有三种非数字的数字类型
Infinity; // 1 / 0 的结果
-Infinity; // -1 / 0 的结果
NaN; // 0 / 0 的结果
1 / 0
- 1 / 0
0 / 0

// 布尔值
true;
false;

// 通过单引号或双引号来构件字符串
'abc'
"Hello, world";

// 用！来取非
!true; // false
!false; // true

// 相等 ===
1 === 1 // true
2 === 1 // false

// 不等 !==
1 !== 1;  // false
2 !== 1;  // true


// 使用“==”比较时会进行类型转换
"5" == 5; // true
null == undefined; // true

// 除非你用 ===
"5" === 5; // false
null === undefined; // false

// 会导致奇怪的行为
13 + !0; // 14
"13" + !0; // '13true'

// 还有两个特殊的值
null; // 用来刻意设置的空值
undefined; // 表示还没有设置的值，尽管undefined自身实际是一个值

// false, null, undefined, NaN, 0 和 "" 都是假，其它为逻辑真
// 注意 0 是逻辑假， “0”是逻辑真， 尽管 0 == ")"

// 更多比较操作符
1 < 10; // true
1 > 10; // false
2 <= 2; // true
2 >= 2; // true

// 字符串用+连接
"Hello " + "world!";

// 字符串也可以用 < 、> 比较
"a" < "b"; // true

// 用 charAt 获得字符串中的字符
"This is a string".charAt(0); // T

// 或使用 substring 来获得更大的部分
"Hello world".substring(0, 5); // "Hello"

// length 是一个属性， 所以不要使用()
"Hello".length; // 5

///////////////
// 2.变量、数组和对象

// 变量需要用 var 关键字声明，javascript 是动态类型语言，无需指定类型
var someVar = 5;

// 如果你的声明没有加var关键字，不会报错，变量在全局作用域创建
someOtherVar = 10;

// 没有被赋值的变量都会被设置为undefined
var someThirdVar; // undefined

someVar += 5;
someVar *= 10;

// 自增 自减
someVar++;
someVar--;

// 数组是任意类型组成的有序列表
var myArray = ["Hello", 45, true];

// 数组元素用方括号下标访问，索引从0开始
myArray[1]; // 45

// 数组时可变的，并拥有length属性
myArray.push('World');
myArray.length; // 4

// 在制定下吧添加／修改
myArray[3] = "Hello";

// javascript中的对象相当于其它语言重的 字典 或 映射， 键-值 对的无序集合
var myObj = { key1: "Hello", key2: "World" };

// 键是字符串，但如果键本身时合法的js标识符，则引号非必须的，值可以是任意类型
var myObj = { myKey: "myValue", "my other key": 4 }

// 对象属性的访问可以通过下标
myObj['my other key']; // 4

// 也可以用.如果属性时合法的标识符
myObj.myKey;

// 对象时可变的，值也可以被更改或增加新的键
myObj.myThirdKey = true;

// 如果值未定义，返回undefined
myObj.myFourthKey;

////////////
// 3. 逻辑与控制结构

// 本节介绍的语法于Java的语法几乎完全相同

var count = 1;

if (count == 3) {
    //..
} else if (count == 4) {
    //..
} else {
    //...
}

while (true) {
    // 无限循环
}

var input;
do {
    input = getInput();
} while (!isValid(input))

for (var i = 0; i < 5; i++){
    //..
}

if (house.sieze == "big" && house.colour == "blue") {
    house.contains = "bear";
}

if (colour == "red" || colour == "blue") {
    //...
}

//  && 和 || 是短路语句，它在设定初始化值时特别有用
var name = otherName || "default";

// switch 使用===检查相等性，每个结束需要break，否则继续向下执行
grade = 'B';
switch (grade) {
    case 'A':
        console.log('Great job');
        break;
    case 'B':
        console.log('Ok job');
        break;
    default:
        console.log('oy vey');
        break;
}

/////////
// 4. 函数、作用域、闭包

// 函数由 function 关键字定义
function myFunction(thing) {
    return thing.toUpperCase();
}
myFunction("foo");

// 注意返回值必须开始于 return 关键字的那一行， 否则由于自动的分号补齐，将返回 undefined
function myFunction()
{
    return // <- 分号自动插在这里
    {
        thisIsAn: "object litera"
    }
}
myFunction(); // undefined

// 函数也是对象，可以赋给变量，可以作为参数传递
function myFunction() {

}

setTimeout(myFunction, 5000);
// setTimeout 不是js语言的一部分，由浏览器和Node.js提供的

// 函数对象甚至不用声明名称，可以把一个函数定义写到另一个函数的参数中
setTimeout(function () {
    //
}, 5000);

// 函数有自己的作用域，而其他的代码块没有
if (true) {
    var i = 5;
}
i; // 5

// 这就导致人们常用 立即执行的匿名函数 的模式，避免临时变量扩散到全局作用域
(function () {
    var temporary = 5;
    // 我们访问修改全局对象 global object 来访问全局作用域
    window.permanent = 10;
})
temporary; // 抛出引用异常
parmanent; // 10

/* javascript 最强大的功能之一就是闭包。
如果一个函数在另一个函数中定义，内部函数就拥有外部函数的所有变量的访问权，
即使在外部函数结束之后 */
function sayHelloInFiveSeconds(name) {
    var prompt = "Hello, " + name + "!";
    // 内部函数默认是放在局部作用域的
    function inner() {
        alert(prompt);
    }
    setTimeout(inner, 5000);
    // setTimeout 是异步的，所以 sayHelloInFiveSeconds 函数会立即退出，
    // 而setTimeout 会在后面调用 inner
    // 由于 闭合包含，inner最终调用时仍然能够访问 prompt 变量
}
sayHelloInFiveSeconds("Able")

///////
// 5. 对象、构造函数与原型

// 对象可以包含方法
var myObj = {
    myFunc: function () {
        return "Hello world!";
    }
};
myObj.myFunc(); // "Hello world!"

// 当对象中的函数被调用时，这个函数可以通过 this 关键字访问其依附的这个对象
myObj = {
    myString: 'Hello world!',
    myFunc: function () {
        return this.myString;
    }
};
myObj.myFunc();

// 但这个函数访问的其实是其运行时环境，而非定义时环境，即取决于函数时如何调用的。
// 所以如何函数被调用时不在这个对象的上下文中，就不会运行成功了
var myFunc = myObj.myFunc;
myFunc(); // undefined

// 一个函数也可以被指定为一个对象的方法，并且可以通过 this 访问
// 这个对象的成员，即使在函数被定义时并没有衣服在对象上
var myOtherFunc = function () {
    return this.myString.toUpperCase();
}
myObj.myOtherFunc = myOtherFunc;
myObj.myOtherFunc();

// 当我们通过 call 和 apply 调用函数时，可以指定一个执行的上下文
var anotherFunc = function (s) {
    return this.myString + s;
}
anotherFunc.call(myObj, "Able")

// apply 函数几乎一行，只是要求一个array来传递 参数列表
anotherFunc.apply(myObj, ['Able']);

// 当一个函数接受一系列参数，而你想传入一个array时特别有用
Math.min(42, 5, 4);
Math.min([42, 5, 4]); // NaN
Math.min.apply(Math, [42, 5, 4]);

// 但是 call 和 apply 只是临时的，如果希望函数附在对象上，可以使用 bind
var boundFunc = anotherFunc.bind(myObj);
boundFunc('Able');

// bind 也可以用来部分应用一个函数  柯里化
var product = function (a, b) { return a * b; }
var doubler = product.bind(this, 2);
doubler(8); // 16


// 当你通过 new  关键字调用一个函数时，就会创建一个对象，
// 而且可以通过this关键字访问该函数，构造函数
var MyContructor = function () {
    this.myNumber = 5;
}
myNewObj = new MyContructor(); // = {myNumber: 5}
myNewObj.myNumber; // 5

// 每一个js对象都有一个 原型， 当你要访问一个实际对象中没有定义一个属性时，
// 解释器就回去找这个对象的原型
// 通过 __proto__ 属性访问一个对象的原型

var myObj = {
    myString: "Hello world!"
};
var myPrototype = {
    meaningOfLife: 42,
    myFunc: function () {
        return this.myString.toLowerCase()
    }
};

myObj.__proto__ = myPrototype;
myObj.meaningOfLife; // 42

// 函数也可以工作
myObj.myFunc();

//当访问的成员在原型中没定义时，解释器会去找原型的原型
myPrototypeo.__proto__ = {
    myBoolean: true
};
myObj.myBoolean; // true

// 没有对象的拷贝，实际时对原型对象的引用，改变原型会影响到以这个原型为原型的对象
myPrototype.meaningOfLife = 43;
myObj.meaningOfLife; // 43

// __proto__ 并非标准规定，实际也没有标准方法来修改一个已存在对象的原型
// 我们有两种方式为指定原型创建一个新的对象

// 方法一，Object.create, 最近才被添加到js中，不是所有js都有这个方法
var myObj = Object.create(myPrototype);
myObj.meaningOfLife; // 43

// 方法二，任意版本可用，不过要通过构造函数
// 构造函数有一个属性 prototype, 但它不是构造函数本身的原型，相反是通过构造函数和new关键字创建的新对象的原型
MyContructor.prototype = {
    myNumber: 5,
    getMyNumber: function () {
        return this.myNumber;
    }
};
var myNewObj2 = new MyContructor();
myNewObj2.getMyNumber() // 5
myNewObj2.myNumber = 6
myNewObj2.getMyNumber(); // 6

// 字符串和数字等内置类型也有通过构造函数来创建的包装类型
var myNumber = 12;
var myNewObj = new Number(12);
myNumber == myNewObj; // true

// 但是它们并非严格等价
typeof myNumber; // number
typeof myNumberObj; // object
myNumber === myNumberObj; // false
if (0) {
    // 代码不执行，因为0为假
}

// 包装类型和内置类型共享一个原型，所以你可以给内置类型增加功能，如对string
String.prototype.firstCharacter = function () {
    return this.charAt(0);
}
"abc".firstCharacter(); // a

// 常用在 代码填充，为老版本的js增加新版js的特性，这样就可以在老的浏览器中使用新功能了。 如 Object.crate并没有在所有版本中实现，我们可以通过 代码填充 来实现兼容
if (Object.create === undefined) { // 如果存在则不覆盖
    Object.create = function (proto) {
        // 用正确的原型来创建一个临时构造函数
        var Constructor = function () { };
        Constructor.prototype = proto;
        // 以后用它来创建一个新的对象
        return new Constructor();
    }
}

