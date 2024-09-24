const input1 = [1,2,3,4,5];
const input2 = [1,3,2,4,2];


function solution(numbers) {
    const patten1 = [1,2,3,4,5]
    const patten2 = [2,1,2,3,2,4,2,5]
    const patten3 = [3,3,1,1,2,2,4,4,5,5]

    const result = [0,0,0]

    for (let i = 0 ; i<numbers.length; i++) {
        const value =numbers[i];
        if (value === patten1[i%5]) result[0]++
        if (value === patten2[i%8]) result[1]++
        if (value === patten3[i%10]) result[2]++
    }
    return result
}

console.log(solution(input1)); // [2,3,4,5,6,7]
console.log(solution(input2)); // [2,5,7,9,12]
