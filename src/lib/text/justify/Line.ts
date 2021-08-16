import { random } from "@lib/random";

/**
 * Represents a line as an array of word. it keeps track of the
 * total length of the words (spaces too)
 */

export class Line {
  length: number = 0;

  words: string[] = [];

  /**
   * Adds a new word and increase the line length
   * @params the word to add
   * @returns the words array length
   */

  push(word: string) {
    this.length += word.length;
    return this.words.push(word);
  }

  /**
   * Removes the last word of the words array and returns it.
   */

  pop() {
    const word = this.words.pop();
    if (word) this.length -= word.length;
    return word;
  }

  /**
   * Adds a space at a random position (except the last) of the words array. Iterates `n` times
   * @param n
   */

  addRandomSpace = (n: number) => {
    for (let i = 0; i < n; i += 1) {
      this.words[random(0, this.words.length - 2)] += " ";
      this.length += 1;
    }
  };

  /**
   * Enlarges all spaces by 1, it assumes that spaces are at impair positions
   */

  enlargeSpace = () => {
    for (let i = 1; i < this.words.length; i += 2) {
      this.words[i] += " ";
      this.length += 1;
    }
  };

  /**
   * @returns the words array as a string
   */

  toString = () => this.words.join("");
}
