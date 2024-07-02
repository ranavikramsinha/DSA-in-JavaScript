//* https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

var findDifference = function(nums1, nums2) {

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const newSet1 = [...set1].filter(num => !set2.has(num))
    const newSet2 = [...set2].filter(num => !set1.has(num))

    return [newSet1, newSet2]
    
};

console.log(findDifference([1, 2, 3, 4], [3, 4, 5, 6]))

//* Initial Arrays:
//* nums1: [1, 2, 3, 4]
//* nums2: [3, 4, 5, 6]
//* 
//* Step-by-step:
//* 
//* 1. Convert nums1 to set1:
//*    set1 = {1, 2, 3, 4}
//* 
//* 2. Convert nums2 to set2:
//*    set2 = {3, 4, 5, 6}
//* 
//* 3. Find elements in set1 but not in set2:
//*    Iterate through set1:
//*    - 1 is not in set2 => include in newSet1
//*    - 2 is not in set2 => include in newSet1
//*    - 3 is in set2 => skip
//*    - 4 is in set2 => skip
//*    Result: newSet1 = [1, 2]
//* 
//* 4. Find elements in set2 but not in set1:
//*    Iterate through set2:
//*    - 3 is in set1 => skip
//*    - 4 is in set1 => skip
//*    - 5 is not in set1 => include in newSet2
//*    - 6 is not in set1 => include in newSet2
//*    Result: newSet2 = [5, 6]
//* 
//* 5. Return the result:
//*    [[1, 2], [5, 6]]
//* 