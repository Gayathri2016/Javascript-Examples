
var RecentCounter = function() {
    this.arr = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    while(this.arr[0]<t-3000){
    	this.arr.shift();
    }
    return this.arr.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
 
 //["RecentCounter", "ping", "ping", "ping", "ping"]
let i=[[], [1], [100], [3001], [3002]];

var obj = new RecentCounter();
i.forEach(e=>{console.log(obj.ping(e))});
//var param_1 = obj.ping(t)