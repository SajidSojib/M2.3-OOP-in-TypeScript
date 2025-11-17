class Counter{
    count:number = 0;
    static count2:number = 0;
    increment(){
        return ++this.count;
    }
    decrement(){
        return --this.count;
    }
    incrementStatic(){
        return ++Counter.count2;
    }
    decrementStatic(){
        return --Counter.count2;
    }
}

const c1 = new Counter();
console.log(c1.increment());
console.log(c1.increment());
console.log(c1.incrementStatic());
console.log(c1.incrementStatic());
console.log();

const c2 = new Counter();       
console.log(c2.decrement());            // again start with 0
console.log(c2.decrement());
console.log(c2.decrementStatic());     // get data from static
console.log(c2.decrementStatic());

