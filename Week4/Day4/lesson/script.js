// Exercise1
// Part I
// What does the following code return/print?

const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
const {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846




// Part II
// What does the following code return/print? - REST

let planetFacts = {
  numPlanetsTwo: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanetsTwo, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?
// {
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
// }




// Exercise3
// Modify the code below, and destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)
function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

function getDetails(hero) {
    const {name, house, goodstudent} = hero;
	console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})


// Exercise4
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : name, house, friendName and age)

function getMoreDetails({name, house, friend : {friendName, age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{
                name: 'Hermione Granger', 
			    house: 'Gryfindor', 
                friend :  {
                    friendName : 'Harry Potter', 
                    age : 20
                }
			})

// Exercise5
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)

const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails({first:firstname, last:lastname, housesLocation : [locationOne, locationTwo], houses : {value:valueHouses}}){
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)
}

getElonMuskDetails(elonPerson)



// Exercise 1

// Part I
// Create a TV class with 3 parameters : brand, channel and volume Channel should be 1 by default. Volume should be 50 by default.
// Create attributes brandTV, channelTV and volumeTV equal to the 3 parameters value.
// Add methods to increase and decrease volume. When the methods are called it will increase or decrease the volume by 1.
// Create an object for the LG TV
// Call the inscrease method, and check if the volume changed


class Tv {
    constructor(brand, channel=1, volume=50){
        this.brandTv = brand;
        this.channelTv = channel;
        this.volumeTv = volume;
    }

    increaseVolume () {
        this.volumeTv += 1;
    }

    decreaseVolume () {
        this.volumeTv -= 1;
    }
}

const lgTV = new Tv("LG", 3, 20);
lgTV.increaseVolume()
console.log(lgTV.volumeTv);


// Part II
// Create a subclass  Smart TV of TV
// It overrides the method increase, so it increase the volume by 10 and not by 1
// Add a attribute of Netflix that should be equal to true by default

class SmartTv extends Tv {
    constructor(brandSmartTv, channelSmartTv, volumeSmartTv, isnetflix = true){
        super(brandSmartTv, channelSmartTv, volumeSmartTv) 
        //super calling constructor of the parent
        this.netflix = isnetflix;
    }

    increaseVolume () {
        this.volumeTv += 10;
    }
}

const samsungSmart = new SmartTv("Samsung", 12, 70)
samsungSmart.increaseVolume()
console.log(samsungSmart.volumeTv);