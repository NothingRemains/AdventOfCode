// Advent of Code 2024, Day 7, Part 2

const parse = str => {
    let vals = str.split("\n").map(el => el.split(": "))
    let obj = Object.fromEntries(vals.map(el => el.map(str => str.split(" ").map(Number))))

    return obj
}

const findValid = str => {
    const equationParts = parse(str)

    return Object.entries(equationParts).map(el => isValid(el) ? +el[0] : 0).reduce((a, c) => a + c, 0)
}

function isValid(arr) {
    let target = +arr[0]
    let possible = [arr.slice(1).flat().map(Number)]
    console.log(target, possible)
    while (possible.length) {
        let curr = possible.pop()
        if (curr.length === 1) {
            if (curr[0] === target) return true;
            continue;
        } else {
            let num = curr.shift()
            let add = curr.slice()
            let mult = curr.slice()
            let conc = curr.slice()
            add[0] = add[0] + num
            mult[0] = mult[0] * num
            conc[0] = +(String(num) + conc[0])
            possible.push(add)
            possible.push(mult)
            possible.push(conc)
        }

    }

    return false
}