//* https://leetcode.com/problems/maximum-average-pass-ratio/

//* tc O(nlogn + klogn) | sc O(n)

var maxAverageRatio = function(classes, extraStudents) {

    let n = classes.length;
    let maxHeap = new MaxPriorityQueue({ priority: ({ improvement}) => improvement})

    for(let i = 0; i < n; i++){
        let improvement = calculateImprovement(classes[i][0], classes[i][1]);
        maxHeap.enqueue({ improvement, classIndex: i});
    };

    while(extraStudents > 0){
        let { element: { classIndex}} = maxHeap.dequeue();
        classes[classIndex][0]++;
        classes[classIndex][1]++;

        let newImprovement = calculateImprovement(classes[classIndex][0], classes[classIndex][1]);
        maxHeap.enqueue({ improvement: newImprovement, classIndex});
        extraStudents--;
    };

    let totalPassRatio = 0;

    for(let i = 0; i < n; i++){
        totalPassRatio += classes[i][0] / classes[i][1];
    };

    return totalPassRatio / n;

    function calculateImprovement(passStudents, totalStudents){
        let currentPassRatio = passStudents / totalStudents;
        let newPassRatio = (passStudents + 1) / (totalStudents + 1);

        return newPassRatio - currentPassRatio;
    }
};