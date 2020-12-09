// Task
// Magazines 

// # ransomNote = "a", magazine = "b"
// # => false

// # ransomNote = "aa", magazine = "ab"
// # => false

// # ransomNote = "aa", magazine = "aab"
// # => true

// # ransomNote = "aa", magazine = "aab"
// # => true

// const ransomNote = "hey clay"; // ["h", "e", "y"].included("e") true
// const magazine = "heeey clay";
// const magazine = "Haskell for Mac is an easy-to-use integrated programming environment for Haskell on OS X. It is a one-click install of a complete Haskell system";
 
// function fun(ransomNote, magazine) {
//     // let continueFlag = false;
//     const lettersFromMagazine = [];
//     const ransomNoteArr = ransomNote.split("");
//     const magazineArr = ransomNote.split("");
//     // magazineArr = ['a','a','a','b']
//     // noteArr = ['a']
//     // flter result will be ['a','a','a']

//     magazineArr.filter(char => 
//         console.log(ransomNoteArr.includes(char))
//     );
//     return magazineArr.filter(char => ransomNoteArr.includes(char)).length === ransomNoteArr.length;
//     // .forEach(char => {
//     //     for (let i = 0; i < magazine.length; i++) {
//     //         const magazineChar = magazine[i];
//     //         if (magazineChar === char && lettersFromMagazine.length === 0) {
//     //             lettersFromMagazine.push({char, index: i});
//     //         }

//     //         // magazineChar = e
//     //         if (magazineChar === char && lettersFromMagazine.length > 0) {
//     //             const checkedArray = lettersFromMagazine.filter(charObj => {
//     //                 return charObj.char == char && charObj.index == i
//     //             });

//     //             if (checkedArray.length !== lettersFromMagazine.length) {}

//     //             // for (let y = 0; y < lettersFromMagazine.length; y++) {
//     //             //     const alreadyChecked = lettersFromMagazine[y];
//     //             //     if (alreadyChecked.char == char && alreadyChecked.index == i) {
//     //             //         continueFlag = true;
//     //             //     } 
//     //             // }
//     //         }



//     //         lettersFromMagazine.push({char, index: i})
//     //         return { char, included: true };
//     //     }

//     //     return {char, included: false, index: 0}
//     // })

//     // // console.log(result);
//     // return result.filter(charObj => charObj);
// };




let fun1 = (ransomNote, magazine) => {
    checkLetter = (letter, exclude, magazine) => {
        for (let index = 0; index < magazine.length; index++) {
            const magazineLetter = magazine[index];
            if (magazineLetter === letter && (exclude.length === 0 || exclude.indexOf(letter) !== index)) {
                return index;
            }
        }
    
        return false;
    }

    const result = []
    for (let i = 0; i < ransomNote.length; i++) {
        const ransomNoteLetter = ransomNote[i];
        let resultIndex = checkLetter(ransomNoteLetter, result, magazine);
        console.log(resultIndex);
        if (resultIndex !== false) {
            result.push({ magazine[resultIndex], index })
        }
    }
    
    return result.length === ransomNote.length;
}


console.log(fun1(ransomNote, magazine));