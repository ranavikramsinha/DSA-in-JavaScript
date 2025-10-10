//* https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/

//* tc : O(n) | sc : O(1)

var maximumEnergy = function(energy, k) {

    let n = energy.length;

    for (let i = n - k - 1; i >= 0; i--) {
        energy[i] = energy[i + k] + energy[i];
    }

    return  Math.max(...energy);

};