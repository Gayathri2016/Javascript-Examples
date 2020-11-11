var flipAndInvertImage = function(A) {

    A.forEach(e=>{
      e.reverse();
      e.forEach((ele,ind)=>{
            if(ele==0){
            e[ind] =1;
        }else{
            e[ind]=0;
        }
      })
    });
    return A;
    }
    const flipAndInvertImage1 = A => A.map(e => e.reverse()).map(e => e.map(e => e ? 0 : 1));
    let input= [[1,1,0],[1,0,1],[0,0,0]];//[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
    console.log(flipAndInvertImage1(input));