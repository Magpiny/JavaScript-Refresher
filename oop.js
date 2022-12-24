//OBJECT ORIENTED PROGRAMMING //OOP
/*
    OOP CONCEPTS/TOPICS
        * Objects
        *   Properties
        *   Methods
        * 
        * Class
        *   this keyword
        *   Constructor function 
        *   properties
        *   methods
        * 
        * Inheritance
        *   -->Class Inheritance
        *   -->Prototypal Inheritance
        * Prototype
        * 
        * Setters and Getters
        * Generators
        * Bind
        * 
        * Decorators
        * Abstraction
        * Polymorphism 
*/

// OBJECTS
// Creating objects in JS
// Objects can be created in 3 ways in JavaScript
//1: Object literal syntax
let obj = {};
//2: new Object syntax
let obj2 = new Object();
//3: object.create() syntax
const obj3 = Object.create(null);
//4: using new keyword before a function in caps like this
function Obj(parameter1, parameter2) {
  this.property1 = parameter1;
  this.property2 = parameter2;
}
//--> Obj() serves as a constructor for the newObj object
const newObj = new Obj("Hello", "World");
console.log(newObj.property1);

//--> Adding properties to objects
obj.name = "Sky";
obj.color = "Blue";
obj2.color = "Red";

//--> Deleting a property from an object: delete keyword
delete obj.color; //deletes the property together with its value

// Object values can be of any other data type
// name, age, couty are the properties of the person object
let person = {
  name: "Samuel Wanjare",
  age: 44,
  gender: "Male",
  country: "Kenya",
  county: "Mesopotamia",
  hobby: "coding",
  "favourite programming language": ["Python", "JavaScript", "Rust"],
  message: function () {
    return `${this.name} from ${this.county} likes ${this["my hobby"]}`;
  },
};

// Accessing object property using dot notation 1 : object.property
console.log(person.message());

// Accessing object property using array notation 2 : object['proprty']
// This works well except for functions. So use method1 for functions
console.log(person["favourite programming language"]);

// OBJECT :: methods
//export default $Math;
const $Math = {
  PI: Math.PI.toPrecision(4),
  sum: function (...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  },
  product: function (...numbers) {
    let product = 1;
    if (
      numbers == null ||
      numbers == undefined ||
      numbers == [] ||
      numbers == NaN ||
      numbers == ""
    ) {
      return "Enter a number please!";
    }
    for (number of numbers) {
      product *= number;
    }
    return product;
  },
  areaOfCircle: function (radius) {
    let area = this.PI * radius ** 2;
    return area;
  },
  range: function (start, end) {
    let array = [];
    for (let i = start; i < end + 1; i++) {
      //const element = array[i];
      array.push(i);
    }
    return array;
  },

  rangeWithStep: function (start, end, step) {
    let array = [];
    if (step && step > 0) {
      for (let i = start; i < end + 1; i += step) {
        array.push(i);
      }
    } else if (step && step < 0) {
      for (let i = start; i > end - 1; i += step) {
        array.push(i);
      }
    } else {
      for (let i = start; i < end + 1; i++) {
        array.push(i);
      }
    }

    return array;
  },
};

// OOP:
/*
  You cannot mention OOP without classes
  Classes in JS are similar to other languages with a little 
  differences here and there as you'll see, don't be tricked
   
  CLASSES: A way to define common patterns for multiple objects
*/

class Car {
  make = "Toyota";
  mileage = 100000;
  property3;

  method() {
    console.log("This is a method");
  }
}

// newCar is called an instance of the Car class
const newCar = new Car();

// Accessing class properties
console.log(newCar.make);

// We can set property3 value like so...
newCar.property3 = "yellow";

// We can invoke method on an instance of a class like so
newCar.method();

// There is a special method called constructor method that we use to
// set properties of a class and access 'this' in our method as shown
class Car2 {
  // The superclass
  constructor(para1, para2, para3) {
    this.property1 = para1; // make
    this.property2 = para2; // price
    this.property3 = para3; // color
  }
  getProps() {
    return `This ${this.property3} ${this.property1} cost us ${this.property2}`;
  }
}

let myCar = new Car2("Marcedes", "1.2M", "Silver");
myCar.getProps();

// --> INHERITANCE
// Extending classes and calling parent methods
// Car3 is going to inherit Car2 props
class Car3 extends Car2 {}

let newCar3 = new Car3("Ford", "1.3M", "White");
newCar3.getProps(); //--> This is awesome

// Inside a child class, you can reference the parent class calling
// super() :
class Car4 extends Car2 {
  // --<This is a Subclass ; it inherits from superclass Car2 >--
  hello() {
    return `${this.property1} is awesome`;
  }
  /*
Inside a class declaration, methods that have static written before their
name are stored on the constructor. Access: Car4.hello2()
*/
  static hello2() {
    console.log(
      "My 'static' keyword enables me to be called from the class directly!"
    );
  }
  // The super keyword: used to get parent method and not properties
  getParentHello() {
    return super.getProps() + " : I'm inherited";
  }
}

const newCar4 = new Car4("Maybach", "1.3M", "Dark Blue");
console.log(newCar4.hello());
// With static keyword: you call a method directly from the class
Car4.hello2();

console.log(newCar4.getParentHello());

/*
 In the PRE-ES5 WORLD: creating a class and attaching methods 
 could be done like this
*/
//--> Create a constructor function and bind this to hold properties
function Coupon(price, expiration) {
  // This is a constructor function and should always be in caps
  this.price = price;
  this.expiration = expiration;
  this.sayPrice = function () {
    return `The price is $${this.price}`;
  };
}
// function above gives us a working prototype of Coupon
// instanciate the object
let coupon = new Coupon("20", 3);

coupon.sayPrice(); // -> Evaluates to: "The price is $20"

// next we attach a method as shown
Coupon.prototype.getExpirationMessage = function () {
  return `This coupon expires in ${this.expiration} days`;
};

// The newly formed coupon object now inherits all the properties and
// methods of the parent Coupon object
console.log(`${coupon.price} :inherited`); // property

// method
console.log(coupon.getExpirationMessage() + ": inherited"); // This coupon expires in 3 days : iherited

// What if you wanted to attach like 30 methods to the coupon constructor?
// will you be adding Coupon.prototytype.method for the thirty methods?
// Let me save you a few clicks: Use an object literal like so:
Coupon.prototype = {
  constructor: Coupon,
  method2: function () {
    return "Hello from method2";
  },
  method3: function () {
    return "Hello from method3: " + this.price + " days to go";
  },
};
let coupon2 = new Coupon(30);
coupon2.method3(); // --> Evaluates to: "Hello from method3: 30 days to go"

// Built-in Object prototypes
/*
All built-in objects have constructors, and therefore, they
have proto­types that you can change. For instance, adding a new method
for use on all arrays is as simple as modifying Array.prototype.
*/
// -> Case: Array
Array.prototype.sum = function () {
  return this.reduce((previous, current) => {
    return previous + current;
  });
};
let nums1 = [1, 2, 3, 4];
let totalsum = nums1.sum();
console.log(totalsum);
//
// -> Case: String
String.prototype.countChar = function (char) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == char) {
      count += 1;
    }
  }
  return `Letter ${char} appeared ${count} times`;
};
"Hello world".countChar("o"); // ->Evaluates to "Letter o appeared 2 times";
console.log("Helloworld".countChar("o"));
//
//
// --> ADDING GETTERS AND SETTERS
// --> gETTERS
// A getter or setter is a way to mask complexity by making a function appear
// like a property.

class Person {
  constructor(age, gender, job) {
    this._age = age;
    this.gender = gender;
    this.job = job;
  }
  // Setter function
  set age(age) {
    this._age = age;
  }

  // Getter function
  get age() {
    return this._age; // from setter method
  }

  // ->1 NOTES: Getter and Setter methods must/should have the same name
  // ->2 Setter/Getter method names MUST not be the same as a property
  // ->3 Call a getter/setter method without the brackets
  // ->4 setter/getter keywords on a method make the behave like a property
  // ->5 Each setter method must have a corresponding getter of the same name
  // ->6 This concept is hard to debug and test; and confusing so use it carefully
}

let newPerson = new Person("29");

console.log(newPerson.age + " from setter function");

// --> GENERATORS
// a generator is a function that doesn’t fully execute its body
// immediately when called: Mainly used to flatten a tree as shown

class FamilyTree {
  constructor() {
    this.family = {
      name: "John",
      child: {
        name: "Jane",
        child: {
          name: "Joshua",
          child: {
            name: "Japheth",
            child: {
              name: "Jesica",
            },
          },
        },
      },
    };
  }
  // Iterating over the above would be sth like
  // -> The Normal Way
  get Members() {
    let family = [];
    let node = this.family;
    while (node) {
      family.push(node.name);
      node = node.child;
    }
    return family; //Returns an array
  }

  // Using decorators it would like this
  *[Symbol.iterator]() {
    let node = this.family;
    while (node) {
      yield node.name;
      node = node.child;
    }
  }
}

const family = new FamilyTree();
console.log(family.Members); // v1: evaluates to: Array(5) [ "John", "Jane", "Joshua", "Japheth", "Jesica" ]

console.log([...family]); // v2: Array(5) [ "John", "Jane", "Joshua", "Japheth", "Jesica" ]

// RESOLVE CONTEXT PROBLEMS WITH BIND

// Encapsulation
//S eparating interface from implementation is a great idea. It is usually called
// encapsulation.

/*
When a piece of code is written
to work with objects that have a certain interface—in this case, a toString
method—any kind of object that happens to support this interface can be
plugged into the code, and it will just work.
This technique is called polymorphism. Polymorphic code can work with
values of different shapes, as long as they support the interface it expects.

*/

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// POLYMORPH
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};
print(String(blackRabbit)); // → a black rabbit

// ==> SYMBOLS
// Have litle use(Not wildly used but have important use cases) so i'll not cover
