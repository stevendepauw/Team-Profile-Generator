const Employee = require('../lib/employee');

describe('employee'), () => {
    //Testing instantiation
    it('should instantiate new employee', () => {
        const empTest = new Employee();
        expect(typeof(empTest)).toBe('object');
    });

    //testing setting name with constructor
    it('should set employee name', () => {
        const testName = 'Bill';
        const empTest = new Employee(testName);
        expect(empTest.name).toBe(testName)
    });
}