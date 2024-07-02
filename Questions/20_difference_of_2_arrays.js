//* https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

var findDifference = function(nums1, nums2) {

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const newSet1 = [...set1].filter(num => !set2.has(num))
    const newSet2 = [...set2].filter(num => !set1.has(num))

    return [newSet1, newSet2]
    
};