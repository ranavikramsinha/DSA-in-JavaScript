//* https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/

var maxUniqueSplit = function(s) {
    let set = new Set();
    let maximumCount = 0;

    solve(s, 0, 0);

    return maximumCount;

    function solve(s, index, currentCount){
        if(currentCount + (s.length - index) <= maximumCount){
            return;
        }

        if(index === s.length){
            maximumCount = Math.max(maximumCount, currentCount);
            return;
        }

        for(let j = index; j < s.length; j++){
            let subString = s.substring(index, j + 1);

            if(!set.has(subString)){
                set.add(subString);

                solve(s, j + 1, currentCount + 1);
                set.delete(subString);
            }
        }
    }

};