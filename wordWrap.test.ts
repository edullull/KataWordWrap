import { wordWrap} from './wordWrap';

test('wordWrap', () => {
    expect(wordWrap('', 1)).toBe('');
    expect(wordWrap('x', 1)).toBe('x');
});


test('first case separed first word', () => {
    expect(wordWrap('ae', 1)).toBe('a\ne');

});

test('second case separed first word in three parts', () => {
    expect(wordWrap('aei', 1)).toBe('a\ne\ni');

});

test('should wrap multiple words', () => {
    expect(wordWrap('a a', 1)).toBe('a\na');
    expect(wordWrap('edu rio', 3)).toBe('edu\nrio');

});

test('should wrap two words complete', () => {
   expect(wordWrap('pris lopez', 5)).toBe('pris\nlopez');
   expect(wordWrap('jean paul', 6)).toBe('jean\npaul');

   //expect(wordWrap('edu a lul', 3)).toBe('edu\na\nlul');

});