//* https://leetcode.com/problems/maximize-the-minimum-powered-city/

//* tc : O(n * log(k)) | sc : O(n)

var maxPower = function(stations, r, k) {

    let n = stations.length;
    let count = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        let left = Math.max(0, i - r);
        let right = Math.min(n, i + r + 1);
        
        count[left] += stations[i];
        count[right] -= stations[i];
    }

    let low = Math.min(...stations);
    let high = stations.reduce((a, b) => a + b, 0) + k;
    let result = 0;

    while (low <= high) {
        let middle = Math.floor(low +  (high - low) / 2);

        if (check(middle)) {
            result = middle;
            low = middle + 1;
        }
        else {
            high = middle - 1;
        }
    }

    return result;

    function check(val) {
        let diff = [...count];
        let sum = 0;
        let remaining = k;

        for (let i = 0; i < n; i++) {
            sum += diff[i];
            
            if (sum < val) {
                let add = val - sum;

                if (remaining < add) {
                    return false;
                }

                remaining -= add;

                let end = Math.min(n, i + 2 * r + 1);

                diff[end] -= add;
                sum += add;
            }
        }

        return true;
    };
};