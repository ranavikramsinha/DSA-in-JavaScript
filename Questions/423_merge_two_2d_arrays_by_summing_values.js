//* https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/

//* tc O(m + n) | sc O(m + n)

var mergeArrays = function(nums1, nums2) {

    let m = nums1.length;
    let n = nums2.length;
    let i = 0;
    let j = 0;
    let result = [];

    while(i < m && j < n){
        if(nums1[i][0] < nums2[j][0]){
            result.push(nums1[i]);
            i++;
        }
        else if(nums2[j][0] < nums1[i][0]){
            result.push(nums2[j]);
            j++;
        }
        else{
            result.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++;
            j++;
        }
    }

    while(i < m){
        result.push(nums1[i]);
        i++;
    }

    while(j < n){
        result.push(nums2[j]);
        j++;
    }

    return result;
    
};