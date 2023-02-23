//data structure we worked with here is object 
//Typically created an object with curly braces {}; and in there we have { key: value } pairs
//A key value pair is also called a "property" or "field" of the object

const person = {
    name: 'somesh',
    age: 24
};
console.log(person)

// objects allow us to group data together, we can have function in there as well
//example
const secondPerson = {
    name: 'max',
    age: 25,
    //here we can add function as well
    greet() {
        //this keyword refer to this current object in here secondPerson
        console.log("Hello welcome "+ this.name);
    }

    // greet: () => {
    //     console.log("Hello welcome "+ this.name);
    // }
    //Not able to use this above arrow function, because in arrow function this refer to the global scope not for this object
    //it gives o/p like this "Hello welcome undefined"
};
//here also I can call greet method using this object
secondPerson.greet();