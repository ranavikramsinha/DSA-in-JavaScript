//* https://leetcode.com/problems/find-the-original-typed-string-ii/

//* tc O(n + m + m * k) = O(n + n * k) = O(n * k) | sc O(m * k)

var possibleStringCount = function(word, k) {

    let n = word.length;
    let modulo = 10 ** 9 + 7;

    if(k > n){
        return 0;
    }

    let frequencyOfCharacters = [];
    let count = 1;

    for(let i = 1; i < n; i++){
        if(word[i] === word[i - 1]){
            count++;
        }
        else{
            frequencyOfCharacters.push(count);
            count = 1;
        }
    }

    frequencyOfCharacters.push(count);

    let product = 1;
    
    for(let num of frequencyOfCharacters){
        product = (product * num) % modulo;
    }

    if(frequencyOfCharacters.length >= k){
        return product;
    }

    let m = frequencyOfCharacters.length;
    let bottomUp = Array.from({ length: m + 1}, () => new Array(k + 1).fill(0));

    for(let count = 0; count < k; count++){
        bottomUp[m][count] = 1;
    }

    for(let i = m - 1; i >= 0; i--){
        let prefix = new Array(k + 1).fill(0);

        //* sum of 0 to h - 1
        for(let h = 1; h <= k; h++){
            prefix[h] = (prefix[h - 1] + bottomUp[i + 1][h - 1]) % modulo;
        }

        for(let count = k - 1; count >= 0; count--){
            let left = count + 1;
            let right = count + frequencyOfCharacters[i];

            if(right + 1 > k){
                right = k - 1;
            }

            if(left <= right){
                bottomUp[i][count] = (prefix[right + 1] - prefix[left] + modulo) % modulo;
            }
        }
    }

    let invalidCount = bottomUp[0][0];

    return (product - invalidCount + modulo) % modulo;
    
};