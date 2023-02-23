//beside object array is also crucial data structure in js
// we can store any type of data inside array like string, number, boolean, object etc..

const arr = ["somesh", 24, true, { name: 'max', age: 34}];

//we are going use for of loop to iterate over each element
//here elements of arr iterate on each time into a
for(let a of arr){
    console.log(a); //it execute 4 times we have 4 elements into our arr
};


const hobbie = ["sports", "music"]
//map() allows us to transform an array and also map will return a new array, it will give us new one array 
console.log(hobbie.map(hobby => "hobby " + hobby));
console.log(hobbie) //just want to confirm it will not modified old one
