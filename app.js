class People {
    constructor(name) {
        this._name = name;
    }
}

class Student extends People {
    constructor(name, address) {
        super(name);
        this._address = address;
    }

    get name() {
        return this._name;
    }

    get address() {
        return this._address;
    }
}

let student = new Student('Ahsan Habib', 'Rangpur');

console.log(student.address);