// Advent of Code 2024, Day 3, Part 2
// Sanitize input by removing ` (backtick) and $ in notepad

// Append do() to the string (for the first map purposes) and split on don't()
// Take each element within a don't and split it on do(), then take the part after the do()
// Join the do() parts of the string and split on mul, then slice what should be the number part out of the middle with the second map
// Filter any empty elements
// Split what should be data with  x,y  form on , and map each side to a number
// Filter out values which had NaN (invalid entries)
// reduce the remaining entries to find the final answer

const parse = s => (`do()${s}`)
    .split("don't()")
    .map(el => el.split("do()").slice(1).join(""))
    .join("")
    .split("mul")
    .map(el => el.slice(1, el.indexOf(")")))
    .filter(el => el)
    .map(el => el.split(",").map(Number))
    .filter(el => !el.includes(NaN) && el.length === 2)


const findVal = data => (parse(data)).reduce((a, c) => a + c[0] * c[1], 0)