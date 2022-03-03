// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

const nextGreatestLetter = (letters, target) => {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return letters[start % letters.length];
};
