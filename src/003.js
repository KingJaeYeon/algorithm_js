const input1 = [2, 1, 3, 4, 1];
const input2 = [5, 0, 2, 7];


function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    return [...new Set(answer)].sort((a, b) => a - b)
}

console.log(solution(input1)); // [2,3,4,5,6,7]
console.log(solution(input2)); // [2,5,7,9,12]

