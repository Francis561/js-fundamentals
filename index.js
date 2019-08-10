// basic eror handling
const person = {
    firstName: 'Turinayo',
    lastName: 'Francis',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        if (typeof value !== 'string') 
            throw new Error('Value is not a string')

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
};
person.fullName = '333';
console.log(person);



// getters=> accessing the value of an object and setters=> changing the value of an object
const person = {
    firstName: 'Turinayo',
    lastName: 'Francis',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    }
};
person.fullName = 'Mo Salah';
console.log(person);

// arguments object in functions
function sum (){
    let total = 0;
    for (let value of arguments);
    total+=value;
    return total;
}
console.log(sum(1,2,3,4,5));

// type conversions 
converting to a string
foo.toString();

// // converting string to integer
Number.parseInt('55');

// // convert string to number
Number.parseFloat('55.99');

// // destucturing objects=> quick way of assigning objetcs to variables
let car = { id:5000, style: 'convertible'};
let {id, style } = car;
console.log(id, style);


// // method 2
let car = { id:5000, style: 'convertible'};
let id, style;
({id, style} = car);
console.log(id, style);

// // destucturing arrays=> quick way of assigning arrays to variables
// // method 1
let carIds = [1,2,5];
let [car1, car2, car3] = carIds;
console.log(car1, car2, car3);

// // method2
let carIds = [1,2,5];
let car1, remainingCars;
[car1, ...remainingCars] = carIds;
console.log(car1, remainingCars);

// // Method3
let carIds = [1,2,5];
let remainingCars;
[, ...remainingCars] = carIds;
 
console.log(remainingCars)

// //  Rest parameter=>allows a function to store multiple argumments in a single array
function sendCars(...carIds){
    carIds.forEach(id => console.log(id));;
}

sendCars('Monday', 1,2,3);
// blog exercise
let blog = {

    title:'hulk',
    body:'x',
    author:'frank',
    views:10,

    comments:[
        {author:'fedo', body:'titi'},
        {author:'fedi', body:'tita'},
    ],

    isLive:'true',   
}; 
console.log(blog);

// function sum(...prices){
//     return total = Array.isArray((a,b) => a+b);
    
// }
// console.log(sum(1,2,3,4)); 

// // mapping an array
const stuff = [1,-1,2,3];
const items = stuff
.filter(n => n >= 0)
.map(n => ({value: n}));
// .filter(obj => obj.value > 1);
console.log(items);

// // filtering elements of an array
const shit = [1,-3,5,6];
const filteredShit = shit.filter(s => s >=0);
console.log(filteredShit);

// // testing elemenst of an array
const elements = [-4,-3,-7,-1];
const allNegatives = elements.some(function(value){
    return value <= 0;
});
console.log(allNegatives);

// // sorting arrays with objects
const courses = [
    {id:1, name:'Node.js'},
    {id:2, name:'Javascript'},
];
courses.sort(function(a,b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(courses);


// // Sorting arrays with numbers or strings
const numbers = [2,3,4];
numbers.sort();
console.log(numbers);

// reversing arrays
numbers.reverse();
console.log(numbers);


// // Joining Arrays
const numbers = [1,2,3,4];
const parts = numbers.join(',');
console.log(joined);


// // iterating over an array
const numbers = [1,2,3];
for (let number of numbers)
console.log(number);
// // or 

// // spread operator which combines all the elements of the array
const combined = [...first, ...second];

// // combining array
const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second)
// slicing an array
const slice = combined.slice()

// // emptying an array
let numbers = [1,2,3,4];
let another = numbers; 
// soln 1
// numbers = [];=> works well incase u are not going to reference the numbers variable again

// // solution 2;
// numbers.length = 0;

// // removing elements in array
// end=> 
numbers.pop();
// beginning
numbers.shift();
// middle
//  numbers.splice(2,2) first is the index of the number, the next the numbers after that to be deleted
 

// // arrow functions
const coursesi = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

const coursey = coursesi.find(coursey => coursey.name === 'a');
console.log(coursey);


// // finding elements in an array(reference types)
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];
const course = courses.find(function(course){
    return course.name === 'a';

});
console.log(course);

// // finding elements in an array(primitivs)
const digits = [1,2,3,1,1,4];
console.log(digits.indexOf(1,3 ));
console.log(digits.lastIndexOf(1));

console.log(digits.indexOf(1) !== -1);
console.log(digits.includes(32));

//   adding objects to an array
 const numbers = [3,4];
//  at the end--
 numbers.push(5,6);
// // beginning
 number.unshift(1,2);
// // middle
 numbers.splice(2,0,'a','b')
 console.log(numbers);
//  number 2 represents the index of.......

// checking object equality using the constructor function
let address1 = new Addre('a', 'b', 'c');
let address2 = new Addre('a', 'b', 'c');
let address3 = address1;

console.log(areEqual(address1, address2));
console.log(areEqual(address1, address2));
console.log(areEqual(address1, address3));

function Addre(street,city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode =zipCode;
};

function areEqual(address1, address2) {
    return address1.street === address2.street &&
    address1.city === address2.city && 
    address1.zipCode === address2.zipCode; 

}
// // ============================================================

// // exercise 2(factory)
function addres(street,city, zipCode ){
    return {
        street,
        city,
        zipCode,
    };
    const myAddr = new Addre('a', 'b', 'c');
    console.log(myAddr);
}
const myAddress = addres('a', 'b', 'c');
console.log(myAddress);

// exercise 1
const address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};
function showAddress (address){
    for (let key in address)
    console.log(key, address[key]);
}
showAddress(address);


// // cloning an object
const circ = {
    radius:1,
    draw(){
        console.log('draw');
    }
};
// const telo = Object.assign({}, circ);
const telo = { ...circ };
 console.log(telo);


// // enumerating properties of an object
const circl = {
    radius:1,
    draw(){
        console.log('draw');
    }
};
for (let key in circl)
console.log(key, circl[key]);

for (let key of Object.keys(circl))
console.log(key);

for (let entry of Object.entries(circl))
console.log(entry);


// // constructor function
let addressi = new Address('a', 'b', 'c');
console.log(addressi);

 function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// // factory function
function createCircle(){
    return{
        radius,
        draw () {
            console.log('draw');
        }
    };
}
const myCircle = createCircle(4);

// // Factory function
let address = createAddress('a', 'b', 'c');
console.log(address);
function createAddress (street, city, zipCode){
    return{
        street,
        city,
        zipCode
    };
}

// const circle = {
//     radius: 1
// };
// circle.color = '8';
// circle.draw = function() {}

// console.log(circle);
    
    // Constructor Function
    function Circlel(radius){
        this.radius = radius;
        this.draw = function() {
            console.draw('draw')
        }
    }
    const circlel = new Circlel(1);
    

    // Factory Function
function createCircle(radius){
    return {
            radius,
            draw () {
            console.log('draw');
        }
    };
}

let circle1 = createCircle(3);
console.log(circle1);
let circle2 = createCircle(5);
console.log(circle2);

// // OBJECT ORIENTED PROGRAMMING (OOP)
// //Given the following functions
let radius = 1
let x = 1
let y = 1==> they are highly related, we can reference them in objetc literal notation

const circle = {
        radius: 1,
        location: {
                x: 1,
        y: 1
    },
    isInvisible: true,
    draw: function(){
            console.log('draw');
    }
};
circle.draw();


// // create a function that returns the sum of all the multiples of 3 
// // and 5 from 0 up to this limit
console.log(sum(10));
function sum(limit) {
      for (i = 0; i <= limit; i++)
    if (i % 3 === 0 || i % 5 === 0)  
    sum += i;
    return sum;
     
}

// // create a functon that when u pass an objetc thru it..it displays
// // those of type string

const movie = {
    title: 'a',
    releaseYear : 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);
function showProperties(obj) {
    for (let key in obj)
    if(typeof obj[key] === 'string')
    console.log(key, obj[key]);
}
 
// // count truthy exercise of elements in an array
const array =[0, null, undefined, '', 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
    if (value)
    count++;
    return count;
}
 

// // exercise
showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0)? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}

// //  number limit = 10
// // for eah number supplied u should indicate either odd or even
showNumbers(10);
console.log(showNumbers);

function showNumbers(limit){
    for (let i = 0; i < limit; i++) {
        if (i % 2 === 0)
        console.log('EVEN');
        else 
        console.log('ODD');
        console.log(i);
    }

}
// // Speed limit = 70;
// //  if car is driving ubder speed limit "okay message on the console"
// // for every 5km above the speed limit==> u get 1 point;
// // if a driver gets more than 12 points===> licence suspended

checkSpeeed(200);

function checkSpeeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit)
    console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12)
        console.log('Licence Suspended');
        else
        console.log('Points', points);

        return points;


    }
}


// // fizz buzz algorithm
let output = fizzBuzz(7);
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number')
       return 'Not a number';

    if  ((input % 3 === 0) && (input % 5 === 0))
       return 'FizzBuzz';
    
    if (input % 3 === 0)
       return 'Fizz';
    
    if  (input % 5 === 0)
        return 'Buzz';

    return input;
   
}


let measure = isLandscape(99, 99.7);
console.log(measure);

function isLandscape(width,height) {
    return (width > height);
}

let val = max(97,96);
console.log(val);

function max(a,b){
    if(a > b)
        console.log(a); 
        else console.log(b);
    
}


// // fizzbuzz algorithm
let dimension =max(44,
    67);
console.log(dimension);



function isLandscape(width, height){ 
    if (width > height)console.(true);
    else false; 
}

let number = max(887,888);
console.log(number); 

// function max(a,b){
//     return( a > b )? a : b;
// }

// // break and continue==break helps u in jumping out of a code
// // continue==>jumps you to the next iteration.
let i = 0;
while (i <=10 ){
    if (i===5) break;
    if ( i%2===0 ){
        i++;
        continue;
    }
    console.log(i);
    i++;
}

// // for-of-loop==>preferably the best when iterating over values in an array;
const colori = ['red','green','blue'];
for (let color of colori)
console.log(color);
 
// // for-in loop
// used t iterate over the valueof an object
const person = {
    name:'Turinayo',
    age: 30
};
for (let key in person )
console.log(key,person[key]);

// // u can use the for-in loop to iterate over an array but with the help of the bracket notation:

const colors = ['red','green','blue'];

for (let index in colors)
console.log(index, colors[index]);


// // do-while
// // similar to the while,though the condition and while xpression are declared@ the bottom of the iteration
let l = 0;
do {
    if(l % 2 !== 0) console.log(l);
    l++;
}while (l<=5);

// // while loop =>direct translation of the for loop:
// // initialised variabl is declared outside of the while expression
// // increment precedence at the bottom of the iteration
// // syntax
// let i = 0;
// while (i<=5){
//     if(i % 2 !== 0)
//     console.log(i);
//     i++;
// }

// // for loop
// first part is th initialsed variable,
// second part after termination is the condition,
// third part is the increment
for (let i=1; i<=5; i++ ){
    if(i % 2 !== 0)
console.log(i);
}

// // switch and case
// // e.g; i want to compare btween a guest and a use(u can also use if and else)
let role ='guest';
switch(role){
    case 'guest':
    console.log('Guest user');
    break;

case 'moderator':
console.log('Moderate User');
break;

default:
console.log('Unknown user');
}

let rol='';
if(rol === 'guest')
console.log('Guest User');
else if(rol ==='Moderate User')
console.log('Moderate User')
else
console.log('Unknown User');

// // hour
// // if hour is between 6am and 12pm: Goodmorning;
// // if its betwen 12pm and 6pm: good Afternoon!
// // otherwise: Good evening
let hour = 22;
if(hour >= 6 && hour <12) 
    console.log('Good morning!');
else if(hour >=12 && hour < 18)
    console.log('Good afteroon');
else
console.log('Good evening');

// // logicaloperators with Non-booleans
// // Falsy->xracters
// // undefined
// // null
// // 0
// // false
// // ''
// // NaN
// /*
let bestPlayer = 'Messi';
let betterPlayer = 'Ronaldo';
let got = bestPlayer || bettterPlayer;
console.log(got);
*/
// or
let bestPlayer = undefined;
let betterPlayer = 'Ronaldo';
let got = bestPlayer || betterPlayer;
console.log(got);


// // Not operator(!converts everything to th opposite)
let highiIncome = true;
let goodCreditiScore = true;
let eligibleForLoani = highiIncome || goodCreditiScore;
console.log('Eligible', eligibleForLoani);

let applicationRefused = !eligibleForLoani;
console.log('Application Refused', applicationRefused);

// // logical OR(||)
let higIncome = true;
let goodCrediScore = true;
let eligibleForLoan = higIncome || goodCrediScore;
console.log(eligibleForLoan);

// //logical operators
// // logical AND(&&)
// // returns true if both operands are true e,g
let highIncome = true;
let goodCreditScore = true;
let eligibleforLoan = highIncome && goodCreditScore;
console.log(eligibleforLoan);

console.log(true && true);
console.log(false && true);
console.log(true && false);

// ternary operator(conditional operator),
// if a student is to get a distinction in class,
// they should score above 80..(now just incase  i want to check
// one who passes is referred to as "sharp", the other duft
let marks = 75;
let passMark = marks >= 80 ? 'sharp' : 'duft';
console.log(passMark);


// equality operators
// strict equality (checks whether the values hv the same type and the same value)
console.log( 1===1);
console.log( '1'===1);

// lose equality(deoted by double equals)
console.log(1==1);
console.log('1'==1);
console.log(false==1);


// comparison operators;the result of such expressions is usally a boolean
let f = 1;
console.log(f > 0);
console.log(f >= 1);
console.log(f <= 1);
console.log(f <1 );

// comparison operators can also be tested for unquality or equality
console.log(f===1);
console.log(f!==1);

// assignment
// let x=x+5;
// same as x+=5;
// x=x*5;
// x*=3;/operators
//arithmetic
let x = 10;
let y = 3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);
//increment (++)
// console.log(x++);


// console.log(x)
//decrement(--)
console.log(x--);
console.log(x);



function cube(number,nomber){
    return number * (number + nomber);
}
console.log(cube(5,6));

function myName(turinayo){
    let name = turinayo/80;
    return name;
}
myName(800)
let answer = myName(800);
console.log(answer);

function math(divisible){
    let devide = divisible*5;
    return devide;
}
math(6)
let devidee = math(6);
console.log(devidee);

function aptech(kampala){
    let location = kampala +" "+"uganda";
    return location;
}
aptech("kla");
let loca = aptech("kla");
console.log(loca);
// /function syntax
// function function_name (list of parameters){
//     !>>>
//     !
//     console.log('in myFunction');
// }  
// myFunction();
// myFunction();

function greet(taki,papi){
    taki = taki + ' '+ 'world';
    console.log(taki, papi);

}
greet("fresh bwoy" ,55) ; 
function doc(name,club){
    console.log('helo' + ' ' + name + ' ' + club);

}
doc('mo_salah', 'liverpool');
doc('mane', 'sadio');



// //use an object literal when you want to deal with many related variables...an object>>>>
let owner = {
    name: 'Turinayo',
    age: 19,
    sex: 'Male',
    isSingle: 'False',
}
console.log(owner);

// //arrayfeatures
// let friend = ['pascal', 'brook','bonnie','nathan', 'blaire', 'kodek'];
// console.log(friend.length);
// let numbers = [1,2,3,4];
// console.log(numbers.length)

// //also you can reference an empty array and addvalues using this feature
let value = [];
value.push(32);
value.push(452);
value.push(68);
console.log(value);
//values.pop removes the last of the values u wish to remove in an array
let valu =[1,2,3];
valu.pop();
console.log( valu); 

let names = ["turi", "nayo", "fran", "cis"];
names.pop();
console.log( names);
//also
let num =[1,2,3];
let answr = num.pop();
console.log( num); 

// //values.shift removes the first value within an array
//values.splice deletes an item in array by virtue of its indexed feature
let int =[1,2,3,44];
int.splice(0,2);
console.log( int);

let liv =['salah', 'vandijk', 'mane','firmino'];
liv.splice(3,4 );
console.log(liv);

//arrays
//initialised ny boxed brackets
//referenced by indexed subscripts 
let values = [1,2,3];
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
let friends = ['pascal', 'brook','bonnie','nathan', 'blaire', 'kodek'];
console.log(friends, typeof[friends]);

// //also
let frien = ['pascal', 'brook','bonnie','nathan', 'blaire', 'kodek'];
frien[5]= 'dre';
console.log(frien, typeof[friend]);
console.log(frien[0]);
console.log(frien[1]);
console.log(frien[2]);
console.log(frien[3]);
console.log(frien[4]);
console.log(frien[5]);
console.log(frien[6]);



/*let francisTurinayo;
console.log(francisTurinayo, typeof(francisTurinayo));
/*
let name = 'Francis';
console.log('hello world');
// //rules about variables/variable names
// //cannot be a reserved keyword
// // should be meaningful
// //cannot start with a number (1name)
// //cannot contain a space or hyphe(-)
// //are case sensitive

// //constants
// //if you need to reassign a variable use let, if not use const if  udont want to change it.....

// // examples of primitve types
let name = 'Francis';//string literal 
let age = '30';//number literal
let isApproved = 'false/true';//boolean literal
let firstName = 'undefined';//undefined
let selectedColor = 'null';//null

// //object types
// //when we need to reference multiple variable, we can use an object e.g
// //the brackets represent an object literal notatione 
// //the name and age properties ar known as th key value pairs of the person object

let person = {
    name: 'Francis',
    age: 40
};
// //if you want to change the name of the property and also maybe the value of
// //the property,dot notation ie;
// person.name='frank';
// console.log(person);

// //Brackt notation
// person['name'] = 'Mary';
// console.log(person.name);
// */















