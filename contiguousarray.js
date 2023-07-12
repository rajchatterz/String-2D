let nums = [0,1,1,2,0,1,0]

function maxLength(nums){
    let result =0
    for(let i=0;i<nums.length;i++){
        let zero = 0
        let one = 0
        for(j=i;j<nums.length;j++){
            if(nums[j]==0){
                zero++
            }else{
                one++
            }
            if(zero===one){
                result=Math.max(result,j-i+1)
            }
        }
    }
    return result
}
console.log(maxLength(nums))