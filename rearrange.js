let nums1 = [5,3,4,2]
let nums2 = [4,2,2,5]
function toAddTwoArray(nums1,num2){
    nums1[0]=3
    nums1[1]=5
    console.log(nums1)
    let result = 0
    for(let i=0;i<nums1.length;i++){
        result+=nums1[i]*nums2[i]
    }
    return result
    
}
console.log(toAddTwoArray(nums1))