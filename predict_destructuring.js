//Question 1
const cars = ['Tesla', 'Mercedes', 'Honda'];
const [randomCar] = cars;
const [ , otherRandomCar] = cars;
// This does not have any errors. randomCar has a value of 'Tesla' and
// otherRandomCar has a value of 'Mercedes;

//Question 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const {name: otherName} = employee;
//This will give us an error in the first console.log since we never destructered 'name' from employee.
//The error should be about 'name' being undefined. otherName will have a value of Elon.

//Question 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword} = person;
//Our first console.log will display our password variable which is '12345'.
//Our second one will not give us an error however there is no value being assigned to hashedPassword since
//there is no key name of password in our person dictionary so our second console.log will just say undefined.

//Question 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; //2
const [, , , second] = numbers; //5
const [, , , , , , , , third] = numbers; //2
//There are no errors with our destructuring here since all const variables will have a value being copied from our numbers array.
//The output will be false for first==second and true for first==third.

//Question 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const {key} = lastTest;
const {secondKey} = lastTest;
const [ , willThisWork] = secondKey;
//All our variables are being desctructured correctly here. key has the value of 'value'. secondKey has the value of our array list
//[1, 5, 1, 8, 3, 3]. willThisWork has a value of 5 since we are skipping the first index on secondKey. 