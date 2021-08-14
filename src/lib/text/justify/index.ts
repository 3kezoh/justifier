/**
 * https://www.rose-hulman.edu/class/csse/csse221/200910/Projects/Markov/justification.html
 */

import { Line } from "./Line";

const MAX_LINE_LENGTH = 80;

/**
 * Justifies a string by adding whitespace, the lines have a maximum
 * length of 80.
 * @param s the string to justify
 * @returns the justified string
 */

export const justify = (s: string) => {
  let justifiedText = "";
  let line = new Line();

  for (const word of s.split(/\s+/)) {
    if (line.length + word.length > MAX_LINE_LENGTH) {
      if (line.words[line.words.length - 1] === " ") line.pop();

      let m = MAX_LINE_LENGTH - line.length;
      let n = Math.floor(line.words.length / 2);

      if (m === n) line.enlargeSpace();
      if (m < n) line.addRandomSpace(m);

      if (m > n) {
        while (m >= n && m !== 0) {
          line.enlargeSpace();
          m -= n;
        }
        if (m < n) line.addRandomSpace(m);
      }

      justifiedText = justifiedText.concat(line.toString(), "\n");
      line = new Line();
    }
    line.push(word);
    if (line.length < MAX_LINE_LENGTH) line.push(" ");
  }
  justifiedText += line.toString();
  return justifiedText;
};
