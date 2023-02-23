const person = {
    name: "somesh",
    age: 25,
    greet() {
        console.log("Hello welcome "+ this.name);
    }
};

//without destructuring
const printNameWithoutDestructure = (personData) => {
    console.log(personData.name);
};
printNameWithoutDestructure(person);

// destructuring
const printName = ({name, age}) => { //we can achieve destructuing using {name, age}, the specify the name of properties from the object inside the {}
    //from the person object I only interested in name and age not whole object, so I can use object destructuring
    // we can use for clearity what we need from the object I only need name so can use instead of whole incoming object
    console.log(name, age);
};
printName(person); //we have to pass person object as a argument into printName function

//also use object destructuring outside of function
const {name, age} = person;
console.log(name, age);

//***** array destructuring

const hobbies = ["sports", "music"];
const [hobby1, hooby2] = hobbies; //we can take what names we want, its takes from index not like for object, in object we need to specify which property need, like name, age
console.log(hobby1);