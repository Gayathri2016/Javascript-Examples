function Node(val) {
    this.val = val;
    this.next = null;
 }
 /**
  * Initialize your data structure here.
  */

 function MyLinkedList(){
   this._length = 0;
   this.head = null;
 }
 MyLinkedList.prototype.getNode = function(val)
 {
   var node = new Node(val);
   //if there is no head set node to head of the list
     if(!this.head){
      this.head = node;
      this._length +=1;
      return this;
    }
    node = this;
    return node;
 }
 MyLinkedList.prototype.addAtHead = function(val) {
    
     let curr = this.head;
     this.head = new Node(val);
     this.head.next = curr;
     this._length++;
     return this;
   };
   MyLinkedList.prototype.addToTail = function(val)
   {
  
     let current = this.head;
      while(current.next)
      {
        current = current.next;
      }
      current.next = new Node(val);
      this._length +=1;
  
  
   }
   var reverseList = function(head){
    if (head == null || head.next == null) 
    return head;
    var p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
   }
   /*  Add Two Numbers II
    * You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

solution:
The idea

There are two ways of passing variables. To pass down, we use parameters. To pass up/back, we use return values. And this problem is the perfect example of the later where we need to pass the carry number up/back.
Define a recursion function getCarry which recursively sets the local sum and returns the carry during backtracking stage.
Beware of numbers of different length, we can incorporate an offset to solve the problem.
    * 
    */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Len = getLen(l1);
    let l2Len = getLen(l2);
    let offset = Math.abs(l1Len - l2Len);
    if (l2Len > l1Len) [l1, l2] = [l2, l1]; // l1 will always be the longer one
    let dummyHead = new ListNode(0);
    dummyHead.val = getCarry(l1, l2, dummyHead, offset);

    return dummyHead.val==1?dummyHead:dummyHead.next;
};

/**
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 * @param {ListNode} node 
 * @param {Number} offset 
 */
function getCarry(l1, l2, node, offset) {
    if (l1==null || l2==null) return 0;
    node.next = new Node(0);
    let sum = 0;
    if (offset > 0) sum = l1.val + getCarry(l1.next, l2, node.next, offset-1);
    else sum = l1.val + l2.val + getCarry(l1.next, l2.next, node.next, offset-1);

    node.next.val = sum % 10;
    return parseInt(sum / 10); // return the carry
}

/**
 * @param {ListNode} root 
 */
function getLen(root) {
    let len = 0;
    while(root) {
        len++;
        root = root.next;
    }
    return len;
}
var addTwoNumbers1 = function(n1, n2) {
  let res=new Node();
  let sum = null;
  let carry =0;
  let i =0;
  
  while(n1!=null || n2!=null || carry!=0)
  {
    let t1 = n1==null?0:n1.val;
    let t2 = n2==null?0:n2.val;
    if(i===0)
    {
      res = new Node((t1+t2+carry)%10);
      sum = res;
        
    }else {
      res.next = new Node((t1+t2+carry)%10);
      res = res.next;
        
    }
    if((t1+t2+carry)>=10)
        carry = parseInt((t1+t2+carry)/10);
    else
      carry = 0;
       
    n1 = n1==null?n1:n1.next;
    n2 = n2==null?n2:n2.next;
    i++;
  }
    
  return sum;
};

   var l1 = new MyLinkedList();
   var l2 = new MyLinkedList();
   l1.addAtHead(7);
   l1.addAtHead(2);
   l1.addToTail(4);
   l1.addToTail(3);
   l2.addAtHead(5);
   l2.addAtHead(6);
   l2.addToTail(4);
   console.log("l1:",l1,"l2",l2);
   //console.log("reverseList:", reverseList(l1));

   console.log(addTwoNumbers1(l1,l2));