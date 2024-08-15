//* https://leetcode.com/problems/text-justification/

var fullJustify = function(words, maxWidth) {
    let result = [];
    let i = 0;
    let n = words.length;

    while(i < n){
        let lettersCount = words[i].length;
        let j = i + 1;

        while(j < n && lettersCount + words[j].length + (j - i) <= maxWidth){
            lettersCount += words[j].length;
            j++;
        }

        let line = [];
        let spaceSlots = j - i - 1;

        if(j === n || spaceSlots === 0){
            for(let k = i; k < j; k++){
                line.push(words[k]);

                if(k < j - 1){
                    line.push(' ');
                }
            }

            while(line.join('').length < maxWidth){
                line.push(' ');
            }
        }
        else{
            let totalSpaces = maxWidth - lettersCount;
            let space = Math.floor(totalSpaces / spaceSlots);
            let extraSpace = totalSpaces % spaceSlots;

            for(let k = i; k < j; k++){
                line.push(words[k]);

                if(k < j - 1){
                    line.push(' '.repeat(space + (extraSpace > 0 ? 1 : 0)));

                    if(extraSpace > 0){
                        extraSpace--;
                    }
                }
            }
        }

        result.push(line.join(''));
        i = j;
    }

    return result;
};