// Advent of Code 2024, Day 5, Part 2

const parse = s => {
    let [order, instructions] = s.split("\n\n")
    order = order.split("\n").map(el => el.split("|").map(e => Number(e))).filter(el => el)

    let uniquePages = Array.from(new Set(order.flat()))
    instructions = instructions.split("\n").map(el => el.split(",").map(e => Number(e)))

    return [order, instructions, uniquePages]
}

const findTotal = s => {
    let [order, instructions, uniquePages] = parse(s)
    let rules = {}

    for (let i = 0; i < uniquePages.length; i++) {
        rules[uniquePages[i]] = new Array()
    }

    for (let j = 0; j < order.length; j++) {
        rules[order[j][0]].push(order[j][1])
    }

    let invalidOrders = instructions.filter(el => !(isValidOrder(el, rules)))

    return invalidOrders.map(el => putInOrder(el, rules)).reduce((a, c) => a + c[Math.floor(c.length / 2)], 0)
}

const isValidOrder = (inst, rules) => {
    for (let i = 0; i < inst.length - 1; i++) {
        let curr = inst[i]
        let mustComeAfter = inst.slice(i + 1)

        if (!(mustComeAfter.every(el => rules[curr].includes(el)))) return false;
    }

    return true
}

const putInOrder = (inst, rules) => {
    return inst.sort((a, b) => rules[a].includes(b) ? -1 : (rules[b].includes(a) ? 1 : 0))
}