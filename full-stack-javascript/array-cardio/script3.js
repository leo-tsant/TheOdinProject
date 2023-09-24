// FILTER

// Filter out words that start with a specific letter from an array of words
const words = ["apple", "banana", "cherry", "date", "avocado"];
const targetLetter = "a";

const newWords = words.filter((item) => item[0] === targetLetter);

// Filter out elements that are multiples of a given number from an array of numbers.
const numbers = [10, 25, 6, 15, 30, 35, 42, 55, 56];
const multipleOf = 5;

const multiplesOf5 = numbers.filter((number) => number % multipleOf === 0);

// Filter out elements that are palindrome strings from an array of strings
const strings = ["level", "hello", "noon", "world", "radar"];

const palindromes = strings.filter((string) => {
    const reversedString = string.split("").reverse().join("");
    return string === reversedString;
});

// MAP

// Create a new array by squaring each element of the original array
const numbers1 = [3, 5, 7, 10, 12];

const squaredNumbers = numbers1.map((number) => Math.pow(number, 2));

// Create a new array of objects by mapping numbers to their squares.
const numbers2 = [2, 4, 6, 8, 10];

const map2square = numbers2.map((number) => {
    return {
        number,
        square: Math.pow(number, 2),
    };
});

// Create a new array by mapping strings to their lengths
const strings1 = ["apple", "banana", "cherry", "date", "elderberry"];

const map2length = strings1.map((string) => {
    return {
        string,
        length: string.length,
    };
});

// REDUCE

// Sum all numbers in an array using the reduce method
const numbers3 = [5, 10, 15, 20];

const sum = numbers3.reduce((acc, cur) => acc + cur, 0);

// Calculate the product of all numbers in an array using the reduce method.
const numbers4 = [2, 3, 4, 5];

const product = numbers4.reduce((acc, cur) => acc * cur, 1);

// Concatenate all strings in an array into a single string using the reduce method.

const strings2 = ["This", "is", "a", "sample", "sentence."];

const joinedString = strings2.reduce((acc, cur) => (acc = acc + cur + " "), []);

// ALL Methods

// Given an array of objects representing transactions, calculate the total amount of all transactions for a specific category.
const transactions = [
    { id: 1, category: "groceries", amount: 50.25 },
    { id: 2, category: "utilities", amount: 120.1 },
    { id: 3, category: "groceries", amount: 30.0 },
    { id: 4, category: "entertainment", amount: 45.75 },
];
const targetCategory = "groceries";

const totalAmountGroceries = transactions.filter((item) => item.category === targetCategory).reduce((acc, cur) => acc + cur.amount, 0);

// Given an array of products, calculate the average price of all products that are in stock.
const products = [
    { id: 1, name: "Laptop", price: 1000, inStock: true },
    { id: 2, name: "Headphones", price: 50, inStock: true },
    { id: 3, name: "Mouse", price: 20, inStock: false },
    { id: 4, name: "Keyboard", price: 30, inStock: true },
];

const stock = products.reduce(
    (acc, product) => {
        if (product.inStock) {
            acc.totalPrice += product.price;
            acc.count++;
        }
        return acc;
    },
    { totalPrice: 0, count: 0 }
);

const averagePriceInStock = stock.count > 0 ? stock.totalPrice / stock.count : 0;

// Given an array of sentences, find the most common word.
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "All that glitters is not gold.",
    "Actions speak louder than words.",
];

const words2 = sentences
    .map((sentence) => sentence.toLowerCase().replace(/[.,]/g, "").split(" "))
    .reduce((acc, cur) => {
        cur.forEach((word) => {
            if (acc[word]) {
                acc[word]++;
            } else {
                acc[word] = 1;
            }
        });
        return acc;
    }, {});

const mostCommonWord = Object.keys(words2).reduce(
    (acc, cur) => {
        if (words2[cur] > acc.count) {
            acc.word = cur;
            acc.count = words2[cur];
        }
        return acc;
    },
    { word: "", count: 0 }
);
