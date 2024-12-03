// Advent of Code 2024, Day 2, Part 2

const parse = str => {
    return str.split("\n").filter(el=> el).map(el => el.split(" ").map(Number))
}

function hasSafePermutation (arr) {
	for (let i = 0; i < arr.length; i++) {
   let curr = arr.slice()
   curr.splice(i,1)

    if (isIncreasing(curr) || isDecreasing(curr)) return true;
  }
  
  return false;
} 

function isIncreasing(arr) {
	return arr.every((el,ind, self) => (el - self[ind-1] >=1) && (el - self[ind-1] <= 3) || self[ind-1] === undefined)
}

function isDecreasing (arr) {
	return arr.every((el,ind, self) => (self[ind-1] - el >=1) && (self[ind-1] - el <= 3) || self[ind-1] === undefined )
}

function findSafe (data) {
	let arrs = parse(data)

	return arrs.filter(el => hasSafePermutation(el)).length
}