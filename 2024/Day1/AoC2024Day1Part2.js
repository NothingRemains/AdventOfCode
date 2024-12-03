// Advent of Code 2024, Day 1, Part 2

const parse = str => {
    const arr = str.split("\n").map(el => el.split("   ").map(e => Number(e)))
    let first = []
    let second = []
    
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        
        first.push(curr[0])
        second.push(curr[1])
    }

    return [first, second]
}

function checkSimilarity (data) {
	let [firstList, secondList] = parse(data)
	let secondListCounts = {}
  
  for (let i = 0; i < secondList.length; i++) {
  	secondListCounts[secondList[i]] = secondListCounts[secondList[i]] + 1 || 1 
  }

  return firstList.reduce((total, item) => total + item*(secondListCounts[item] || 0), 0)  
}