var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  function gcd(s1, s2) {
    if (s2.length === 0) {
      return s1;
    }

    return gcd(s2, s1.slice(0, s1.length % s2.length));
  }

  return gcd(s1, s2);
};

//* gcd euclidean algorithm

// var gcdOfStrings = function(str1, str2) {

//     let s1 = "ABCABCABC"
//     let s2 = "ABCABC"

//     const gcd = s1.slice(0, s1.length % s2.length)

//     console.log((s1.length % s2.length))

//     console.log(gcd)

// };

// gcdOfStrings()
