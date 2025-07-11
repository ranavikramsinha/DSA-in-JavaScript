//* https://leetcode.com/problems/meeting-rooms-iii/

//* tc O(m * n + mlogm) | sc O(n)

var mostBooked = function(n, meetings) {

    let m = meetings.length;
    let howManyRoomsUsed = new Array(n).fill(0);
    let roomAtLast = new Array(n).fill(0);

    meetings.sort((a, b) => a[0] - b[0]);

    for(let meet of meetings){
        let start = meet[0];
        let end = meet[1];
        let found = false;

        let earlyEndRoomTime = Infinity;
        let earlyEndRoom = 0;

        for(let room = 0; room < n; room++){
            if(roomAtLast[room] <= start){
                found = true;
                roomAtLast[room] = end;
                howManyRoomsUsed[room]++;
                break;
            }

            if(roomAtLast[room] < earlyEndRoomTime){
                earlyEndRoom = room;
                earlyEndRoomTime = roomAtLast[room];
            }
        }

        if(!found){
            roomAtLast[earlyEndRoom] += (end - start);
            howManyRoomsUsed[earlyEndRoom]++;
        }
    }

    let resultRoom = -1;
    let maxUse = 0;

    for(let room = 0; room < n; room++){
        if(howManyRoomsUsed[room] > maxUse){
            maxUse = howManyRoomsUsed[room];
            resultRoom = room;
        }
    }

    return resultRoom;
    
};