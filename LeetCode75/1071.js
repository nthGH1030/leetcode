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
    let remainder = longer % shorter; //30 = 210 / 45
    let lastNonZeroRemainder 
    while (remainder != 0) {

        lastNonZeroRemainder = remainder; //30
        longer = shorter //45
        shorter = remainder //30
        remainder = longer % shorter; // 15 = 45/30
        
    }
    return lastNonZeroRemainder
}

let gcd = gcdOfStrings('ABCABC', 'ABC')

console.log(gcd)

