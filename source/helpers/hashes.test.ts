import {doubleCeroCheck, generateHash} from './hashes'

test('With initial Data' , () => {
    expect(generateHash('0000000000000000000000000000000000000000000000000000000000000000','Hola Mundo').nonce).toBe(5),
    expect(generateHash('0000000000000000000000000000000000000000000000000000000000000000','Hola Mundo').newHash).toBe('0038711c83bd05b1e369e27246df4ba815a6dda04116b1b2f9a8c21ba4e1de38')
});

test('With Prev Hash Data' , () => {
    expect(generateHash('0038711c83bd05b1e369e27246df4ba815a6dda04116b1b2f9a8c21ba4e1de38','Chau Mundo').nonce).toBe(71),
    expect(generateHash('0038711c83bd05b1e369e27246df4ba815a6dda04116b1b2f9a8c21ba4e1de38','Chau Mundo').newHash).toBe('00232c7d3c2283695a4029eddc1b9e8c83914515832a04f57b402fc444aa11b5');
});

test('Check Regex Test' , () => {
    expect(doubleCeroCheck('00a')).toBe(true),
    expect(doubleCeroCheck('0a')).toBe(false)
    expect(doubleCeroCheck('0')).toBe(false),
    expect(doubleCeroCheck('a')).toBe(false)
    expect(doubleCeroCheck('12a')).toBe(false),
    expect(doubleCeroCheck('')).toBe(false)
    expect(doubleCeroCheck('00123123123')).toBe(true),
    expect(doubleCeroCheck('00asdfasdfvasdf')).toBe(true),
    expect(doubleCeroCheck('00')).toBe(true)
});