/** Merge Sorted Array
 * 
 * Solution
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * Note:
 * 
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
 * Example:
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 *  
 * 
 * Constraints:
 * 
 * -10^9 <= nums1[i], nums2[i] <= 10^9
 * nums1.length == m + n
 * nums2.length == n
 *    Hide Hint #1  
 * You can easily solve this problem if you simply think about two elements at a time rather than two arrays. We know that each of the individual arrays is sorted. What we don't know is how they will intertwine. Can we take a local decision and arrive at an optimal solution?
 *    Hide Hint #2  
 * If you simply consider one element each at a time from the two arrays and make a decision and proceed accordingly, you will arrive at the optimal solution.
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums1.length <= (m + n)) {
        let itter = 0;
        for (let i = 0; i < nums1.length; i++) {
            if (i >= m && nums2.length > 0) {
                nums1[i] = nums2[itter];
                itter++;
            }
        }
        
        nums1.sort((a, b) => a - b);
    }
};


let nums1 = [0];
let m = 0;
let nums2 = [1];
let n = 1;
merge(nums1, m, nums2, n);
console.log(nums1);