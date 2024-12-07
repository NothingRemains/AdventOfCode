// Advent of Code, Day 6, Part 2

const checkObstructions = str => {
	let fullPath = str.slice().split("\n").join("")
	let arr = str.split("\n")

  let pos = fullPath.indexOf("^")
  let [y, x] = [Math.floor(pos/arr[0].length), pos%arr[0].length]
  let validObstacle = 0
  
  for (let i = 0; i < arr.length; i++) {
  	for (let j = 0; j < arr[0].length; j++) {

    	let currMap = str.split("\n").map(el => el.split(""))
      if (currMap[i][j] === "^") continue;
      currMap[i][j] = "#"

    	validObstacle += findPath(currMap.map(el => el.join("")), y, x)
    }
  }
  
  return validObstacle
}

const findPath = (arr, y, x) => {
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
      let currPos = `${y},${x},${dir}`
      let nextPos = arr[y+moves[dir][0]][x+moves[dir][1]]

      if (currPos in seen) {
      	return true;
      }else if (nextPos === "#") {
        dir = nextDir[dir]
      }else {
        x += moves[dir][1]
        y += moves[dir][0]
      }
      
      seen[currPos] = true
    }
  
  return false
}