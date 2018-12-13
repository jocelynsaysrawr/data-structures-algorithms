// Given an integer, return an integer that is the reverse ordering of numbers.
// Examples:
// reverseInt(23) === 32
// reverseInt(12345) === 54321
// reverseInt(-9876) === -6789
// reverseInt(700) === 7

const reverseInt = (num) => {
    if (Math.sign(num) === 1){
        const reversed = num.toString().split('').reverse().join('');
        return reversed;
    } else {
        const reversed = num.toString().split('').splice(1).reverse().join('') * -1;
        return reversed;
    } 
}

console.log(reverseInt(-32));
console.log(reverseInt(12345))