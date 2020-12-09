// Task

// Condition 
// - all characters from note should exists in magazine;
// - number of letters is important  

// Solution 1
// convert magazine to array
// iterate through note string and remove letters from magazine array if found, if not found break loop and return false
// case sensitive ?

let magazine = 'aabbbccdd'

const buildRansomeNote = (note) => {
    if (note.length == 0) 
        return false;

    let result = true;
    let magazine_array = magazine.split('');
    for(i = 0; i < note.length; i++) {
        index = magazine_array.indexOf(note[i]);
        if (index < 0) {
            result = false;
            break;
        }
        magazine_array.splice(index,1);
    }

    return result;
};
//Complexity - O(N) ? Space 

// Solution 2 
// Let's think how to optimize previous one.
// So we can use reduce function for this purpose but how to check complexity and space for it?

const checkNote = note => {
    const initialValue = {text: magazine.split(''), result: note.length > 0};

    const reduceFunction = (acc,letter) => {
        if (acc.result) {
            index = acc.text.indexOf(letter);
            if ( index < 0) {
                acc.result = false;
            }
            acc.text.splice(index,1);
        };
        return acc
    }
    
    let a = note.split('').reduce(reduceFunction, initialValue);
    return a.result;
}