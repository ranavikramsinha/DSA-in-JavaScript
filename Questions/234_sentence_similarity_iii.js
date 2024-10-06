//* https://leetcode.com/problems/sentence-similarity-iii/

var areSentencesSimilar = function(sentence1, sentence2) {

    if(sentence1.length < sentence2.length){
        let temp = sentence1;
        sentence1 = sentence2;
        sentence2 = temp;
    }

    let arr1 = sentence1.split(" ");
    let arr2 = sentence2.split(" ");

    let i = 0;
    let j = arr1.length - 1;

    let k = 0;
    let l = arr2.length - 1;

    while(k < arr2.length && i < arr1.length && arr2[k] === arr1[i]){
        k++;
        i++;
    }

    while(l >= k && arr2[l] === arr1[j]){
        l--;
        j--;
    }

    return l < k;
    
};