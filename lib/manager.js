const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        const name = name;
        const id = id;
        const email = email;
        super(name, id, email);

        this.officeNumber = officeNumber;
    }    

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager
