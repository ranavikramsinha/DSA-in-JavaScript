//* https://leetcode.com/problems/meeting-rooms-iii/

//* tc : O(n * m) | sc : O(n)

var mostBooked = function(n, meetings) {

    let counts = new Array(n).fill(0);
    let endings = new Array(n).fill(0);

    meetings.sort((a, b) => a[0] - b[0]);

    let maxIdx = 0;

    for (let [start, end] of meetings) {
        let roomIdx = -1;

        for (let i = 0; i < n; i++) {
            if (start >= endings[i]) {
                roomIdx = i;
                break;
            }
        }

        if (roomIdx === -1) {
            roomIdx = 0;

            for (let i = 0; i < n; i++) {
                if (endings[i] < endings[roomIdx]) {
                    roomIdx = i;
                }
            }
        }

        counts[roomIdx]++;

        endings[roomIdx] = endings[roomIdx] < start ? end : endings[roomIdx] + (end - start);
    }

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > counts[maxIdx]) {
            maxIdx = i;
        }
    }

    return maxIdx;
    
};