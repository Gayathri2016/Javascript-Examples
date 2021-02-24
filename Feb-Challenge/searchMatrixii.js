var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
  const h = matrix.length;
  const w = matrix[0].length;

  let i = 0;
  let j = w - 1;
  while (j >= 0 && i < h) {
    if (target === matrix[i][j]) return true;
    else if (target < matrix[i][j]) j--;
    else i++;
  }
  return false;
};

let m =[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]] ,t=5;
let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20

console.log(searchMatrix(m,t));