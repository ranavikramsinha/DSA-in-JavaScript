//* https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function(nums1, nums2) {

    if(nums1.length > nums2.length){
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;

    let left = 0;
    let right = m;

    while(left <= right){
        let leftSide = left + Math.trunc((right - left) / 2);
        let rightSide = Math.trunc((m + n + 1) / 2) - leftSide;

        let leftHalf1 = (leftSide === 0) ? -Infinity : nums1[leftSide - 1];
        let leftHalf2 = (rightSide === 0) ? -Infinity : nums2[rightSide - 1];
        let rightHalf3 = (leftSide === m) ? Infinity : nums1[leftSide];
        let rightHalf4 = (rightSide === n) ? Infinity : nums2[rightSide];

        if(leftHalf1 <= rightHalf4 && leftHalf2 <= rightHalf3){
            if((m + n) % 2 === 1){
                return Math.max(leftHalf1, leftHalf2);
            }

            return (Math.max(leftHalf1, leftHalf2) + Math.min(rightHalf3, rightHalf4)) / 2;
        }

        if(leftHalf1 > rightHalf4){
            right = leftSide - 1;
        }
        else{
            left = leftSide + 1;
        }
    }

    return -1;
};