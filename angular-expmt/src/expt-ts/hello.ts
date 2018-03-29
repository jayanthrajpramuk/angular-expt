/**
 * Created by a028515 on 21-03-2018.
 */
function logMessage(message) {
console.log(message);
}
let message = 'Hello TypeScript';
logMessage(message);

let count: number;
count = 9; // cannot change the datadtype of count

let numberTpe: number;
let stringType: string;
let dateType: string;
let booleanType: boolean;

let anyType: any[] = [1, 'String', true]; // check this out

enum color {
red = 0, blue = 1, green = 2, yellow = 3 // best practise to specify the value
}

let bgColor = color.blue;

let j;
j = 9;
j = 'Strongest Avenger';
j = true;

// concept of type assertions  during compile time.

let stringType2;
// stringType2. here u will not get the intellesence for string type  if the type is Any as
// nothing is defined in the begineing.
(<string>stringType2).toLowerCase(); // approach 1
(stringType2 as string).toLowerCase(); // approach 2

// point to be noted here is that the type will not be changed in memory. But its just compile
// time feature.


// Concept of arrow functions

let a = function (msg) {
console.log(msg);
};

let b = (msg) => {
  console.log(msg);
};

let b2 = msg => console.log(msg); // this can be used only if there is exactly 1 parameter and
// 1 lineimplementation

let b3 = msg => {
  console.log(msg);
  console.log('a' + msg);
};


let c = () => {
  console.log();
};

// inline annotation for method parameteres

let calculate = (p, t, r) => { // if there are more than 10 then this looks ugly
};

calculate(1, 2, 3);

let calculate4 = (options) => { // if there are more than 10 then this looks ugly
console.log(options.name);
};

calculate4({
name: 'Jay',
age: '30',
city: 'Bellary'
});

let calculate2 = (SI: {p: number, t: number, r: number}) => {
// we are making sure abt the type of param. but this is verbose and code duplication takes place
};

interface SI {
p: number;
t: number;
r: number;
}


let calculate3 = (SI: SI) => {
// this indicates usage of strong typing
};
