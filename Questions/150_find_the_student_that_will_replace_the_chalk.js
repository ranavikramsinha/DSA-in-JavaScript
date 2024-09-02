//* https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/

var chalkReplacer = function(chalk, k) {

    let n = chalk.length;
    let sumOfChalk = chalk.reduce((a, b) => a + b, 0);
    let remainingChalk = k % sumOfChalk;

    for(let i = 0; i < n; i++){
        if(remainingChalk < chalk[i]){
            return i;
        }

        remainingChalk -= chalk[i];
    }

    return -1;
};