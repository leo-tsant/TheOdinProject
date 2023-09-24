import { capitalize, reverseString, calculator, caesar, analyzeArray } from "./index.js";

it("capitalize works", () => {
    expect(capitalize("teststring")).toBe("Teststring");
});

it("reverseString works", () => {
    expect(reverseString("teststring")).toBe("gnirtstset");
});

it("calculator works", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.divide(1, 2)).toBe(0.5);
});

it("caesar works", () => {
    expect(caesar("teststring", 1)).toBe("uftutusjoh");
    expect(caesar("teststring", 2)).toBe("vguvuvtkpi");
    expect(caesar("teststring", 3)).toBe("whvwvwulqj");
});

it("analyzeArray works", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
});
