// requiring Player module
const Player = require('../lib/Player');

// importing the Potion constructor into the test
const Potion = require('../lib/Potion');
console.log(new Potion());

// replacing the constructor implementation with the mock data
jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)])
    );
}); 