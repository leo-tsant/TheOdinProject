const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
    return string.split("").reverse().join("");
};

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

const caesar = (string, shift) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode(((char - 65 + shift) % 26) + 65);
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
        } else {
            result += string.charAt(i);
        }
    }
    return result;
};

const analyzeArray = (arr) => {
    return {
        average: arr.reduce((total, num) => total + num, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
};

export { capitalize, reverseString, calculator, caesar, analyzeArray };
