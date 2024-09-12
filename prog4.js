//questin 2     Rotate list
let arr = [1,2,3,4,5];
let rotateArr = rotateArray(arr,2);
function rotateArray (arr,k){
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0,-k));
}


console.log( rotateArr);