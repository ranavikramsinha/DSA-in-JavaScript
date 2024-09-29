//* https://leetcode.com/problems/all-oone-data-structure/

var AllOne = function() {
    this.head = { 
        count: 0,
        keys: new Set(),
        previous: null,
        next: null,
    };

    this.tail = this.head;
    this.map = new Map();
};

AllOne.prototype.addNodeAfter = function(previous, count) {
    const newNode = {
        count,
        keys: new Set(),
        previous,
        next: previous.next,
        };

    if (previous.next){
        previous.next.previous = newNode
    };

    previous.next = newNode;
    if (this.tail === previous){
        this.tail = newNode;
    }

    return newNode;
};

AllOne.prototype.removeNode = function(node) {
    node.previous.next = node.next;
    if (node.next){
        node.next.previous = node.previous;
    }

    if (this.tail === node){
        this.tail = node.previous;
    }
};

AllOne.prototype.inc = function(key) {
    let current = this.map.get(key);

    if (!current) {
        if (!this.head.next || this.head.next.count !== 1){
            this.addNodeAfter(this.head, 1);
        }

        this.head.next.keys.add(key);
        this.map.set(key, this.head.next);
    } else {
        let next = current.next;

        if (!next || next.count !== current.count + 1){
            next = this.addNodeAfter(current, current.count + 1);
        }

        next.keys.add(key);
        this.map.set(key, next);
        current.keys.delete(key);

        if (!current.keys.size){
            this.removeNode(current);
        }
    }
};

AllOne.prototype.dec = function(key) {
    let current = this.map.get(key);

    if (!current){
        return;
    }

    current.keys.delete(key);

    if (current.count === 1) {
        this.map.delete(key);
    } else {
        let previous = current.previous;

        if (previous === this.head || previous.count !== current.count - 1){
            previous = this.addNodeAfter(current.previous, current.count - 1);
        }

        previous.keys.add(key);
        this.map.set(key, previous);
    }
    if (!current.keys.size){
        this.removeNode(current);
    }
};

AllOne.prototype.getMaxKey = function() {
    return this.tail === this.head ? '' : this.tail.keys.values().next().value;
};

AllOne.prototype.getMinKey = function() {
    return !this.head.next ? '' : this.head.next.keys.values().next().value;
};