'use strict';

module.exports = PriorityQueue;

function PriorityQueue(){
  this.queue = [];
}

PriorityQueue.prototype = {

  push : function (priority, value) {
    this._insert([priority, value], this.queue);
  },

  pop : function () {
    return this.queue.pop()[1];
  },

  length : function () {
    return this.queue.length;
  },

  peak : function() {
	  return this.queue[this.queue.length - 1];
  },

  _insert : function(value, array, startVal, endVal){
    var length = array.length;

    if (length == 0) {
      array.push(value);
      return;
    }

    var start = typeof(startVal) !== 'undefined' ? startVal : 0;
	  var end = typeof(endVal) !== 'undefined' ? endVal : length - 1;
    var m = start + Math.floor((end - start)/2);

	  if (value[0] >= array[end][0]) {
		    array.splice(end + 1, 0, value);
		    return;
	  }

	  if (value[0] <= array[start][0]) {
		    array.splice(start, 0, value);
		    return;
	  }

	  if (start >= end) {
		    return;
	  }

	  if (value[0] < array[m][0]) {
		    this._insert(value, array, start, m - 1);
		    return;
	  }

	  if (value[0] > array[m][0]) {
		    this._insert(value, array, m + 1, end);
		    return;
	  }

  },

}
