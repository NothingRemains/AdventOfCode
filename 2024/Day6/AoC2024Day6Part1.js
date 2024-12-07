// Advent of Code, Day 6, Part 1

const findPath = str => {
	let fullPath = str.split("\n").join("")
	let arr = str.split("\n")
  let pos = fullPath.indexOf("^")
  let [y, x] = [Math.floor(pos/arr[0].length), pos%arr[0].length]
  let dir = "U"
 
  const nextDir = {
  	"U": "R",
    "R": "D",
    "D": "L",
    "L": "U"
  }
  
  const moves = {
  	"U": [-1, 0],
    "D": [1, 0],
    "L": [0, -1],
    "R": [0, 1]
  }

  const seen = {}

  while (!((y === arr.length -1 && dir === "D") || (y === 0 && dir === "U") || (x === arr[0].length - 1 && dir === "R") || (x === 0 && dir === "L"))) {
      let currPos = `${x},${y}`
      let nextPos = arr[y+moves[dir][0]][x+moves[dir][1]]

      seen[currPos] = true

      if (nextPos === "#") {
        dir = nextDir[dir]
      }else {
        x += moves[dir][1]
        y += moves[dir][0]
      }
    }
  
  return Object.keys(seen).length + !(`${y},${x}` in seen)
}