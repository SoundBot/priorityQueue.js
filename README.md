##PriorityQueue.js
Fast and easy-to-use priority queue.
##Usage
```js
var pq = new PriorityQueue();
//add to queue
pq.push(4, task1);
pq.push(7, task2);
pq.push(2, task3);
//grab item from the top
var task = pq.pop(); //returns task2;
//check the top item without removing
var peak = pq.peak();
```
##License
MIT
