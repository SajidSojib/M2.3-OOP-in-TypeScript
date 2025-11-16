class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(hour: number) {
    console.log(`${this.name} ${hour} ghonta ghumail`);
  }
}

class Student extends Parent{
    
}

const s1 = new Student('John', 30, 'Dhaka');
s1.getSleep(8);


class Teacher extends Parent{
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

//   getSleep(hour: number) {
//     console.log(`${this.name} ${hour} ghonta ghumail`);
//   }
  takesClasses() {
    console.log(`${this.name} takes classes`);
  }
}

const t1 = new Teacher('Sajid', 30, 'Dhaka', 'Teacher');
t1.getSleep(8);
t1.takesClasses();


