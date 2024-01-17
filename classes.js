// class Rectangle {
//     // A constructor, to give initial arguments.
//     constructor(height, width) {
//         // We can define attributes stored on the instance with `this`
//         this.height = height;
//         this.width = width;
//     }

//     // A method.
//     getArea() {
//       return this.height * this.width;
//     }
// }

// const rect = new Rectangle(4, 10);

// rect.getArea();


//////// Exercise
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }

//     getIntroduction() {
//         return `Hi, my name is ${this.name}`
//     }
// }


// const user = new User('Uma');

// user.getName(); 
// // 'Uma'

// user.getIntroduction();
// // 'Hi, my name is Uma'


//////// Exercise
// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }

//     getIntroduction() {
//         return `Hi, my name is ${this.name}`
//     }
// }

// const users = [
//     new User('Uma'),
//     new User('Josh'),
//     new User('Ollie')
// ];

// class UserBase {
//     constructor(arrayOfNames) {
//         this.users = arrayOfNames;
//     }
//     count() {
//         return this.users.length;
//     }
//     getNames() {
//         return this.users.map((user) => user.getName());
//     }
//     getIntroductions() {
//         return this.users.map((user) => user.getIntroduction());
//     }
// }

// const userBase = new UserBase(users);

// userBase.count();
// // 3

// userBase.getNames();
// // [ 'Uma', 'Josh', 'Ollie' ]

// userBase.getIntroductions();
// // [
// //     'Hi, my name is Uma',
// //     'Hi, my name is Josh',
// //     'Hi, my name is Ollie'
// // ]

//////// Challenge
class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

class ShoppingBasket {
    constructor() {
        this.candies = [];
    }
    getTotalPrice() {
        let sum = 0 // sum of all candy object prices
        this.candies.map((candy) => sum += candy.getPrice());
        return sum
    }
    addItem(candy) {
        return this.candies.push(candy)
    }
}



const candy = new Candy('Mars', 4.99);

candy.getName();
// 'Mars'
candy.getPrice();
// 4.99

const basket = new ShoppingBasket();
basket.getTotalPrice();
// 0

basket.addItem(candy);

basket.getTotalPrice();
// 4.99

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

basket.getTotalPrice();
// 12.97