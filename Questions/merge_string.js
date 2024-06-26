//* https://leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function (word1, word2) {
  let merge = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    merge += word1[i];
    i++;
    merge += word2[j];
    j++;
  }

  while (i < word1.length) {
    merge += word1[i];
    i++;
  }

  while (i < word1.length) {
    merge += word2[i];
    j++;
  }

  return merge;
};
