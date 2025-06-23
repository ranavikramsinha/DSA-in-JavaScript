//* https://leetcode.com/problems/sum-of-k-mirror-numbers/

//* tc O((10 ** D / 2) * D) | sc O(D) where D is log10N

var kMirror = function(k, n) {

    let result = 0;
    let len = 1;

    while(n > 0){
        let halfLength = Math.trunc((len + 1) / 2);

        let minimumNumber = Math.pow(10, halfLength - 1);;
        let maximumNumber = Math.pow(10, halfLength) - 1;

        for(let i = minimumNumber; i <= maximumNumber && n > 0; i++){
            if(len === 1){
                if(isPalindrome(i, k)){
                    result += i;
                    n--;
                }
            }
            else if(len % 2 !== 0){
                let str = String(i) + String(i).split("").reverse().join("").substr(1);
                let number = Number(str);

                if(isPalindrome(number, k)){
                    result += number;
                    n--;
                }
            }
            else if(len % 2 === 0){
                let str = String(i) + String(i).split("").reverse().join("");
                let number = Number(str);

                if(isPalindrome(number, k)){
                    result += number;
                    n--;
                }
            }
        }

        len++;
    }

    return result;

    function isPalindrome(num){
        let str = "";

        while(num > 0){
            str += num % k;
            num = Math.trunc(num / k);
        }

        for(let i = 0; i < str.length/2; i++){
            if(str[i] !== str[str.length - 1 - i]){
                return false;
            }
        }

        return true;
    }
    
};