// require the Potion module
const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    //we use the 'new' keyword to create a new Potion objects
    const potion = new Potion('health'); 

    //expect the new Potion name to be 'health'
    expect(potion.name).toBe('health'); 
    //expect the new Potion value to be a 'Number'
    //the expect.any method takes a constructor as an argument.
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    // this is creating a new Potion object
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});