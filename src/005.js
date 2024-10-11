
const arr1 = [[2,3,2],[4,2,4],[3,1,4]];
const arr2 = [[5,4,3],[2,4,1],[3,1,1]];


function solution(arr1,arr2) {

    let result = []

    // arr1의 "length"만큼 반복
    for (let i = 0 ; i < arr1.length; i++){
        const row = arr1[i];
        let temp =[]
        for (let k = 0 ; k <arr2[0].length ; k++){
            let sum = 0
            for (let j = 0; j < arr2.length; j++) {
                sum += row[j] * arr2[j][k]
            }
            temp.push(sum)
        }
        result.push(temp)
    }

    return result
}
console.log(solution(arr1,arr2));
