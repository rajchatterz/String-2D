let arr =[0,2,3,4,5,5,3,2,1,0]

function arrToCheck(arr){
    if(arr.length<3){
        return false
    }
    let i = 0
    while(i<arr.length-1 && arr[i]<arr[i+1]){
        i++;
    }
    if(i===0 || i===arr.length-1){
        return false
    }
    while(i<arr.length-1 && arr[i]>arr[i+1]){
        i++
    }
    return i===arr.length-1;
}
console.log(arrToCheck(arr))