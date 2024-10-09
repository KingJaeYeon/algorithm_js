function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const res = [0,0,0];

    for(let i = 0 ; i < answers.length ; i++){
        one[i%5] === answers[i] && res[0]++;
        two[i%8] === answers[i] && res[1]++;
        three[i%10] === answers[i] && res[2]++;
    }


    let answer = [];
    Math.max(...res)===res[0] && answer.push(1);
    Math.max(...res)===res[1] && answer.push(2);
    Math.max(...res)===res[2] && answer.push(3);

    return answer;
}

solution([1,2,3,4,5]) // [1]
solution([1,3,2,4,2]) // [1,2,3]
