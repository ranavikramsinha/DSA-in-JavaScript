//* https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {

    if(strs.length === 0){
        return '';
    }
    
    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1);

            if(prefix === ''){
                return '';
            }
        }
    }

    return prefix;
};

//* let strs = ["flower", "flow", "flight"];
//*
//* Initialization:
//* prefix = "flower"
//*
//* First Iteration (i = 1):
//* Compare prefix = "flower" with strs[1] = "flow".
//* "flow".indexOf("flower") returns -1, so "flower" is not a prefix of "flow".
//* Reduce prefix to "flowe".
//* "flow".indexOf("flowe") returns -1, so reduce prefix to "flow".
//* "flow".indexOf("flow") returns 0, so "flow" is a valid prefix.
//*
//* Second Iteration (i = 2):
//* Compare prefix = "flow" with strs[2] = "flight".
//* "flight".indexOf("flow") returns -1, so "flow" is not a prefix of "flight".
//* Reduce prefix to "flo".
//* "flight".indexOf("flo") returns -1, so reduce prefix to "fl".
//* "flight".indexOf("fl") returns 0, so "fl" is a valid prefix.
//* End of Loop:
//* 
//* The loop ends as all strings have been processed, and the final prefix is "fl".