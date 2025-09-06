//* https://leetcode.com/problems/minimum-operations-to-make-array-elements-zero/

//* tc : O(m * log(r_max)) | sc : O(1)

var minOperations = function(queries) {

    let totalOperations = 0n;

    for (const [left, right] of queries) {
        let steps = getSteps(left, right);
        totalOperations += (steps + 1n) / 2n;
    }

    return totalOperations <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(totalOperations) : totalOperations.toString();

    function getSteps(left, right) {
        let blockStart = 1n;
        let weight = 1n;
        let totalSteps = 0n;

        const L = BigInt(left);
        const R = BigInt(right);

        while (blockStart <= R) {
            let blockEnd = 4n * blockStart - 1n;
            let overlapStart = L > blockStart ? L : blockStart;
            let overlapEnd = R < blockEnd ? R : blockEnd;

            if (overlapStart <= overlapEnd) {
                let overlapCount = overlapEnd - overlapStart + 1n;
                totalSteps += overlapCount * weight;
            }

            weight += 1n;
            blockStart *= 4n;
        }

        return totalSteps;
    }
    
};