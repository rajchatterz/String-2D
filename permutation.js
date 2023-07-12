let s = 'IDID'

function permutation(s){
    let sl = s.length
    let count = 0
    let result = []
    for(let i=0;i<s.length;i++){
        if(s[i]=='I'){
            result.push(count)
            count++
        }else if(s[i]=='D'){
            result.push(sl)
            sl--
        }
    }
    return result
}
console.log(permutation(s))