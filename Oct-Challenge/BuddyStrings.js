var buddyStrings = function(A, B) {
    let str = "";
    let unique = Array.from(new Set([...A.split('')])).join('');
    console.log(unique);
    if(A===B && unique === A )
        return false;
      let count =0;
       for(var i=0;i<A.length;i++){
           var ind =0;
        if(A[i]!== B[i] && count <=1){
            ind = B.indexOf(A[i]);
            str+=A[ind];
            console.log(A[i]);
            count++;
        }else
            str+=A[i];
       } 
       
       console.log("A:",str,"B:",B)
       return str===B? true:false;
       
    };
    
    var A = "aaaaaaabc", B = "aaaaaaacb";
    var a1="abcd",b1 ="cbad";
    let a2="ab", b2="ab";
    let a3="aa",b3='aa';
    let a4="abcd", b4="badc";
    console.log(buddyStrings(a4,b4));