"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformString = void 0;
const transformString = (input) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = 'aeiou';
    const transformedString = input.toLowerCase().split('').map((char) => {
        if (alphabet.includes(char)) {
            const index = (alphabet.indexOf(char) + 1) % alphabet.length;
            return vowels.includes(alphabet[index]) ? alphabet[index].toUpperCase() : alphabet[index];
        }
        return char;
    }).join('');
    return transformedString;
};
exports.transformString = transformString;
const result = (0, exports.transformString)('Cat30');
console.log(result); // Output: 'dbU30'
