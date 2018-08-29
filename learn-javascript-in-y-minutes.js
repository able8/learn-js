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