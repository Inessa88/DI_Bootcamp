var addressNumber = 15;
var addressStreet = 'Herbert Samuel';
var country = 'Israel'

var globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;


console.log(globalAddress);

var birthYear = 1988;
var futureYear = 2023;
var age = futureYear - birthYear;
var sentence = `I will be ${age} in ${futureYear}`;
console.log(sentence);


const pets = ['cat', 'dog', 'fish','rabbit', 'cow'];
console.log(pets[1]);
pets.push('horse');
console.log(pets);
pets.splice(3,1);
console.log(pets);

