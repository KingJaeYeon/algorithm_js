function solution(totalPage, currentPage) {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPage, currentPage + 2);

    if (end - start < 4) {
        if (start === 1) {
            end = Math.min(5, totalPage);
        } else {
            start = Math.max(1, totalPage - 4);
        }
    }

    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return {
        arr: result,
        start,
        end,
    };
}



console.log(solution(1, 1)) // [1]
console.log(solution(3, 1)) // [1,2,3]
console.log(solution(5, 1)) // [1,2,3,4,5]
console.log(solution(5, 3)) // [1,2,3,4,5]
console.log(solution(6, 4)) // [2,3,4,5,6]
console.log(solution(6, 5)) // [2,3,4,5,6]
console.log(solution(6, 6)) // [2,3,4,5,6]


