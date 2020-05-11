const add = (a, b) => a + b;
const generateGreatings = (name) => `Hello ${name} !!`;

test('should add two numbers',()=>{
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should get hello name !!',()=>{
    const name = 'Pallav';
    const result = generateGreatings(name);
    expect(result).toBe(`Hello ${name} !!`);
});