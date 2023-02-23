let userName = 'Somesh';
let userAge = 25;
//Using function keyword
const summarizeUser = function(userName, userAge){
    return 'my name is '+ userName + ' and age is ' + userAge
};
console.log(summarizeUser(userName, userAge));

//without using function keyword user =>
const addNumber = (a, b) => {
    return a+b;
};
console.log(addNumber(2,3));

//if only single expression no need to write return keyword 
const addTwoNumber = (a,b) => a+b;
console.log(addTwoNumber(4,5))

//If only single argument no need to use paranthesis ()
const oneNumber = a => a+1;
console.log(1);

//if there is no argument it must have paranthesis ()
const noArgument = () => 1+1;
console.log(noArgument());