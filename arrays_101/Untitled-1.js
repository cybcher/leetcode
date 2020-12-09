// Task
// 


// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.
 

// Input params:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

const deck = [2,2,2,2,2,2,4,4,4];//2.2.2 2.2.2 4.4.4
// if (deck.length < 2) {
//     return false;
// }

// // Solution 1.
// const result = [];
// for (let i = 0; i < deck.length; i++) {
//     const card = deck[i];
//     result[card] = result[card] ? result[card] + 1 : 1;
// }

// return result.filter(Boolean).length === result.filter(Boolean).filter(x => x % 2 === 0).length;

// // Solution 2.
// let result = [];
// let i = 0;
// deck.sort();
// for (let index = 0; index < deck.length; index++) {
//     const card = deck[index];
//     const previousCard = deck[index-1];
//     if (card !== previousCard) {
//         result[`result_${card}${i}`] = 1;
//         continue;
//     }

//     // check if module is 2 if then 
//     if (result[`result_${card}${i}`] % 2 === 0) {
//         i++;
//         result[`result_${card}${i}`] = 1;
//         continue;
//     }

//     result[`result_${card}${i}`] = result[`result_${card}${i}`] + 1;
// }

// result = Object.keys(result).map(key => result[key]);
// return result.every(value => value === result[0]);

// Solution 3.
let result = deck.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = [...accumulator[currentValue] || [], currentValue];
    return accumulator;
   }, {});
// const deck = [1,2,3,,4,4,3,2,1];
// { 1: [ 1, 1 ], 2: [ 2, 2 ], 3: [ 3, 3 ], 4: [ 4, 4 ] } 

// [2,2,  2,2   ,4,4  ,4,4]
// console.log(result)
let divisors = [];
result = Object.values(result); // Object.values(result)
let splitter = result.map(res => res.length).sort()
for (let index = 0; index < splitter.length; index++) {
    let splitValue = splitter[index];
    let response = result[index].length/splitValue;
    if (response) {
        let ind = result[index];
        console.log(result[index]);
        console.log(response);
        divisors[ind][index] = response;
    }
    
}

console.log(divisors);


console.log(result.every(value => value.length === result[0].length));