// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// The output will be:I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// Exercise 2: Display Student Info
// // Instructions
// function displayStudentInfo(objUser){
    //destructuring
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'


function displayStudentInfo(objUser){
    const {first, last} = objUser;
    return(`Your full name is ${first} ${last}`)

}
displayStudentInfo({first: 'Elie', last:'Schoppik'});



// Exercise 3: User & Id
// Instructions
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 }

const entries = Object.entries(users);
console.log(entries);

const newUsers = entries.map((element, index) => [element[0], Number(element[1]*2)]);
console.log(newUsers);


// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// The output will be object, because we created a new object memeber and we need to know the type of member.




// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


  // 2

//   This constructor will successfully extend the Dog class
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

const newLabrador = new Labrador("Sparky","big")
console.log(newLabrador);



//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };



// Exercise 6 : Challenges
// Evaluate these (ie True or False)

// [2] === [2] //false
// {} === {} //false


// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5}; 

object1.number = 4;
console.log(object2.number) //the value of the property number equals 4, because object1 === object2
console.log(object3.number) //the value of the property number equals 4, because object1 === object3
console.log(object4.number)//the value of the property number equals 5, because object1 != object3, it has another reference.


// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color){
        this.nameAnimal = name;
        this.typeAnimal = type;
        this.colorAnimal = color;
    }
}
// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(nameAnimal, typeAnimal, colorAnimal, sound){
        super(nameAnimal, typeAnimal, colorAnimal) 
        //super calling constructor of the parent
        this.soundAnimal = sound;
    }

    sound (soundAnimal) {
        console.log(`${this.soundAnimal} I am a ${this.typeAnimal}, named ${this.nameAnimal} and I'm ${this.colorAnimal},`)
    }
}

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white


const farmerCow = new Mamal('Sweetie', 'cow', 'brown', 'Mooooo')
farmerCow.sound();

const domesticCat = new Mamal('Whisky', 'cat', 'black and white', 'Myaoooo')
domesticCat.sound();
