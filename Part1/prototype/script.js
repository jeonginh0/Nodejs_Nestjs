let user = {
    name: 'John',
    age: 45,
    email: 'john@example.com'
}

console.log(user.name);
console.log(user.hasOwnProperty('email')); // Prototype Object 내부에 있는 hasOwnProperty를 상속받아서 사용

// prototype은 자바스크립트 객체가 다른 객체로부터 메서드와 속성을 상속받는 메커니즘을 말함

// Person Constructor
// function Person(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
// }

// Person.prototype.calculateAge = function() {
//     const diff = Date.now() = this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// const john = new Person('john', 'john@abc.com', '7-10-91');
// const han = new Person('han', 'han@abc.com', '2-8-91');
// console.log(john);
// console.log(han);

function Person(name, email, birthday) {
    const person = Object.create(personsPrototype)
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.now() = this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const john = new Person('john', 'john@abc.com', '7-10-91');
const han = new Person('han', 'han@abc.com', '2-8-91');
const JeongInHo = new Person('inho', 'stitch010913@gmail.com', '9-13-01')
console.log(john);
console.log(han);
console.log(JeongInHo);