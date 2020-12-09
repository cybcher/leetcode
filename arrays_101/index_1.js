// /**
//  * 1
//  * 
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMaxConsecutiveOnes = function(nums) {
//     // let previousNum = -1;
//     // let resultSet = [ 0 ];
//     // let counter = 0;
//     // for (value of nums) {
//     //     counter = previousNum == value ? counter + 1 : 1; 
//     //     if (value === 1 && counter >= resultSet[0]) {
//     //         resultSet[0] = counter;
//     //     }

//     //     previousNum = value;
//     // }

//     // return resultSet[0];

//     // let previousNum = 0;
//     // let iter = -1;
//     // let otherNumSet = [];
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (i === 0 || previousNum !== nums[i]) {
//     //         iter++;
//     //     }

//     //     otherNumSet[iter] = {
//     //         key: nums[i],
//     //         value: (otherNumSet[iter] ? otherNumSet[iter].value : 0) + 1,
//     //     };
//     //     previousNum = nums[i];
//     // }

//     // return parseInt(otherNumSet.sort((a, b) => a.value < b.value)[0].value);

    
//     // let checkedCounter = [];
//     // let exactNumberCheck = [];
//     // let iterator = -1;
//     // for (let i = 0; i < nums.length; i++) {
//     //     if (i === 0 || nums[i] !== nums[i-1]) {
//     //         iterator++;
//     //         checkedCounter[iterator] = 1;
//     //     }

//     //     if (i > 0 && nums[i] === nums[i-1]) {  
//     //         checkedCounter[iterator] = checkedCounter[iterator] + 1;
//     //     }

//     //     if (i === 0 || exactNumberCheck[nums[i]] === undefined || exactNumberCheck[nums[i]] < checkedCounter[iterator]) {
//     //         if (checkedCounter[iterator] !== undefined) {
//     //            exactNumberCheck[nums[i]] = checkedCounter[iterator]; 
//     //         } else {
//     //            exactNumberCheck[nums[i]] = 1; 
//     //         }
//     //     }
//     // }

//     // return exactNumberCheck.sort((a, b) => a < b)[0];
// };

// // class Solution {

// //     /**
// //      * @param Integer[] $nums
// //      * @return Integer
// //      */
// //     function findMaxConsecutiveOnes($nums) {
// //         $iter = -1;
// //         $previousNum = -1;
// //         $resultSet = [];
// //         $counter = 0;
// //         foreach ($nums as $value) {
// //             if ($previousNum == $value) {
// //                 $counter++;
// //             } else {
// //                 $counter = 1;
// //             }

// //             if (!array_key_exists($value, $resultSet)) {
// //                 $resultSet[$value] = 0;
// //             } 

// //             if (array_key_exists($value, $resultSet) && $counter >= $resultSet[$value]) {
// //                 $resultSet[$value] = $counter;
// //             }

// //             $previousNum = $value;
// //         }
// //         arsort($resultSet);
        
// //         return array_values($resultSet)[0];
        
// //     }
// // }

// console.log(findMaxConsecutiveOnes([1,1,0,0,0,0,1,1,1,1,0,1,1,1]));