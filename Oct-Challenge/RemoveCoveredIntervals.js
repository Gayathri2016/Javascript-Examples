var removeCoveredIntervals = function(intervals) {
    let r=0;//removed 
    intervals.sort((a,b)=>a[0]!=b[0]?a[0]-b[0]:b[1]-a[1]);
    let end = -1;
    for(let i=0;i<intervals.length;i++){
        if(intervals[i][1]<=end)
         r++;
     else
         end=intervals[i][1];
    
    }
    return intervals.length-r;
    
 };
 
 console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]));