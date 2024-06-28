//* https://leetcode.com/problems/reverse-words-in-a-string/

// var reverseWords = function (s) {
//   let stringIntoArray = s.split(" ").filter((word) => word !== "");

//   console.log(stringIntoArray);

//   let result = "";

//   for (let i = stringIntoArray.length - 1; i >= 0; i--) {
//     result += stringIntoArray[i] + " ";
//   }

//   return result.trim(); //* for last space
// };

// var reverseWords = function (s) {
//   let string = s.split(" ").filter((word) => word !== "").reverse().join(" ");
//   return string;
// };

var reverseWords = function (s) {
  let string = s.split(" ").filter((word) => word).reverse().join(" ");
  return string;
};

console.log(reverseWords("  hello world  "));

// var reverseWords = function(s){

//     let result = []
//     let length = s.length

//     let word = ""

//     for(let i = 0; i < length; i++){
//         if(s[i] !== " "){
//             word += s[i]
//         }
//         else if(word.length > 0){
//             result.unshift(word)
//             word = ""
//         }
//     }

//     if(word.length > 0){
//         result.unshift(word)
//     }

//     return result.join("")

// }
