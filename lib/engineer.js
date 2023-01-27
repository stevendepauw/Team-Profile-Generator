const Employee = require('./employee')

class Engineer extends Employee {

    constructor(name, id, email, github) {
        const name = name;
        const id = id;
        const email = email;
        super(name, id, email);

        this.githhub = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer