//* https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/

//* tc O(n) | sc O(n)

var robotWithString = function(s) {

    let n = s.length;
    let arr = new Array(n);
    arr[n - 1] = s[n - 1];

    let t = [];
    let p = [];

    for(let i = n - 2; i >= 0; i--){
        arr[i] = s[i] < arr[i + 1] ? s[i] : arr[i + 1]; 
    }

    let i = 0;

    while(i < n){
        t.push(s[i]);

        let minimumCharacter = ((i + 1) < n) ? arr[i + 1] : s[i];

        while(t.length > 0 && t[t.length - 1] <= minimumCharacter){
            let addPopCharacter = t.pop();
            p.push(addPopCharacter);
        }

        i++;
    }

    while(t.length > 0){
        let remainingCharacterInT = t.pop();
        p.push(remainingCharacterInT);
    }

    return p.join('');
    
};