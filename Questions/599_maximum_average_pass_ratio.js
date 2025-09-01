//* https://leetcode.com/problems/maximum-average-pass-ratio/

//* tc : O(extraStudents * log(n)) | sc : O(n)

var maxAverageRatio = function(classes, extraStudents) {

    let n = classes.length;
    let pq = new PriorityQueue((a, b) => b[0] - a[0]);

    for (let i = 0; i < n; i++){
        let [pass, total] = classes[i];
        let currentAverage = Number(pass / total);
        let newAverage = Number((pass + 1) / (total + 1));
        let gain = newAverage - currentAverage;

        pq.enqueue([gain, i]);
    }

    while (extraStudents--){
        let [currentGain, currentClass] = pq.dequeue();

        classes[currentClass][0]++;
        classes[currentClass][1]++;

        let newAverage = Number(classes[currentClass][0] / classes[currentClass][1]);
        let nextAverage = Number((classes[currentClass][0] + 1) / (classes[currentClass][1] + 1));

        let gain = nextAverage - newAverage;

        pq.enqueue([gain, currentClass]);

    }

    let result = 0;

    for(let i = 0; i < n; i++){
        result += Number(classes[i][0] / classes[i][1]);
    }

    return result / n;
};