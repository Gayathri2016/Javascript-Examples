/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let size = matrix.length;
  for(let i=0;i<size;i++){
      for(let j=0;j<matrix[i].length;j++){
          if(matrix[i][j]== target)
            return true;
      }
  }
  return false;  
};
function searchMatrix1(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
  
    let row = 0;
    let col = matrix[0].length - 1;
  
    while (col >= 0 && row <= matrix.length - 1) {
      if (matrix[row][col] === target) return true;
      else if (matrix[row][col] > target) col--;
      else if (matrix[row][col] < target) row++;
    }
  
    return false;
  }
let matrix= [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
let m1= [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
let t1=13;
let m2=[];
let t2=0;
console.log(searchMatrix1(matrix,3));