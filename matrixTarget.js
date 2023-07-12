let matrix = [
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,60]
]
let target = 3
function matrixTarget(matrix,target){
    for(let i =0;i<matrix.length;i++){
        for(j=0;j<matrix.length;j++){
            if(matrix[i][j]===target){
                return true
            }
        }
    }
    return false
}
console.log(matrixTarget(matrix,target))