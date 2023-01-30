const Engineer = require('../lib/engineer');

describe('engineer', () => {
    //Testing instantiation
    it('should instantiate an engineer', () => {
        const empTest = new Engineer();
        expect(typeof(empTest)).toBe('object');
    });

    //testing setting name with constructor
    it('should set engineer name', () => {
        const testName = 'Steven';
        const empTest = new Engineer(testName);
        expect(empTest.name).toBe(testName)
    });

    //testing setting id with constructor
    it('should set engineer id', () => {
        const testId = 5;
        const empTest = new Engineer('Steven', testId);
        expect(empTest.id).toBe(testId);
    });

    //testing setting email with constructor
    it('should set the engineer email', () => {
        const testEmail = 'notReal';
        const empTest = new Engineer('Steven', 5, testEmail);
        expect(empTest.email).toBe(testEmail);
    });

     //testing setting github with constructor
     it('should set the engineer github', () => {
        const testGit = 'fakeGit';
        const empTest = new Engineer('Steven', 5, 'not real', testGit);
        expect(empTest.github).toBe(testGit);
    });

});