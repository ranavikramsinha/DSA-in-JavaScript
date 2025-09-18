//* https://leetcode.com/problems/design-task-manager/

//* tc : O(log(n)) | sc : O(n)

var TaskManager = function (tasks) {
    this.pq = new PriorityQueue((a, b) => {
        if (a.priority === b.priority) {
            return b.taskId - a.taskId;
        }

        return b.priority - a.priority;
    })
    this.taskPool = new Map(tasks.map(([userId, taskId, priority]) => {
        this.pq.enqueue({ taskId, priority, userId });
        return [taskId, { userId, priority }];
    }));



};

TaskManager.prototype.add = function (userId, taskId, priority) {
    this.taskPool.set(taskId, { userId, priority });
    this.pq.enqueue({ userId, taskId, priority });
};

TaskManager.prototype.edit = function (taskId, newPriority) {
    const { userId } = this.taskPool.get(taskId);

    this.pq.enqueue({ userId, taskId, priority: newPriority });

    this.taskPool.set(taskId, { userId, priority: newPriority });
};

TaskManager.prototype.rmv = function (taskId) {
    this.taskPool.delete(taskId);
};

TaskManager.prototype.execTop = function () {
    let front = this.pq.front();

    while (front && (!this.taskPool.get(front.taskId) || this.taskPool.get(front.taskId).priority !== front.priority)) {
        this.pq.dequeue();
        front = this.pq.front();
    }

    if (front) {
        this.taskPool.delete(front.taskId);
        return front.userId;
    }

    return -1;
};