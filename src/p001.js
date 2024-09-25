function solution(n, left, right) {
    const square = [...new Array(n)].map((_,i)=>[...new Array(n)]
            .map((_,idx)=>{
                let j = idx < i ? i : idx;
                return j+1
            }));
    const [s1,s2] = [Math.floor(left/n),left%n]
    const [e1,e2] = [Math.floor(right/n),right%n]

    const answer = [];
    answer.push(...square[s1].slice(s2,n))
    for(let i = s1+1 ; i < e1; i++){
        answer.push(...square[i])
    }
    answer.push(...square[e1].slice(0,e2+1))
    return answer;
}

console.log('result::',solution(3,	2,	5)) //[3,2,2,3]
console.log('result::',solution(4,	7,	14) )//[4,3,3,3,4,4,4,4]
