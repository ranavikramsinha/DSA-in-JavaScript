//* https://leetcode.com/problems/find-all-people-with-secret

//* tc : O(mlogm + m) | sc : O(m + n) where m is the number of meetings

var findAllPeople = function(n, meetings, firstPerson) {

    let knows = new Set([0, firstPerson]);
    meetings.sort((a, b) => a[2] - b[2]);

    let i = 0;

    while (i < meetings.length) {
        let time = meetings[i][2];
        let participants = new Set();
        let edges = [];

        while (i < meetings.length && meetings[i][2] === time) {
            let [u, v] = meetings[i];

            participants.add(u);
            participants.add(v);
            edges.push([u, v]);
            i++;
        }

        let arr = Array.from(participants);
        let index = new Map();
        arr.forEach((p, idx) => index.set(p, idx));

        let parent = Array.from({ length: arr.length }, (_, i) => i);

        let find = u => {
            let root = u;

            while (parent[root] !== root) {
                root = parent[root];
            }

            while (parent[u] !== root) {
                let nxt = parent[u];
                parent[u] = root;
                u = nxt;
            }

            return root;
        };

        let union = (u, v) => {
            let ru = find(u);
            let rv = find(v);

            if (ru !== rv) {
                parent[rv] = ru;
            }
        };

        for (let [u, v] of edges) {
            union(index.get(u), index.get(v));
        }

        let rootHasSecret = new Array(arr.length).fill(false);
        
        for (let p of arr) {
            if (knows.has(p)) {
                rootHasSecret[find(index.get(p))] = true;
            }
        }

        for (let idx = 0; idx < arr.length; idx++) {
            if (rootHasSecret[find(idx)]) {
                knows.add(arr[idx]);
            }
        }
    }

    return [...knows];

};