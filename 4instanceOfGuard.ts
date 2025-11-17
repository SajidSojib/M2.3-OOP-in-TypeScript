class Person {
    constructor(public name: string) {}

    getSleep(hour: number) {
      console.log(`${this.name} ${hour} ghonta ghumail`);
    }
}

class Student extends Person {
    doStudy(hour: number) {
      console.log(`${this.name} is studying ${hour} hours`);
    }
}

class Teacher extends Person {
    takesClasses(hour: number) {
      console.log(`${this.name} takes classes ${hour} hours`);
    }
}


const isTeacher = (user: Person)=> {
    return user instanceof Teacher;
}

const getUserInfo = (user:Person) => {
    user.getSleep(10);                  //? only suggest Person
    if(user instanceof Student) {
        user.doStudy(5);                //? suggest Student
    }
    if(isTeacher(user)) {
        user.takesClasses(8);            //? suggest Teacher
    }
}


const s1 = new Student('John');
const t1 = new Teacher('Sajid');

getUserInfo(s1);
getUserInfo(t1);