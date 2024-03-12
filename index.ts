export const transformString = (input: string): string => {
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

const result = transformString('Cat30');
console.log(result); // Output: 'dbU30'
