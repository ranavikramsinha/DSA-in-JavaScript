//* https://leetcode.com/problems/kth-distinct-string-in-an-array

// var kthDistinct = function(arr, k) {

//     let n = arr.length;
//     let doubleChar = [];
//     let singleChar = [];

//     for(let i = 0; i < n; i++){
//         let count = 0;
//         for(let j = 0; j < n; j++){
//             if(arr[i] === arr[j]){
//                 count++;
//             }
//         }
//         if(count > 1){
//             doubleChar.push(arr[i]);
//         }
//         else if(count === 1){
//             singleChar.push(arr[i]);
//         }
//     }

//     if(singleChar.length > 0 && singleChar[k - 1]){
//         return singleChar[k - 1]
//     }
//     else{
//         return '';
//     }
    
// };

// var kthDistinct = function(arr, k) {

//     let distinct = new Set();
//     let duplicate = new Set();

//     for(const str of arr){

//         if(distinct.has(str)){
//             distinct.delete(str);
//             duplicate.add(str);
//         }
//         else{
//             distinct.add(str);
//         }
//     }

//     for(const str of arr){
//         if(!duplicate.has(str)){
//             k--;
//         }

//         if(k === 0){
//             return str;
//         }
//     }

//     return "";
    
// };

var kthDistinct = function(arr, k) {

    let map = {};

    for(const str of arr){
        if(!map[str]){
            map[str] = 1;
        }
        else{
            map[str]++;
        }
    }

    for(const str of arr){
        if(map[str] > 1){
            continue;
        }

        k--;

        if(k === 0){
            return str;
        }
    }

    return "";
    
};