/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
 }
var cloneGraph = function(node) {
    let map = new Map();
    	 return clone(node);
    function clone(node){
      if(!node)
        return null;
      if(map.has(node.val)) return map.get(node.val);
      const newNode = {val:node.val, neighbors:[]};
      map.set(node.val,newNode);
      for (let n of node.neighbors) {
      newNode.neighbors.push(clone(n));
     }
     return newNode;
     
    	
    }
};

var aNode = new Node('0');
var bNode = new Node('1');
var cNode = new Node('2');
 
aNode.neighbors.push(bNode, cNode);
bNode.neighbors.push(cNode);
cNode.neighbors.push(cNode);
 
console.log(aNode);
console.log(cloneGraph(aNode));