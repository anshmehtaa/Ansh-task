// first program
function  getRow (rowIndex){
    let row = [1];
    for (let i=1; i<= rowIndex; i++){
        row.push(row[i-1]*(rowIndex-i+1)/i);
    }
    return row;
    }
    let rowIndex =3;
console.log(getRow(rowIndex));