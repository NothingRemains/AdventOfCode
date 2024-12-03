// Advent of Code 2024, Day 3, Part 1
// NOTE:  Put your input data into notepad and replace all backticks and $ with nothing!

const parse = str => {
    let validNums = str
                        .split("mul")
                        .map(el => el.slice(1, el.indexOf(")")))
                        .filter(el => el).map(el => el.split(","))
                        .map(el => el.map(Number))
                        .filter(el => !el.includes(NaN)  && el.length === 2)

    return validNums
 }
 
 const findVal = data => (parse(data)).reduce((a,c) => a + c[0]*c[1], 0)