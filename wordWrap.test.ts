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

test('should wrap more words complete', () => {
    expect(wordWrap('pris lopez esta', 5)).toBe('pris\nlopez\nesta');
    expect(wordWrap('pris lopez esta comi', 5)).toBe('pris\nlopez\nesta\ncomi');
    expect(wordWrap('pris lopez esta comi algo', 5)).toBe('pris\nlopez\nesta\ncomi\nalgo');
});

test('should wrap more words complete', () => {
    expect(wordWrap('pris lopez estandoss', 5)).toBe('pris\nlopez\nestan\ndoss');
    expect(wordWrap('pris lopez perez esta comiendo patatas', 5)).toBe('pris\nlopez\nperez\nesta\ncomie\nndo\npatat\nas');

});