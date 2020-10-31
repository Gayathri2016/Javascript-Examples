var bagOfTokensScore = function(tokens, P) {
    tokens.sort((a,b)=>a-b);
    let score =0,maxScore =0;
    let l=0,r = tokens.length-1;
   while(l<=r){
     if(P>=tokens[l]){
       P-=tokens[l++];
       score++;
       maxScore = Math.max(maxScore,score);
     }else if(score>0){
     	P+=tokens[r--];
      score--;
     }else{
     	break;
     }
   }
 
   return maxScore;
    
    
};
let arr=[100], arr1=[100,200],arr2=[100,200,300,400],arr3=[26],p3=51,arr4=[81,45,8],p4=32;
console.log(bagOfTokensScore(arr4,p4));