//* https://leetcode.com/problems/dota2-senate/description/

var predictPartyVictory = function(senate) {
    let radiantParty = []
    let direParty = []
    const n = senate.length

    for(let i = 0; i < n; i++){
        if(senate[i] === "R"){
            radiantParty.push(i + n)
        }
        else if(senate[i] !== "R"){
            direParty.push(i + n)
        }
    }

    while(radiantParty.length > 0 && direParty.length > 0){
        if(radiantParty[0] < direParty[0]){
            radiantParty.push(radiantParty[0] + n)
        }
        else if(radiantParty[0] > direParty[0]){
            direParty.push(direParty[0] + n)
        }

        radiantParty.shift()
        direParty.shift()
    }

    return (radiantParty.length > 0) ? "Radiant" : "Dire"
};

console.log(predictPartyVictory("RDDRRD"));
console.log(predictPartyVictory("RDDDRD"));
console.log(predictPartyVictory("DRRRDR"));
console.log(predictPartyVictory("DRRDDR"));