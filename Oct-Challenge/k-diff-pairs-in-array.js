var findPairs = function(nums, k) {
    let res=0;
    if(k==0){
      let arr = nums.sort((a, b) => a - b);
      for(let i=0;i<arr.length;i++){
          if(arr.indexOf(arr[i]) !== i)
            res+=1;
      }
    }
    else{
      let arr = new Set([...nums]);//filter((a,b)=>a-b);
      let set1= arr.values();
        for(let i=0;i<arr.size;i++){
          let temp=set1.next().value+k;
          if(arr.has(temp))
              res+=1;
        }
        }
      return res;
    };
    
    var  findPairs2=function(nums,k){
    if(k<0) return 0
        var set=new Set(), res=new Set(), m=nums.length;
        for(let i=0; i<m; i++){
            if(set.has(nums[i]+k)) res.add(nums[i]+k);
            if(set.has(nums[i]-k)) res.add(nums[i]);
            set.add(nums[i]);
        }
        return res.size;
    };
    let nums = [3,1,4,1,5], k = 2,nums1=[1,3,1,5,4],k1=0,nums2=[1,2,4,4,3,3,0,9,2,3],k2=3,nums3=[-1,-2,-3],k3=1,nums4=[1,1,1,2,1],k4=1,nums5=[1,1,1,1,1],k5=0;
    console.log(findPairs2(nums1,k1));