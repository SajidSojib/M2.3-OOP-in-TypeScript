class Person {
    getSleep() {
        console.log(`Person 9 ghonta ghumail`);
    }
}
class Student extends Person{
    getSleep() {
        console.log(`Student 7 ghonta ghumail`);
    }
}
class Developer extends Person{
    getSleep() {
        console.log(`Developer 5 ghonta ghumail`);
    }
}

const p1 = new Person();
const s1 = new Student();
const d1 = new Developer();
p1.getSleep();
s1.getSleep();
d1.getSleep();


class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    length: number;
    width: number;
    constructor(length: number, width: number) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}

const c1 = new Circle(10);
const r1 = new Rectangle(10, 20);
console.log(c1.getArea());
console.log(r1.getArea());