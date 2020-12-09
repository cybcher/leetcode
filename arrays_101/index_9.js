/**
 * Given an array A of integers, return true if and only if it is a valid mountain array.
 * 
 * Recall that A is a mountain array if and only if:
 * 
 * A.length >= 3
 * There exists some i with 0 < i < A.length - 1 such that:
 * A[0] < A[1] < ... A[i-1] < A[i]
 * A[i] > A[i+1] > ... > A[A.length - 1]
 * 
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: [2,1]
 * Output: false
 * Example 2:
 * 
 * Input: [3,5,5]
 * Output: false
 * Example 3:
 * 
 * Input: [0,3,2,1]
 * Output: true
 *  
 * 
 * Note:
 * 
 * 0 <= A.length <= 10000
 * 0 <= A[i] <= 10000 
 *  
 * 
 *  
 *    Hide Hint #1  
 * It's very easy to keep track of a monotonically increasing or decreasing ordering of elements. You just need to be able to determine the start of the valley in the mountain and from that point onwards, it should be a valley i.e. no mini-hills after that. Use this information in regards to the values in the array and you will be able to come up with a straightforward solution.
 * 
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) {
        return false;
    }

    let result = [];
    let hidjalMax = Math.max(...A);
    let walkingTop = true;
    for (let i = 0, count = A.length; i < count; i++) {
        if (i === 0) {
            result.push(true);
            continue;
        }

        let diff = walkingTop ? A[i-1] < A[i] : A[i-1] > A[i]
        if (A[i] === hidjalMax) {
            walkingTop = false;
        }

        let checkIfItIsMountainForm   = (A[0] < A[1] && A[A.length - 2] > A[A.length - 1]);
        let checkIfMountainHasHill    = Math.abs(A[0] - A[A.length - 1]) <= hidjalMax;
        if (checkIfItIsMountainForm && checkIfMountainHasHill && diff) {
            result.push(true);
            continue;
        }

        result.push(false);
    }

    return result.every((val) => val === true);
};

let arra1 = [1,3,2];                            // true
let arra2 = [2,1];                              // false
let arra3 = [0,3,2,1];                          // true
let arra4 = [3,5,5];                            // false
let arra5 = [2,0,2];                            // false
let arra6 = [0,1,2,3,4,5,6,7,8,9];              // false
let arra7 = [0,1,2,1,2];                        // false
let arra8 = [3,7,20,14,15,14,10,8,2,1];         // false
let arra9 = [0,1,2,3,4,5,6,7,8,9,10,11,12,11];  // true

console.log(validMountainArray(arra1));
console.log(validMountainArray(arra2));
console.log(validMountainArray(arra3));
console.log(validMountainArray(arra4));
console.log(validMountainArray(arra5));
console.log(validMountainArray(arra6));
console.log(validMountainArray(arra7));
console.log(validMountainArray(arra8));
console.log(validMountainArray(arra9));