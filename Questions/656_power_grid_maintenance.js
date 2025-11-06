//* https://leetcode.com/problems/power-grid-maintenance/

//* tc : O((c + n) + q * log(c)) | sc : O(c + n)

var processQueries = function(c, connections, queries) {

    let graphArr = Array.from({ length: c + 1 }, () => []);

    for (let [u, v] of connections) {
        graphArr[u].push(v);
        graphArr[v].push(u);
    }

    let componentId = Array(c + 1).fill(-1);
    let currentComponent = 0;

    let dfs = (node, id) => {
        componentId[node] = id;
        for (let neighbor of graphArr[node]) {
            if (componentId[neighbor] === -1) {
                dfs(neighbor, id);
            }
        }
    };

    for (let i = 1; i <= c; i++) {
        if (componentId[i] === -1) {
            dfs(i, currentComponent++);
        }
    }

    let heaps = Array.from({ length: currentComponent }, 
        () => new MinPriorityQueue({ compare: (a, b) => a - b })
    );

    let offline = new Set();

    for (let i = 1; i <= c; i++) {
        heaps[componentId[i]].enqueue(i);
    }

    let result = [];

    for (let [type, x] of queries) {
        let comp = componentId[x];

        if (type === 1) {
            if (!offline.has(x)) {
                result.push(x);
            }
            else {
                while (!heaps[comp].isEmpty() && offline.has(heaps[comp].front())) {
                    heaps[comp].dequeue();
                }
                if (!heaps[comp].isEmpty()) {
                    result.push(heaps[comp].front());
                } else {
                    result.push(-1);
                }
            }
        }
        else if (type === 2) {
            offline.add(x);
        }
    }

    return result;
};