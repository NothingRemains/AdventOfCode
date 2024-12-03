// Advent of Code 2024, Day 2, Part 1

const parse = str => {
    return str.split("\n").filter(el=> el).map(el => el.split(" ").map(Number))
}

function isIncreasing(arr) {
	return arr.every((el,ind, self) => (el - self[ind-1] >=1) && (el - self[ind-1] <= 3) || self[ind-1] === undefined)
}

function isDecreasing (arr) {
	return arr.every((el,ind, self) => (self[ind-1] - el >=1) && (self[ind-1] - el <= 3) || self[ind-1] === undefined )
}

function findSafe (data) {
	let arrs = parse(data)

	return arrs.filter(el => (isDecreasing(el)) || (isIncreasing(el))).length
}