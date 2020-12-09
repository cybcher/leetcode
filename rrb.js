const ransomNote = "aa";
const magazine ="aab";
    // "haskellh for Mac is an easy-to-use integrated programming environment for Haskell on OS X. It is a one-click install of a complete Haskell system";


let exclude = [];

findLetter = (magazine, char, start) => {
    let s = magazine.indexOf(char, start);
    if (s >= 0) {
        if (exclude.indexOf(s) >= 0) {
            return findLetter(magazine, char, s + 1);
        } else {
            exclude.push(s);
            return true
        }
    }
    return false;
}

checkNote = (note, magazine) => {
    let i = 0;
    while (i < note.length  && findLetter(magazine, note[i], 0)) {
        i++;
    }
    console.log(i);
    console.log(note.length);
    return note.length === i;
}
console.log(checkNote(ransomNote, magazine));

// const checkNote = note => {
//     let exclude = [];
//     let result = true;
//     for (i = 0; i < note.length; i++) {
//         a = note[i];
//         start = exclude[a] ? exclude[a] : 0;
//         index = magazine.indexOf(a, start);
//         if (index < 0) {
//             result = false;
//             break;
//         }
//         exclude[a] = index;
//     }
//     return result;
// }


noteInMagazine = (magazine, note) => {
    magazine = magazine.toLowerCase();
    for (let i = 0; i < note.length; i++) {
        let regex = new RegExp(note[i], "g");
        let mCount = magazine.match(regex);
        let nCount = note.match(regex);
        if (mCount == null) {
            return false;
        }

        if (mCount.length < nCount.length) {
            return false;
        }
    }

    return true;
};

// console.log(noteInMagazine(magazine, ransomNote));
//Good idea)