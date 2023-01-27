const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        const name = name;
        const id = id;
        const email = email;
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = "Intern";