//* https://leetcode.com/problems/minimum-total-distance-traveled/

//* tc O(nlogn + mlogm + n * m * maxcapacity) | sc O(n * m)
var minimumTotalDistance = function(robotPositions, factoryPositionsAndCapacities) {

    robotPositions.sort((a, b) => a - b);
    factoryPositionsAndCapacities.sort((a, b) => a[0] - b[0]);

    const numRobots = robotPositions.length;
    const numFactories = factoryPositionsAndCapacities.length;
    const dp = Array.from({ length: numRobots + 1 }, () => Array(numFactories + 1).fill(Number.MAX_SAFE_INTEGER));

    dp[0][0] = 0;
    
    for (let i = 0; i <= numRobots; i++) {
        for (let j = 1; j <= numFactories; j++) {

            dp[i][j] = Math.min(dp[i][j], dp[i][j - 1]);
            
            let cumulativeDist = 0;
            const [factoryPosition, factoryCapacity] = factoryPositionsAndCapacities[j - 1];
            
            for (let k = 1; k <= factoryCapacity && i - k >= 0; k++) {

                cumulativeDist += Math.abs(robotPositions[i - k] - factoryPosition);
                dp[i][j] = Math.min(dp[i][j], dp[i - k][j - 1] + cumulativeDist);
                
            }
        }
    }

    return dp[numRobots][numFactories];
};