/*Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL*/
/**
 * Definition for singly-linked list.*/
 function ListNode(val, next,prev) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
     this.prev = (prev ===undefined?null:prev)
 }
 
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function addHead(val) {
    let newNode = new ListNode(val);
  
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    };
  
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  
    this.length++;
    return this;
  }
 
var rotateRight = function(head, k) {
    if(head == null || head.next == null) return head;
    
    let  n = null;
    let oldtail = head; 
    for(n = 1;  oldtail.next !== null; n++){
        oldtail = oldtail.next;
    }
    oldtail.next = head;
    let newTail = head;
    for(let i = 0; i < n - k % n - 1; i++){
        newTail = newTail.next;
    }
    
    let newHead = newTail.next;
    newTail.next = null;
    return newHead;
};
var arr =[1,2,3,4,5];
var l = new ListNode();
 addHead(1);
 addHead(2);
 addHead(3);
 addHead(4);
 addHead(5);
 console.log(l);
     //rotateRight(l, 2));
