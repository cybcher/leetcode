var canConstruct = function(ransomNote, magazine) {
    const ifExists = (char, index, alreadyCheckedChars) => {
        let result = [];
        for (let y = 0; y < alreadyCheckedChars.length; y++) {
            const checkedChar = alreadyCheckedChars[y];
            if (checkedChar.char === char && checkedChar.index === index) {
                result.push(false);
                continue;
            }
            
            if (checkedChar.char === char && checkedChar.index !== index) {
                result.push(true);
                continue;
            }
        }

        return result.includes(true);
    }
    

    const result = [];
    const alreadyCheckedChars = [];
    ransomNote.split("").forEach((ransomChar) => {
        for (let index = 0; index < magazine.length; index++) {
            const magazineLetter = magazine[index];
            if (magazineLetter === ransomChar && alreadyCheckedChars.length === 0) {
                alreadyCheckedChars.push({ char: magazineLetter, index });
                result.push(magazineLetter);
                break;
            }

            if (magazineLetter === ransomChar) {
                if (ifExists(magazineLetter, index, alreadyCheckedChars)) {
                    console.log(ifExists(magazineLetter, index, alreadyCheckedChars));
                    result.push(magazineLetter);
                } else {
                    alreadyCheckedChars.push({ char: magazineLetter, index });
                }
                break;
            }

        }     
    });

    console.log(alreadyCheckedChars);
    return result.length === ransomNote.length;
};

console.log(canConstruct("aab", "aab"));  // true
// console.log(canConstruct("aa", "aab")); // true
// console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi")); // false