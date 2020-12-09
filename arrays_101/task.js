// Problem #1 quick solution
class SearchToyProblemOneQuick {
  constructor() {
    this.memory = [];
  }

  index(string) {
    this.memory.push(string);
  }

  search(word) {
    let words = word.split(" ");
    if (word.split(" ").length > 1) {
      word = words[0];
    }
    const result = [];
    for (let index = 0, count = this.memory.length; index < count; index++) {
      const string = this.memory[index];
      if (string.indexOf(word) > 1) {
        result.push(string);
      }
    }
    return result;
  }
}

const searchToyProblemOneQuick = new SearchToyProblemOneQuick();
searchToyProblemOneQuick.index("I like cheese");
searchToyProblemOneQuick.index("We hate cheese");
console.log(searchToyProblemOneQuick.search("cheese qe")); // => ["I like cheese", "We hate cheese"]
console.log(searchToyProblemOneQuick.search("hate")); // => ["We hate cheese"]
console.log(searchToyProblemOneQuick.search("foo")); // => []

// Problem #1 with complex tree saving
class SearchToyProblemOneComplex {
  constructor() {
    this.memory = [];
  }

  index(string) {
    const splittedString = string.split(" ");
    for (let index = 0, count = splittedString.length; index < count; index++) {
      let word = splittedString[index];
      if (this.memory[word] !== undefined) {
        this.memory[word].push(string);
        continue;
      }
      this.memory[word] = [string];
    }
  }

  search(word) {
    let words = word.split(" ");
    if (word.split(" ").length > 1) {
      word = words[0];
    }
    return this.memory[word];
  }
}

const searchToyProblemOneComplex = new SearchToyProblemOneComplex();
searchToyProblemOneComplex.index("I like cheese");
searchToyProblemOneComplex.index("We hate cheese");
console.log(searchToyProblemOneComplex.search("cheese")); // => ["I like cheese", "We hate cheese"]
console.log(searchToyProblemOneComplex.search("hate")); // => ["We hate cheese"]
console.log(searchToyProblemOneComplex.search("foo")); // => []

// Problem #2
class SearchToyProblemTwo {
  constructor() {
    this.dbMemory = [];
    this.inMemory = [];
  }

  incrementInMemoryWord(word) {
    if (this.inMemory[word] === undefined) {
      this.inMemory[word] = [1];
    } else {
      this.inMemory[word][0] = parseInt(this.inMemory[word]) + 1;
    }
    const inMemoryLength = Object.keys(this.inMemory).length;
    if (inMemoryLength > 10) {
      delete this.inMemory[Object.keys(this.inMemory)[0]];
    }
  }

  getInMemoryResult(word) {
    return this.inMemory[word] !== undefined &&
      this.inMemory[word][1] !== undefined
      ? this.inMemory[word][1]
      : [];
  }

  saveInMemoryResult(word, strings) {
    this.inMemory[word][1] = strings;
  }

  index(string) {
    const splittedString = string.split(" ");
    for (let index = 0, count = splittedString.length; index < count; index++) {
      let word = splittedString[index];
      if (this.dbMemory[word] !== undefined) {
        this.dbMemory[word].push(string);
        continue;
      }
      this.dbMemory[word] = [string];
    }
  }

  search(word) {
    this.incrementInMemoryWord(word);
    let words = word.split(" ");
    if (word.split(" ").length > 1) {
      word = words[0];
    }
    const inMemoryResult = this.getInMemoryResult(word);
    const result = inMemoryResult.length ? inMemoryResult : this.dbMemory[word];
    this.saveInMemoryResult(word, result);
    return result;
  }
}

const searchToyProblemTwo = new SearchToyProblemTwo();
searchToyProblemTwo.index("I like cheese");
searchToyProblemTwo.index("We hate cheese");
console.log(searchToyProblemTwo.search("cheese")); // => ["I like cheese", "We hate cheese"]
searchToyProblemTwo.search("cheese");
searchToyProblemTwo.search("cheese");
searchToyProblemTwo.search("cheese");
searchToyProblemTwo.search("cheese");
console.log(searchToyProblemTwo.search("hate")); // => ["We hate cheese"]
searchToyProblemTwo.search("hate");
searchToyProblemTwo.search("hate");
searchToyProblemTwo.search("hate");
console.log(searchToyProblemTwo.search("foo")); // => undefined
searchToyProblemTwo.search("foo");
searchToyProblemTwo.search("foo");
searchToyProblemTwo.search("foo1");
searchToyProblemTwo.search("foo2");
searchToyProblemTwo.search("foo3");
searchToyProblemTwo.search("foo4");
searchToyProblemTwo.search("foo5");
searchToyProblemTwo.search("foo6");
searchToyProblemTwo.search("foo7");
// searchToyProblemTwo.search("foo8");                // should delete from in memory word
// console.log(searchToyProblemTwo.search("foo9"));   // should delete from in memory word
console.log(searchToyProblemTwo.inMemory);
