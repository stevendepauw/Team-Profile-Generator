const Intern = require('../lib/intern');

describe('intern'), () => {
    //Testing instantiation
    it('should instantiate an intern', () => {
        const empTest = new Intern();
        expect(typeof(empTest)).toBe('object');
    });

    //testing setting name with constructor
    it('should set intern name', () => {
        const testName = 'Steven';
        const empTest = new Intern(testName);
        expect(empTest.name).toBe(testName)
    });

    //testing setting id with constructor
    it('should set intern id', () => {
        const testId = 5;
        const empTest = new Intern('Steven', testId);
        expect(empTest.id).toBe(testId);
    });

    //testing setting email with constructor
    it('should set the intern email', () => {
        const testEmail = 'notReal';
        const empTest = new Intern('Steven', 5, testEmail);
        expect(empTest.email).toBe(testEmail);
    });

     //testing setting interns school with constructor
     it('should set the intern school', () => {
        const testSchool = 'fakeSchool';
        const empTest = new Intern('Steven', 5, 'not real', testSchool);
        expect(empTest.school).toBe(testSchool);
    });

}