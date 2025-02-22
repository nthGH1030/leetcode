// check palindrome 
function palindromTest(){

const isPalindrome = (string) => {
    let left = 0
    let right = string.length-1

    while(left < right) {
        if (string[left] != string[right]) {
            return false
        }
        left ++
        right --
    }
    return true
}

console.log('This is not a palindrom ',isPalindrome('abcdbca'))

console.log('this is a palindrome',isPalindrome('abcdcba'))
}

const findSum = (array, target) => {
    //Given a sorted array, find if a given number can be obtained by suming any two array numbers
    let i = 0
    let j = array.length - 1

    while(i < j) {
        if(array[i]+array[j] === target) {
            return true
        }
        else if (array[i] + array[j] > target) {
            j--
        }
        else if (array[i] + array[j] < target) {
            i++
            j = array.length - 1
        }
    }

    return false
}

console.log(findSum([1,2,3,4,5], 10))