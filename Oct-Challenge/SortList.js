var Node = function (val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
};
var add = function(val){
    var head = null;
    var n = new Node(val);
    n.next = head;
    head = n;
};
var sortList = function(head){
    if(head==null || head.next==null)
        return head;
    var fast = head;
    var slow=head;
    var prev = head;
    while(fast!==null && fast.next!==null){
        fast = fast.next.next;
        prev = slow;
        slow= slow.next;
    }
     // close first half list
     prev.next = null;
    const l1 = sortList(head);
    const l2 = sortList(slow);
    
    return sortedMerge(l1,l2);

};


var sortedMerge = function(l,r){
    var result;
    if(l == null)
        return r;
    if(r == null)   
        return l;
    if(l.val<=r.val){
        result = l;
        result.next = sortedMerge(l.next,r);
    }else{
        result = r;
        result.next = sortedMerge(l,r.next);
    }
    return result;

};
//var list = new Node();
console.log(add(4));
