//* https://leetcode.com/problems/search-suggestions-system/

var suggestedProducts = function(products, searchWord) {

    products.sort();

    let result = Array.from(Array(searchWord.length), () => new Array());

    for(let product of products){
        const k = prefix(product);

        for(let i = 0; i < k; i++){
            if(result[i].length < 3){
                result[i].push(product);
            }
        }
    }

    return result;

    function prefix(word){
        let count = 0;
        const maxLength = Math.min(word.length, searchWord.length);

        for(let i = 0; i < maxLength; i++){
            if(word[i] !== searchWord[i]){
                return count
            }

            count++;
        }
        
        return count;
    }
    
};