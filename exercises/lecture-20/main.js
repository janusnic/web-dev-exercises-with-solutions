const person = {
    name: {
        'firstName': "James", 
        'lastName': "Bond"
    },
    age: 32,
    bio() {
      console.log(`${this.name.firstName} ${this.name.lastName} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name.firstName}.`);
    },
};

console.log(person.name);

console.log(person.bio());
console.log(person.introduceSelf());

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
}

const john = createPerson("John");
john.introduceSelf();
// "Hi! I'm John."
  
const frankie = createPerson("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
}

const mary = new Person("Mary");
mary.introduceSelf();
// "Hi! I'm Mary."
  
const tom = new Person("Tom");
tom.introduceSelf();
// "Hi! I'm Tom."

Object.hasOwn(mary, "prop"); // false - 'prop' has not been defined

const product = {
    name: "Apple Watch",
    price: 425,
 };
 
console.log(product);

const productInCart ={...product, amount: 2};
 
console.log('Total in cart: ', productInCart.price * productInCart.amount);


const DirtyMartini = {
    ingredients: `
        6 fluid ounces gin
        1 dash dry vermouth
        1 fluid ounce brine from olive jar
        4 stuffed green olives
    `,
    fluid_ounce: 28.4131,
    dash: 0.0351951,
    english_please() {
        return `
        ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (${this.dash}ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives
    `
    },
    excuse_my_french() {
       return  `
       ingrédients:  
        ${this.fluid_ounce * 6} ml de gin
        1 trait de vermouth sec (${this.dash}ml) 
        ${this.fluid_ounce} ml de saumure du pot d'olive
        4 olives vertes farcies
        `
    },
};

console.log(DirtyMartini.excuse_my_french());
console.log(DirtyMartini.english_please());

// Dirty Martini

//    ingredients:
//     6 fluid ounces gin 170.478
//     1 dash dry vermouth 0.0351951
//     1 fluid ounce brine from olive jar 28.4131
//     4 stuffed green olives

//    ingrédients:
//     170.478 ml de gin 170.478
//     1 trait de vermouth sec 0,0351951
//     28.4131 ml de saumure du pot d'olive 28.4131
//     4 olives vertes farcies



// 170.4786 ml de gin
// 1 trait de vermouth sec (0.0351951ml) 
// 28.4131 ml de saumure du pot d'olive
// 4 olives vertes farcies
// main.js:93:9

// 6 fluid ounces gin
// 1 dash dry vermouth (0.0351951ml) 
// 1 fluid ounce brine from olive jar
// 4 stuffed green olives