/**
 * Created by z002j8f on 12/5/16.
 */

class Person {
    static Sex() {
        const SEX = ['Male', 'Female'];

        return SEX;
    }

    getSex(isMale) {
        return (isMale) ? this.getMale : this.getFemale;
    }

    get getMale() {
        return Person.Sex()[0];
    }

    get getFemale() {
        return Person.Sex()[1];
    }

    constructor(name, age, isMale) {
        this.name = name;
        this.age = age;
        this.sex = this.getSex(isMale);
    }

    toString() {
        console.log('Hi, I am ' + this.name + ',' + this.age + ' years old, and i am a ' + this.sex);
    }
}

class Employee extends Person {

}


(function eval() {
    let person = new Person('Suresh Babu', 34, true);

    console.log(Person.Sex());
    person.toString();
})();