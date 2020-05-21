import {
    makeLowerCaseSingle,
    makeLowerCase,
    isPalindrome,
    isRelaxedPalindrome,
    getPositionsGuessed,
    isSubstring,
    getLetterCounts,
} from "./objectstringcardio.solution.js";

describe("6-objectstringcardio", () => {
    describe("#makeLowerCaseSingle", () => {
        it.each([
            ["a", "a"],
            ["A", "a"],
            [";", ";"],
        ])("lowercase %p is %p", (input, output) => {
            expect(makeLowerCaseSingle(input)).toEqual(output);
        });
    });
    describe("#makeLowerCase", () => {
        it.each([
            ["BruhHh....", "bruhhh...."],
            ["", ""],
            [";_;", ";_;"],
        ])("lowercase %p is %p", (input, output) => {
            expect(makeLowerCase(input)).toEqual(output);
        });
    });
    describe("#isPalindrome", () => {
        it.each([
            ["lol", true],
            ["Lol", false],
            ["", false],
            ["race car", false],
            ["racecar", true],
            ["ba ab", true],
            ["notor", false],
        ])("isPalindrome %p: %p", (input, output) => {
            expect(isPalindrome(input)).toEqual(output);
        });
    });
    describe("#isRelaxedPalindrome", () => {
        it.each([
            ["lol", true],
            ["Lol", true],
            ["", false],
            ["race car", true],
            ["racecar", true],
            ["ba ab", true],
            [" r a  cec ar", true],
            ["rAce caR", true],
            ["    ", false],
            ["notor", false],
        ])("isRelaxedPalindrome %p: %p", (input, output) => {
            expect(isRelaxedPalindrome(input)).toEqual(output);
        });
    });
});
