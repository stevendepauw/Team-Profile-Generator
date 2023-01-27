const Employee = require('../lib/employee');

describe('employee'), () => {
    //Testing instantiation
    it('should instantiate new employee', () => {
        const empTest = new Employee();
        expect(typeof(empTest)).toBe('object');
    });

    //testing setting name with constructor
    it('should set employee name', () => {
        const testName = 'Steven';
        const empTest = new Employee(testName);
        expect(empTest.name).toBe(testName)
    });

    //testing setting id with constructor
    it('should set employee id', () => {
        const testId = 5;
        const empTest = new Employee('Steven', testId);
        expect(empTest.id).toBe(testId);
    });

    //testing setting email with constructor 
    it('should set the employee email', () => {
        const testEmail = 'notReal';
        const empTest = new Employee('Steven', 5, testEmail);
        expect(empTest.email).toBe(testEmail);
    });
}