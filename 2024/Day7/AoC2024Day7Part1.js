// Advent of Code 2024, Day 7, Part 1

const parse = str => {
    let vals = str.split("\n").map(el => el.split(": "))
    let obj = Object.fromEntries(vals.map(el => el.map(str => str.split(" ").map(Number))))

    return obj
}

const findValid = str => {
    const equationParts = parse(str)

    return Object.entries(equationParts).filter(el => isValid(el)).reduce((a, c) => a + +c[0], 0)
}

function isValid(arr) {
    let possible = [arr.slice().flat().map(Number)]
    while (possible.length) {
        let curr = possible.pop()
        if (curr.length === 1) {
            if (curr[0] === 0) return true;
            continue;
        } else {
            let num = curr.pop()
            let sub = curr.slice()
            let div = curr.slice()
            sub[0] = sub[0] - num
            div[0] = div[0] / num
            possible.push(sub)
            possible.push(div)
        }

    }

    return false
}