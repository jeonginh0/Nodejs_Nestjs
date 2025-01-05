// ES6 Class (OOP 방식 사용, prototype 사용하여 작동)
// class Person {
//     constructor(name, email, birthday) {
//         this.name = name;
//         this.email = email;
//         this.birthday = new Date(birthday);
//     }

//     introduce() {
//         return `Hello my name is ${this.name}`;
//     }

//     static multipleNumbers(x, y) {
//         return x * y;
//     }
// }

// const inho = new Person('inho', 'stitch010913@gmail.com', '9-13-01');
// console.log(inho);

class Person{
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    introduce() {
        return `Hello my name is ${this.name}`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email)

        this.phone = phone;
        this.address = address;
    }
}

const john = new Client('John', 'John@gmail.com', '010-0000-1212', '부산')
console.log(john);

console.log(john.introduce()); 

/**
 * Constructor(생성자): 인스턴스화된 객체에서 다른 메서드를 호출하기 전에 수행해야 하는 사용자 지정 초기화 제공 가능. ex) new User('john')
 * super: 자식 클래스 내에서 부모 클래스의 생성자, 메서드를 호출할 때 사용.
 */

class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return super.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model('Ford', 'Mustang')
console.log(myCar.show()); 