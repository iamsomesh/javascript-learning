const arr = ["abc", "xyz"];

//if I want to copy this array into another array

const arr1 = arr.slice(); //we can use slice method
console.log(arr1);

const copiedArray = [...arr] //[...followedbyarrayname], {...followedbyobjectname}
console.log(copiedArray); //it will copied array

const person = {
    name: "somesh",
    age: 25,
    hobbie: ["music", "sports"]
};
console.log(person);

//it will copied person object using spread operator
const copiedPerson = {...person};
console.log(copiedPerson);


//Spread and rest operator both looks similar "..." 3-dots

//rest operator

//here I expect three arguments but what if I pass 4 argument when calling the function it will not show any arrow or not showing last 4th one argument
//here i want to return an array which contain these arguments 
const toArray = (args1, args2, args3) =>{
    return [args1,args2, args3]
};
console.log(toArray(1,2,3,4)); //here i pass 4 arguments and this method only takes 3, so this is not flexible here

// what if i pass 4 arguments and it takes only threee it will through any array but it will not return the arguments we passed
//example
//here we don't need to mentioned the arguments how many we passed it takes accordig to what we passed using rest operator
const anotherArray = (...args) => { //*******merge argument into an array in function, what rest operator do
    return args; //not need to write [...args], because it (...args) automatically bundle up within the array for us
    //here args will be an array
};
console.log(anotherArray(1,2,3,4));