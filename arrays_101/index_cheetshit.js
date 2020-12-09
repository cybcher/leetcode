// Math Eng
// Addition.
// 35+87=122 - Thirty-five plus eighty-seven equals one hundred and twenty-two
// Сума, відповідь  – product
// Доданок – the sum of
// Додавання – addition

// Subtraction
// 6-5=1 - Six minus five equals one, 9-0=9 - Subtracting zero from nine leaves nine
// Віднімання – subtraction
// Зменшуване – minuend
// Від’ємник – subtrahend
// Різниця – difference; remainder

// Division
// 12÷4=3 - Twelve divided by four is equal to three
// Ділення – division
// Ділене – divisor
// Дільник – denominator

// Multiplication
// 11x20=220 - Eleven multiplied by twenty gives you the sum of two hundred and twenty
// Множення – multiplication
// Множник – multiplicand
// Добуток - product

// Остача від ділення - module

// OOP
// Encapsulation, private/public/protected
// Inheritance, In Java, it is possible to inherit attributes and methods from one class to another. We group the "inheritance concept" into two categories:
//      subclass, supperclass
// Polymorphism, overiding
// Abstraction
// Java
// Benefits:
// - OOP is faster and easier to execute
// - OOP provides a clear structure for the programs
// - OOP helps to keep the Java code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
// - OOP makes it possible to create full reusable applications with less code and shorter development time
// Tip: The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it

// Javasctipt
// JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP)
// But as I mentioned, JavaScript isn't a classed-based langauge – it's is a prototype-based langauge.

// SOLID
// DRY
// public private protected
// final

// reverse whole array
// sort values in the array
// save position
// repeat again 
// 

// Global functions
eval();                     // executes a string as if it was script code
String(23);                 // return string from number
(23).toString();            // return string from number
Number("23");               // return number from string
decodeURI(enc);             // decode URI. Result: "my page.asp"
encodeURI(uri);             // encode URI. Result: "my%page.asp"
decodeURIComponent(enc);    // decode a URI component
encodeURIComponent(uri);    // encode a URI component
isFinite();                 // is variable a finite, legal number
isNaN();                    // is variable an illegal number
parseFloat();               // returns floating point number of string
parseInt();                 // parses a string and returns an integer

// Number
var pi = 3.141;
pi.toFixed(0);          // returns 3
pi.toFixed(2);          // returns 3.14 - for working with money
pi.toPrecision(2)       // returns 3.1
pi.valueOf();           // returns number
Number(true);           // converts to number
Number(new Date())      // number of milliseconds since 1970
parseInt("3 months");   // returns the first number: 3
parseFloat("3.5 days"); // returns 3.5
Number.MAX_VALUE        // largest possible JS number
Number.MIN_VALUE        // smallest possible JS number
Number.NEGATIVE_INFINITY// -Infinity
Number.POSITIVE_INFINITY// Infinity
var pi = Math.PI;       // 3.141592653589793
Math.round(4.4);        // = 4 - rounded
Math.round(4.5);        // = 5
Math.pow(2,8);          // = 256 - 2 to the power of 8
Math.sqrt(49);          // = 7 - square root 
Math.abs(-3.14);        // = 3.14 - absolute, positive value
Math.ceil(3.14);        // = 4 - rounded up
Math.floor(3.99);       // = 3 - rounded down
Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.min(0, 3, -2, 2);  // = -2 - the lowest value
Math.max(0, 3, -2, 2);  // = 3 - the highest value
Math.log(1);            // = 0 natural logarithm 
Math.exp(1);            // = 2.7182pow(E,x)
Math.random();          // random number between 0 and 1
Math.floor(Math.random() * 5) + 1;  // random integer, from 1 to 5

// String
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
128.toString(16);               // number to hex(16), octal (8) or binary (2)

"hello".repeat(3)
"hello".includes("ll")
"hello".startsWith("he")
"hello".padStart(8) // "   hello"
"hello".padEnd(8) // "hello   " 
"hello".padEnd(8, '!') // hello!!!
"\u1E9B\u0323".normalize("NFC")


var str = '{"names":[' +                    // crate JSON object
'{"first":"Hakuna","lastN":"Matata" },' +
'{"first":"Jane","lastN":"Doe" },' +
'{"first":"Air","last":"Jordan" }]}';
obj = JSON.parse(str);                      // parse
document.write(obj.names[1].first);         // access
// Send
var myObj = { "name":"Jane", "age":18, "city":"Chicago" };  // create object
var myJSON = JSON.stringify(myObj);                         // stringify
window.location = "demo.php?x=" + myJSON;                   // send to php
// Storing and retrieving
myObj = { "name":"Jane", "age":18, "city":"Chicago" };
myJSON = JSON.stringify(myObj);                 // storing data
localStorage.setItem("testJSON", myJSON);   
text = localStorage.getItem("testJSON");        // retrieving data 
obj = JSON.parse(text);
document.write(obj.name);

// Arrays
list = [a,b,c,d,e]
list[1]                 // → b
list.indexOf(b)         // → 1
// Subsets
// Immutable
list.slice(0,1)         // → [a        ]
list.slice(1)           // → [  b,c,d,e]
list.slice(1,2)         // → [  b      ]
// Mutative
re = list.splice(1)     // re = [b,c,d,e]  list == [a]
re = list.splice(1,2)   // re = [b,c]      list == [a,d,e]
// Adding items
// Immutable
list.concat([X,Y])      // → [_,_,_,_,_,X,Y]
// Mutative
list.push(X)            // list == [_,_,_,_,_,X]
list.unshift(X)         // list == [X,_,_,_,_,_]
list.splice(2, 0, X)    // list == [_,_,X,_,_,_]
// Inserting
// after -- [_,_,REF,NEW,_,_]
list.splice(list.indexOf(REF)+1, 0, NEW)
// before -- [_,_,NEW,REF,_,_]
list.splice(list.indexOf(REF), 0, NEW)
// Replace items
list.splice(2, 1, X)    // list == [a,b,X,d,e]
// Removing items
list.pop()              // → e    list == [a,b,c,d]
list.shift()            // → a    list == [b,c,d,e]
list.splice(2, 1)       // → [c]  list == [a,b,d,e]
// Object  iterable
//Iterables
.filter(n => {})    // => array
.find(n => {})      // es6
.findIndex({})      // es6
.every(n => {})     // => Boolean // ie9+
.some(n => {})      // => Boolean   // ie9+
.map(n => {})       // ie9+
.reduce((total, n) => total) // ie9+
.reduceRight({}) //

// Date
// Now
new Date()
// ms since epoch
new Date(1419785527580)
// Date format
new Date("May 17, 1995 03:24:00")
// ISO date format
new Date("2013-03-01T01:10:00")
new Date(2014, 2, 1, 13, 0, 59, 0)
// Constructor
new Date(2014, 2, 1, 13, 0, 59, 0)
// Date({Year}, {Month}, {Day}, {Hour}, {Min}, {Sec}, {Milli})
// Months are zero-indexed (eg, January is 0).

// Conversion
d.toString()	        // "Mon Dec 29 2014 00:58:28 GMT+0800 (PHT)"
d.toTimeString()	    // "00:58:46 GMT+0800 (PHT)"
d.toUTCString()	        // "Sun, 28 Dec 2014 16:58:59 GMT"
d.toDateString()	    // "Thu Jan 10 2013"
d.toISOString()	        // "2013-01-09T16:00:00.000Z"
d.toLocaleString()	    // "12/29/2014, 12:57:31 AM"
d.toLocaleTimeString()	// "12:57:31 AM"
d.getTime()	            // 1419785527580

// Accessing
// Getters
.getDate()	            //  1..31
.getDay()	            //  0..6 (sun..sat)
.getFullYear()	        //  2014
.getMonth()	            //  0..11
.getHours()	 
.getMinutes()	 
.getSeconds()	 
.getMilliseconds()	 
.getTime()	            //  ms since epoch
.getTimezoneOffset()	 
// UTC versions are also available (eg, .getUTCDate(), .getUTCDay(), etc).
// Setters
.setDate (val)	 
.setDay (val)	 
.setFullYear (val)	 
.setMonth (val)	 
.setHours (val)	 
.setMinutes (val)	 
.setSeconds (val)	 
.setMilliseconds (val)	 
.setTime (val)	 
.setTimezoneOffset (val)	 
// See the getters list.

// Operators
// + - * / %
// BitWise
&	// AND 	 5 & 1 (0101 & 0001)	                    1 (1)
|	// OR 	 5 | 1 (0101 | 0001)	                    5 (101)
~	// NOT 	 ~ 5 (~0101)	                            10 (1010)
^	// XOR 	 5 ^ 1 (0101 ^ 0001)	                    4 (100)
<<	// left shift 	 5 << 1 (0101 << 1)	                10 (1010)
>>	// right shift 	 5 >> 1 (0101 >> 1)	                2 (10)
>>>	// zero fill right shift 	 5 >>> 1 (0101 >>> 1)	2 (10)

// Arithmetic
a * (b + c)         // grouping
person.age          // member
person[age]         // member
!(a == b)           // logical not
a != b              // not equal
typeof a            // type (number, object, function...)
x << 2  x >> 3      // minary shifting
a = b               // assignment
a == b              // equals
a != b              // unequal
a === b             // strict equal
a !== b             // strict unequal
a < b   a > b       // less and greater than
a <= b  a >= b      // less or equal, greater or eq
a += b              // a = a + b (works with - * %...)
a && b              // logical and
a || b              // logical or

// AAlgorithms
// O(n)
function addUpToSimple(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

// O(1)
function addUpComplex(n) {
    return (n * (n + 1)) / 2;
}

// O(n): maybe thinking O(2n) but we see big picture! BigONotation doesn't care about precision only about general trends linear? quadric? constant?
function printUpAndDown(n) {
    console.log("Going up");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("Going down");
    for (let j = n - 1; j > 0; j--) {
        console.log(j);
    }
}

// O(n^2)
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
        for (let j = 0; j < n; j++) {
            console.log(j);
        }
    }
}

// O(n) : cuz as soon as n grows complexity grows too
function logAtLeastFive(n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// O(1)
function logAtMostFive(n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
