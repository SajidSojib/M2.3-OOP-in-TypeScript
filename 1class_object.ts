class Animal {
    // name: string;
    // sound: string;
    // constructor(name: string, sound: string) {
    //     this.name = name;
    //     this.sound = sound;
    // }

    constructor(public name: string, public sound: string) {

    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal('Doggesh Bhai', 'Bark Bark Shwatty');
const cat = new Animal('Billu Bhai', 'Meow Meow Mommy');

dog.makeSound();
cat.makeSound();