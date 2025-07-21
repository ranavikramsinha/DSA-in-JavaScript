//* https://leetcode.com/problems/delete-characters-to-make-fancy-string/

//* tc O(n) | sc O(1)

var makeFancyString = function(s) {

    let n = s.length;
    let str = "";

    str += s[0];

    let frequency = 1;

    for(let i = 1; i < n; i++){
        if(s[i] === str[i - 1]){
            frequency++;

            if(frequency < 3){
                str += s[i];
            }
        }
        else{
            str += s[i];
            frequency = 1;
        }
    }

    return str;
    
};