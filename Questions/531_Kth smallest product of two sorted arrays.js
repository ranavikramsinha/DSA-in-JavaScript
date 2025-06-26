//* https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/

//* tc O(m * log(n)) * log(r) | sc (1) where m is nums1 and n is nums2, where r is outer loop 

var kthSmallestProduct = function(nums1, nums2, k) {

    let left = -(10 ** 10);
    let right = 10 ** 10;

    let result = 0;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        let countSmallest = findSmallestProduct(nums1, nums2, middle);

        if(countSmallest >= k){
            result = middle;
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }

    return result;

    function findSmallestProduct(nums1, nums2, threshold){
        let countNumberOfProduct = 0;

        let n = nums2.length;

        for(let i = 0; i < nums1.length; i++){
            if(nums1[i] >= 0){
                let left = 0;
                let right = n - 1;
                let m = -1;

                while(left <= right){
                    let middle = left + Math.trunc((right - left) / 2);
                    let product = nums1[i] * nums2[middle];

                    if(product <= threshold){
                        m = middle;
                        left = middle + 1;
                    }
                    else{
                        right = middle - 1;
                    }
                }

                countNumberOfProduct += (m + 1);
            }
            else{
                let left = 0;
                let right = n - 1;
                let m = n;

                while(left <= right){
                    let middle = left + Math.trunc((right - left) / 2);
                    let product = nums1[i] * nums2[middle];

                    if(product <= threshold){
                        m = middle;
                        right = middle - 1;
                    }
                    else{
                        left = middle + 1;
                    }
                }

                countNumberOfProduct += (n - m);
            }
        }

        return countNumberOfProduct;
    }
    
};