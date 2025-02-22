/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

*/

//use a single loop to loop both string

function mergeStringInAlternate(string1, string2) {
    
    let longerString


    if(string1.length < string2.length) {
        longerString = string2
        
    } else if (string1.length > string2.length) {
        longerString = string1
        
    } else {
        longerString = string1
    }
    let mergedString = ''
    for (let i = 0 ; i < longerString.length; i++) {
        
        if(string1[i] === undefined && string2[i] !== undefined) {
            mergedString += string2[i]
            //console.log('1st block', mergedString)
        }

        if(string2[i] === undefined && string1[i] !== undefined) {
            mergedString += string1[i]
            //console.log('2nd block', mergedString)
        }

        if(string1[i] && string2[i] !== undefined) {
            mergedString += string1[i]
            mergedString += string2[i]
            //console.log('3rd block', mergedString)
            
        }
        
    }

    return mergedString
} 

//----------------unit test------------------//
function testEqualLength() {
    const string1 = 'abc'
    const string2 = 'pqr'
    const mergedResult = mergeStringInAlternate(string1,string2)
    
    const expectedResult = 'apbqcr'
    if(mergedResult !== expectedResult) {
        return `test Equal Length failed, expected ${expectedResult}, receved ${mergedResult}`
    } else {
       
       return `expected result '${expectedResult}' is the same as '${mergedResult}', testEqualLength passed`
    }
}

function testString1IsLonger() {
    const string1 = 'abcde'
    const string2 = 'pqr'
    const mergedResult = mergeStringInAlternate(string1,string2)
    const expectedResult = 'apbqcrde'
    if(mergedResult !== expectedResult) {
        return `test Equal Length failed, expected ${expectedResult}, receved ${mergedResult}`
    } else {
        return `expected result '${expectedResult}' is the same as '${mergedResult}', testString1IsLonger passed`
    }
}

function testString2IsLonger() {
    const string1 = 'abc'
    const string2 = 'pqrst'
    const mergedResult = mergeStringInAlternate(string1,string2)
    const expectedResult = 'apbqcrst'
    if(mergedResult !== expectedResult) {
        return `test Equal Length failed, expected ${expectedResult}, receved ${mergedResult}`
    } else {
        return `expected result '${expectedResult}' is the same as '${mergedResult}', testString2IsLonger passed`
    }
}

const result1 = testEqualLength()
const result2 = testString1IsLonger()
const result3 = testString2IsLonger()

console.log(result1)
console.log(result2)
console.log(result3)