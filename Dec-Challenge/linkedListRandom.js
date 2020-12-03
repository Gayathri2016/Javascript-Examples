/*
  Linked List Random Node

Solution
Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Follow up:
What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

Example:

// Init a singly linked list [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
solution.getRandom();



*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
};
Solution.prototype.count = function(){
    let curr = this.head;
    let count =0;
    while(curr !=null){
        count++;
        curr = curr.next;
    }
    return count;
}

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let ran = Math.floor((Math.random()*this.count()));
    
    let curr = this.head;
    for(let i=0;i<ran;i++)
    {
        curr = curr.next;
    }
    return curr.val;
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

 /// reservoir sampling


Solution.prototype.getRandom1 = function () {
    let i = 0, val;
    let node = this.head;

    while (node) {
        i++;
        if (Math.floor(Math.random() * i) + 1 === i) val = node.val;
        node = node.next;
    }

    return val;
};