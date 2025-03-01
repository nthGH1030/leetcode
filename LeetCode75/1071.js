/* For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

*/

function gcdOfStrings(str1, str2) {
    //find the longer string
    let longer = str1.length >= str2.length ? str1 : str2;
    let shorter = str1.length < str2.length ? str1 : str2;
    
    //get the gcd of the string
    let remainder = longer.length % shorter.length; //30 = 210 / 45
    let lastNonZeroRemainder = shorter.length
    let longerLength = longer.length
    let shorterLength = shorter.length
    while (remainder != 0) {

        lastNonZeroRemainder = remainder; //30
        longerLength = shorterLength //45
        shorterLength = remainder //30
        remainder = longerLength % shorterLength; // 15 = 45/30
        console.log(remainder)
        
    }

    let gcdLength = lastNonZeroRemainder
    console.log(gcdLength)
    let candidate = shorter.substring(0, gcdLength);
    console.log(candidate)
    //handle case where shorter string contains exactly the substring
    if(shorter.split(candidate).join('') === '' && longer.split(candidate).join('') === ('')) {
        
        return candidate
    }

    return ""
}

const str1 = "ABABABD"
const str2 = "ABAB"
let gcd = gcdOfStrings(str1, str2)
console.log(gcd)
