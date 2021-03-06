/*
Kth Missing Positive Number

Solution
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
*/
var findKthPositive = function(arr, k) {
    let res =[];
    if(arr[0] >1){
        let j=arr[0]-1;
      while(j>0){
            let temp=arr[0]-j;
            res.push(temp);
          j--;
        }
      
    }
    for(let i =1;i<arr.length;i++){
        if((arr[i]- arr[i-1])>1){
          let j=arr[i]-arr[i-1]-1;
        while(j>0){
            let temp=arr[i]-j;
            res.push(temp);
          j--;
        }
        
      }
     
    }
     if(res.length === 0 || res.length<k){
      let temp = arr[arr.length-1]+1;
      let cur = res.length>0?res.length:1;
       for(let i =cur; i<=k;i++){
         res.push(temp++);
       }
             
          
     }
    return res[k-1];
  };

  const findKthPositive1 = (arr, k) => {
    for (let i = 1, j = 0; ; i++)
      if (i === arr[j]) j++;
      else if (k === i - j) return i;
  };
  let arr=[2,3,4,7,11], k=5;
  let arr1=[4,5,7,9,11];
  let arr3=[1,2,3,4],k1=2;
  let arr2=[1,13,18],k2=17;
  console.log(findKthPositive1(arr3,k1));