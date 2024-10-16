//* https://leetcode.com/problems/longest-happy-string/

//* tc O(a + b + c) | sc O(1)
var longestDiverseString = function(a, b, c) {
    let result = "";

    let counts = [
        {count: a, char: 'a'},
        {count: b, char: 'b'},
        {count: c, char: 'c'},
    ];

    while(true){
        counts.sort((x, y) => y.count - x.count);

        let first = counts[0];
        let second = counts[1];

        if(first.count === 0){
            break;
        }

        if(result.length >= 2 && result[result.length - 1] === first.char && result[result.length - 2] === first.char){
            if(second.count === 0){
                break;
            }

            result += second.char;
            second.count--;
        }
        else{
            result += first.char;
            first.count--;
        }
    }

    return result;
};