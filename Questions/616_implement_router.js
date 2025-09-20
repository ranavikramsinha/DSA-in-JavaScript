//* https://leetcode.com/problems/implement-router/

//* tc : O(log(n)) | sc : O(1)

var Router = function(memoryLimit) {
    this.maxLength = memoryLimit;
    this.queue = [];
    this.destMapPacket = new Map();
    this.hashMap = new Map();
};

Router.prototype.formKey = function(source, destination, timestamp) {
    return `${source}-${destination}-${timestamp}`;
}


Router.prototype.addPacket = function(source, destination, timestamp) {
    const addKey = this.formKey(source, destination, timestamp);
    if (this.hashMap.has(addKey)) {
        return false;
    }

    this.queue.push([source, destination, timestamp]);
    this.hashMap.set(addKey, 1);
    
    
    const destQueue = this.destMapPacket.get(destination) || [];
    destQueue.push([source, destination, timestamp]);
    this.destMapPacket.set(destination, destQueue); 

    if (this.queue.length > this.maxLength) {
        const oldPacket = this.queue.shift();
        this.hashMap.delete(this.formKey(...oldPacket));
        this.destMapPacket.get(oldPacket[1]).shift();
    }

    return true;
};


Router.prototype.forwardPacket = function() {
    const packet = this.queue.shift() || [];
    
    if (packet.length > 0) this.destMapPacket.get(packet[1]).shift();

    this.hashMap.delete(this.formKey(...packet))
    return packet;
};


Router.prototype.binarySearchStart = function(targetTime,dest) {
    let start = 0;
    
    const queue = this.destMapPacket.get(dest) || [];
    let end = queue.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const timeStamp = queue[mid][2];
        
        if (timeStamp >= targetTime) {
            end = mid - 1;
            continue;
        }

        if (timeStamp < targetTime) {
            start = mid + 1;
            continue;
        }
    }
    
    return start;
}

Router.prototype.binarySearchEnd = function(targetTime, dest) {
    let start = 0;
    const queue = this.destMapPacket.get(dest) || [];
    let end = queue.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const timeStamp = queue[mid][2];
        
        if (timeStamp > targetTime) {
            end = mid - 1;
            continue;
        }

        if (timeStamp <= targetTime) {
            start = mid + 1;
            continue;
        }
    }
    
    return start;
}


Router.prototype.getCount = function(destination, startTime, endTime) {
    
    if (!this.destMapPacket.has(destination)) return 0; 
    
    const start = this.binarySearchStart(startTime, destination);
    const end = this.binarySearchEnd(endTime, destination);
    
    

    return end - start;
};