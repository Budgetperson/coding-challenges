import {
    lastElement,
    getElementAt,
    median,
    exists,
    findIndex,
    getLetterGrades,
    swap,
    copy,
    insertIntoNewArray,
} from "./arraycardio";

describe("5-arraycardio", () => {
    describe("#lastElement", () => {
        it("gets last element for [1,2,4]", () => {
            expect(lastElement([1, 2, 4])).toEqual(4);
        });

        it("gets last element for [false]", () => {
            expect(lastElement([false])).toEqual(false);
        });

        it.each([[], null, 0, undefined])(
            "returns null for invalid arg %s",
            (input) => {
                expect(lastElement(input)).toEqual(null);
            }
        );

        it("does not modify array", () => {
            let arr = [1, 2, 4];
            let result = lastElement([1, 2, 4]);
            expect(arr).toEqual([1, 2, 4]);
        });
    });

    describe("#getElementAt", () => {
        let testArray;

        beforeEach(() => {
            testArray = [1, 5, 3];
        });

        it("gets 0+ indexes", () => {
            expect(getElementAt(testArray, 2)).toEqual(3);
            expect(getElementAt(testArray, 0)).toEqual(1);
        });

        it("gets negative indexes", () => {
            expect(getElementAt(testArray, -1)).toEqual(3);
            expect(getElementAt(testArray, -2)).toEqual(5);
            expect(getElementAt(testArray, -3)).toEqual(1);
        });

        it("returns undefined for out of bounds 0+ accesses", () => {
            expect(getElementAt(testArray, 3)).toEqual(undefined);
            expect(getElementAt(testArray, 4)).toEqual(undefined);
        });

        it("returns undefined for out of bounds <0 accesses", () => {
            expect(getElementAt(testArray, -4)).toEqual(undefined);
            expect(getElementAt(testArray, -5)).toEqual(undefined);
        });

        it("does not modify the array", () => {
            getElementAt(testArray, 2);
            expect(testArray).toEqual([1, 5, 3]);
        });
    });

    describe("#median", () => {
        let sampleOddArray = [5, 9, 10, 44, 99];
        let sampleEvenArray = [4, 6, 8, 10];

        it("returns null for 0 length array", () => {
            expect(median([])).toEqual(null);
        });

        it("returns the median for 1 length array", () => {
            expect(median([3])).toEqual(3);
        });

        it("returns the median for odd length array", () => {
            expect(median(sampleOddArray)).toEqual(10);
        });

        it("returns the median for even length array", () => {
            expect(median(sampleEvenArray)).toEqual(7);
        });

        it("does not modify the array", () => {
            let arr = [0];
            median(arr);
            expect(arr).toEqual([0]);
        });
    });

    describe("#exists", () => {
        it("returns true if the element exists", () => {
            expect(exists([1, 5, 3], 5)).toEqual(true);
        });

        it("returns false if the element does not exist", () => {
            expect(exists([1, 5, 3], 10)).toEqual(false);
        });

        it("uses strict equality", () => {
            expect(exists([1, 0, 3], false)).toEqual(false);
        });

        it("works with an empty array", () => {
            expect(exists([], 5)).toEqual(false);
        });
    });

    describe("#findIndex", () => {
        it("returns the index at which the element is found", () => {
            expect(findIndex([1, 5, 3], 5)).toEqual(1);
        });

        it("returns -1 if the element does not exist", () => {
            expect(findIndex([1, 5, 3], 10)).toEqual(-1);
        });

        it("uses strict equality", () => {
            expect(findIndex([1, 0, 3], false)).toEqual(-1);
        });

        it("works with an empty array", () => {
            expect(findIndex([], 5)).toEqual(-1);
        });
    });

    describe("#getLetterGrades", () => {
        it("does the thing", () => {
            expect(getLetterGrades([95, 85])).toEqual(["A", "B"]);
        });
    });

    describe("#swap", () => {
        it("swaps", () => {
            let arr = [1, 2, 3];
            let result = swap(arr, 0, 1);
            expect(arr).toEqual([2, 1, 3]);
            expect(result).toBeUndefined();
        });
    });

    describe("#copy", () => {
        it("copies the array", () => {
            let arr = [0, {}, "arst"];
            let arrCopy = copy(arr);
            expect(arr).not.toBe(arrCopy);
            expect(arr).toEqual(arrCopy);
        });
    });

    describe("#insertIntoNewArray", () => {
        it("inserts", () => {
            let newArr = insertIntoNewArray([1, 2], 1, 9);
            expect(newArr).toEqual([1, 9, 2]);
        });

        it("inserts anywhere", () => {
            let newArr = insertIntoNewArray([1, 2, 5, 7], 1, 9);
            expect(newArr).toEqual([1, 9, 2, 5, 7]);
        });

        it("does not modify passed in array", () => {
            let arr = [1];
            insertIntoNewArray(arr, 0, 5);
            expect(arr).toEqual([1]);
        });
    });
});
