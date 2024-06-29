//* https://leetcode.com/problems/is-subsequence/description/

// var isSubsequence = function (s, t) {
//   let sPosition = 0;

//   for (const char of t) {
//     if (sPosition === s.length) {
//       break;
//     }

//     if (s[sPosition] === char) {
//       sPosition++;
//     }
//   }

//   return sPosition === s.length;
// };

var isSubsequence = function (s, t) {
  let sPosition = 0;

  if (sPosition === s.length) {
    return true;
  }
  for (const char of t) {
    if (s[sPosition] === char) {
      sPosition++;
    }
  }

  return sPosition === s.length;
};
