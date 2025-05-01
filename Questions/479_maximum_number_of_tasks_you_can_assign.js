//* https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/

//* tc O(nlogn + n^2logn) | sc O(m + n)

var maxTaskAssign = function(tasks, workers, pills, strength) {

    let m = tasks.length;
    let n = workers.length;
    let left = 0;
    let right = Math.min(m, n);
    let result = 0;
    
    tasks.sort((a, b) => a - b);
    workers.sort((a, b) => b - a);

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(solve(middle, tasks, workers, pills, strength)){
            result = middle;
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }

    return result;

    function solve(numberOfTasks, tasks, workers, pills, strength){
        let pillConsumed = 0;
        let strongWorker = workers.slice(0, numberOfTasks).sort((a, b) => a - b);

        for(let i = numberOfTasks - 1; i >= 0; i--){
            let task = tasks[i];

            if(strongWorker[strongWorker.length - 1] >= task){
                strongWorker.pop();
            }
            else{
                if(pillConsumed >= pills){
                    return false;
                }

                let need = task - strength;

                let l = 0;
                let r = strongWorker.length;

                while(l < r){
                    let middle = l + Math.trunc((r - l) / 2);

                    if(strongWorker[middle] < need){
                        l = middle + 1;
                    }
                    else{
                        r = middle;
                    }
                }

                if(l === strongWorker.length){
                    return false;
                }

                strongWorker.splice(l , 1);
                pillConsumed++;
            }
        }

        return true;
    }
    
};