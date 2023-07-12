let nums = [1,3,4,2,6,8]
function double(nums){
    let result = []
    for(let i =0;i<nums.length;i++){
        if(nums.includes(nums[i]/2)){
            result.push(Math.floor(nums[i]/2))
        }
    }
    return result
}
console.log(double(nums))