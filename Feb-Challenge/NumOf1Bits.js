var hammingWeight = function(n) {
    /*let sum = 0;
       
       while(n != 0) {
           sum += n & 1;
           n = n >>> 1;
       }
       
       return sum;*/
       console.log(n.toString(2));
      return  n.toString(2).match(/1/g)?.length ?? 0; 
   };
   let n= 00000000000000000000000000001011;
   console.log(hammingWeight(n));