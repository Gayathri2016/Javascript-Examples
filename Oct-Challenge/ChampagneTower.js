var champagneTower = function(poured, query_row, query_glass) {
    let cups = [poured];
    for(let i=0; i<query_row; i++){
        let nextRow = new Array(cups.length+1).fill(0);
        for(let j=0; j<cups.length; j++){
            let extraOverFlow = Math.max(0,cups[j]-1);
            nextRow[j] += extraOverFlow/2;
            nextRow[j+1] += extraOverFlow/2;
        }
        cups = nextRow;
    }
    return Math.min(1,cups[query_glass]);
};
let p=100000009,r=33,g=17;
console.log(champagneTower(7,3,1));