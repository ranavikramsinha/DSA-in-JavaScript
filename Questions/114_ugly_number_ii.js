//* https://leetcode.com/problems/ugly-number-ii/

var nthUglyNumber = function(n) {
    let t = new Array(n + 1);
    t[1] = 1;
    let i2 = 1;
    let i3 = 1;
    let i5 = 1;

    for(let i = 2; i <= n ; i++){
        let i2thUgly = t[i2] * 2;
        let i3thUgly = t[i3] * 3;
        let i5thUgly = t[i5] * 5;

        t[i] = Math.min(i2thUgly, i3thUgly, i5thUgly);

        if(t[i] === i2thUgly){
            i2++;
        }

        if(t[i] === i3thUgly){
            i3++;
        }

        if(t[i] === i5thUgly){
            i5++;
        }
    }

    return t[n];
};