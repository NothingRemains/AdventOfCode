// Advent of Code 2024, Day 1, Part 1

// Sample input
const input = `
1   2
3   4
6   5
`
const parse = str => {
    const arr = str.split("\n").map(el => el.split("   ").map(e => Number(e)))
    let first = []
    let second = []
    
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        
        first.push(curr[0])
        second.push(curr[1])
    }

    return [first.sort((a,b) => a-b), second.sort((a,b) => a-b)]
}

function countError (data) {
    let [firstList, secondList] = parse(data)

    return firstList.reduce((total, item, index) => total + Math.abs(item - secondList[index]), 0)
}

console.log(countError(input))