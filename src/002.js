const input1 = [4, 2, 2, 1, 3, 4];
const input2 = [2, 1, 1, 3, 2, 5, 4];


function solution(numbers) {
    return [...new Set(numbers)].sort((a, b) => b - a)
}

console.log(solution(input1));
console.log(solution(input2));

