/**
 * Text - Index and Search
You want to create a toy text search engine. The goal here is to focus on problem solving, runtime & space complexity, and managing computing resources - no need to focus on advanced NLP.
The Problem - Part 1
Implement 2 methods:
void index(string sentence)
array<string> search(string word)
Index simply loads data into your system (memory). Search then operates against the sentences that have been indexed, returning any sentence that contains the given word. Search is only ever called with a single word ie "cheese" and never "two words".
Example Behavior
index("I like cheese")
index("We hate cheese")
search("cheese") // => ["I like cheese", "We hate cheese"]
search("hate")   // => ["We hate cheese"]
search("foo")    // => []
 */
let sentenceDictionary = [];
let wordDictionary = {};
const index = (sentence) => {
    let sentenceIndex = sentenceDictionary.indexOf(sentence);
    if (sentenceIndex < 0) {
        sentenceDictionary.push(sentence);
        sentenceIndex = sentenceDictionary.indexOf(sentence);
    }
    sentence.split(' ').forEach(word => {
        if (wordDictionary[word]) {
            wordDictionary[word].push(sentenceIndex)
        } else {
            wordDictionary[word] = [sentenceIndex]
        }
    });
}
const search = (word) => {
    let sentenceIndexes = wordDictionary[word]
        ? wordDictionary[word]
        : [];
    return sentenceIndexes.map(index => sentenceDictionary[index]);
}

const number = 10000;
for (let i = 0; i < number; i++) {
    index(`I like cheese ${i}`);
}
for (let i = 0; i < number; i++) {
    index(`I hate cheese ${i}`);
}
for (let i = 0; i < number; i++) {
    index(`Some other cheese ${i}`);
}

const searchNumber = 5000;
for (let i = 0; i < searchNumber; i++) {
    search('cheese');
}
for (let i = 0; i < searchNumber; i++) {
    search('I');
}
for (let i = 0; i < searchNumber; i++) {
    search('other');
}

console.log("FINISH");
