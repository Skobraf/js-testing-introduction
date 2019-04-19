const { generateText } = require('./util');

test('should output name and age', () => {
    const text = generateText('Ayoub', 25);
    expect(text).toBe('Ayoub (25 years old)');
    const text2 = generateText('Anna', 20);
    expect(text2).toBe('Anna (20 years old)');
});

test('should output nothing', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
    const text2 =  generateText();
    expect(text2).toBe('undefined (undefined years old)');
})