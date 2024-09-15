//* https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/

var findTheLongestSubstring = function(s) {
    let map = new Map();
    let vowelCount = new Array(5).fill(0);
    let currentState = '00000';
    map.set(currentState, -1);
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a'){
            vowelCount[0] = (vowelCount[0] + 1) % 2;
        }
        if(s[i] === 'e'){
            vowelCount[1] = (vowelCount[1] + 1) % 2;
        }
        if(s[i] === 'i'){
            vowelCount[2] = (vowelCount[2] + 1) % 2;
        }
        if(s[i] === 'o'){
            vowelCount[3] = (vowelCount[3] + 1) % 2;
        }
        if(s[i] === 'u'){
            vowelCount[4] = (vowelCount[4] + 1) % 2;
        }

        currentState = vowelCount.join('');

        if(map.has(currentState)){
            maxLength = Math.max(maxLength, i - map.get(currentState))
        }
        else{
            map.set(currentState, i);
        }
    }
    return maxLength;
};
//* 
//* String: "eleetminicoworoep"
//* 
//* Index   Char  Vowel Count        State   Map                     Max Length
//* ---------------------------------------------------------------------------
//* -1      -     [0,0,0,0,0]       00000   {'00000': -1}           0  (Initial)
//*  0      e     [0,1,0,0,0]       01000   {'00000': -1, 
//*                                           '01000': 0}            0
//*  1      l     [0,1,0,0,0]       01000   (state already exists) 
//*                                                                   => maxLength = 1 - 0 = 1
//*  2      e     [0,0,0,0,0]       00000   (state already exists) 
//*                                                                   => maxLength = 2 - (-1) = 3
//*  3      e     [0,1,0,0,0]       01000   (state already exists) 
//*                                                                   => maxLength = 3
//*  4      t     [0,1,0,0,0]       01000   (state already exists)
//*                                                                   => maxLength = 4
//*  5      m     [0,1,0,0,0]       01000   (state already exists)
//*                                                                   => maxLength = 5
//*  6      i     [0,1,1,0,0]       01100   {'00000': -1, 
//*                                           '01000': 0, 
//*                                           '01100': 6}            5
//*  7      n     [0,1,1,0,0]       01100   (state already exists)
//*                                                                   => maxLength = 5
//*  8      i     [0,1,0,0,0]       01000   (state already exists) 
//*                                                                   => maxLength = 8 - 0 = 8
//*  9      c     [0,1,0,0,0]       01000   (state already exists) 
//*                                                                   => maxLength = 9
//* 10      o     [0,1,0,1,0]       01010   {'00000': -1, 
//*                                           '01000': 0, 
//*                                           '01100': 6, 
//*                                           '01010': 10}           9
//* 11      w     [0,1,0,1,0]       01010   (state already exists)
//*                                                                   => maxLength = 9
//* 12      o     [0,1,0,0,0]       01000   (state already exists) 
//*                                                                   => maxLength = 12 - 0 = 12
//* 13      r     [0,1,0,0,0]       01000   (state already exists)
//*                                                                   => maxLength = 13
//* 14      o     [0,1,0,1,0]       01010   (state already exists)
//*                                                                   => maxLength = 13
//* 15      e     [0,0,0,1,0]       00010   {'00000': -1, 
//*                                           '01000': 0, 
//*                                           '01100': 6, 
//*                                           '01010': 10, 
//*                                           '00010': 15}           13
//* 16      p     [0,0,0,1,0]       00010   (state already exists)
//*                                                                   => maxLength = 13
//* 