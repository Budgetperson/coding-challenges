// NOTE:
// https://www.utf8-chartable.de/unicode-utf8-table.pl?utf8=dec
// use it.

/*
    You are given a String with a length of 1.
    Return the lowercase version of the string.
    If the character is not A-Z, return the same character.
    Examples:
        makeLowerCaseSingle('Z') --> 'z'
        makeLowerCaseSingle(';') --> ';'
        makeLowerCaseSingle('s') --> 's'
    String functions allowed:
        everything except String.toLowerCase (duh)
*/
function makeLowerCaseSingle(character) {
    // implement
}

/*
    You are given a String with a length greater than or equal to 0.
    Return the lowercase version of the string.
    Use the `makeLowerCaseSingle` function you just wrote in your implementation.
    Examples:
        makeLowerCase('This problem SUCKS.') --> 'this problem sucks.'
        makeLowerCase('') --> ''
        makeLowerCase(';_;') --> ';_;'
*/
function makeLowerCase(str) {
    // implement
}

/*
    Return true if the string is a palindrome; if it's not, return false.
    Palindrome rules:
        * Spaces must match up correctly, if present.
        * Capital letters and lowercase letters are different.
    Examples:
        isPalindrome('lol') --> true
        isPalindrome('Lol') --> false
        isPalindrome('') --> false
        isPalindrome('cartoon') --> false
        isPalindrome('race car') --> false
        isPalindrome('racecar') --> true
        isPalindrome('ba ab') --> true
    Precondition: str is a String
    String functions allowed: none
*/
function isPalindrome(str) {
    // implementation
}

/*
    Return true if the string is a "relaxed" palindrome; if it's not, return false.
    Here are the new rules for a "relaxed" palindrome!!
        * spaces are not taken into account
        * capital and lowercase letters are treated the same
    Examples:
        isPalindrome(' r a  cec ar') --> true
        isPalindrome('race car') --> true
        isPalindrome('     ') --> false
        isPalindrome('R a  cecAr') --> true
    Precondition: str is a String
    String functions allowed:
        none, BUT you may use your `makeLowerCase` function if desired
*/
function isRelaxedPalindrome(str) {
    // implementation
}

/*
    You are making a hangman game. As part of the game, you need to write
    a function to see if the person made the right guess. For this function,
    you will be given the correct word (solution), what the user has gotten so far (partial), 
    and the next guess. Letters a user has not gotten will be marked with an asterisk "*".

    You must return an array with all of the positions the user guessed with `guess`.
    If no correct letters were guessed, return an empty array.
    If a user has already guessed that letter, return an empty array.

    Examples:
        getPositionsGuessed('fun', '**n', 'u') --> [1] // because the user guessed position 2
        getPositionsGuessed('mississippi', '********pp*', 's') --> [2,3,5,6]
        getPositionsGuessed('mississippi', '********pp*', 'z') --> []
        getPositionsGuessed('mississippi', '********pp*', 'p') --> []

    Preconditions:
        solution is a string with length > 0
        partial is a string with length < solution.length
        guess is a string with length 1
        solution, partial, and guess all have lowercase letters only
    String functions allowed: String.includes
*/
function getPositionsGuessed(solution, partial, guess) {
    // implementation
}

/*
    Return whether the string `candidate` is a substring of `base`.
    A substring is when a string is part of a larger string.
    Examples:
        isSubstring('racecar', 'car') --> true
        isSubstring('car', 'racecar') --> false
        isSubString('5a2eb6', '2e') --> true
        isSubString('5a2eb6', '2ex') --> false
*/
function isSubstring(base, candidate) {
    // implementation
}

/*
    You are given an array of people objects. Each object in the array can
    have the following keys: `name`, `firstName`, `lastName`. An example
    array might be as so:
        [{name: 'Andrea Woelffer'}, {firstName: 'Dylan', lastName: 'Rutter}].

    Return a copy of the array with each object copied and modified to include
    a `fullName` key. Here are the rules for `fullName`
        1. If `name` exists, use that as `fullName`.
        2. If `name` does not exist but `firstName` and `lastName` do, use the first name,
        then a space, then the lastname. Example "Dylan Rutter"
        3. If only one of firstName and lastName exist, use that.
        4. If none of the keys exist, use 'Name Unknown'
    Example:
        let nameOnly = {name: 'Andrea Woelffer'};
        let firstLast = {firstName: 'Dylan', lastName: 'Rutter};
        let first = {firstName: 'Yash'};
        let neither = {some: 'junk'};
        let people = [nameOnly, firstLast, first, neither];
        let peopleWithFullNames = addFullNames(people);
        console.log(peopleWithFullNames[0].fullName) // logs "Andrea Woelffer"
        console.log(peopleWithFullNames[1].fullName) // logs "Dylan Rutter"
        console.log(peopleWithFullNames[2].fullName) // logs "Yash"
        console.log(peopleWithFullNames[3].fullName) // logs "Name Unknown"
    Notes:
        Start with a new empty array and keep pushing to it. That way your returned array will be a copy.
        To copy an object, use the `copyObj` function I've provided. Here's how to use it:
            let copy = copyObj(obj);

*/
let copyObj = (obj) => ({...obj}); // Implementation done. Don't touch this. (Can't touch this)
function addFullNames(people) {
    //implementation
}

/*
    Given a string, return an object that shows the number of times
    each character occurs in the string. This object should have a string
    as its keys and numbers as its values. Do not include spaces.
    
    Examples:
        getLetterCounts('baba') --> {'a': 2, 'b': 2}
        getLetterCounts('ad dad') --> {'a': 2, 'd': 3},
    Precondition:
        str is a string with all lowercase letters
*/

function getLetterCounts(str) {
    // implementation
}

export {
    makeLowerCaseSingle,
    makeLowerCase,
    isPalindrome,
    isRelaxedPalindrome,
    getPositionsGuessed,
    isSubstring,
    getLetterCounts,
};
