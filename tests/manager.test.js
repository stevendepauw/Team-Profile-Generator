const  Manager = require('../lib/manager');

describe('manager'), () => {
    //Testing instantiation
    it('should instantiate a manager', () => {
        const empTest = new Manager();
        expect(typeof(empTest)).toBe('object');
    });

    //testing setting name with constructor
    it('should set manager name', () => {
        const testName = 'Steven';
        const empTest = new Manager(testName);
        expect(empTest.name).toBe(testName)
    });

    //testing setting id with constructor
    it('should set manager id', () => {
        const testId = 5;
        const empTest = new Manager('Steven', testId);
        expect(empTest.id).toBe(testId);
    });

    //testing setting email with constructor
    it('should set the managers email', () => {
        const testEmail = 'notReal';
        const empTest = new Manager('Steven', 5, testEmail);
        expect(empTest.email).toBe(testEmail);
    });

     //testing setting manager office number with constructor
     it('should set the managers office number', () => {
        const testOffice = 'fakeOffice';
        const empTest = new Manager('Steven', 5, 'not real', testOffice);
        expect(empTest.school).toBe(testOffice);
    });

}