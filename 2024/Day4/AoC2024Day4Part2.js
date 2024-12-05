// Advent of Code 2024, Day 4, Part 2

const parse = s => s.split("\n").filter(el => el)

const countXmas = str => {
    let arr = parse(str)
    let res = 0

    for (let row = 1; row < arr.length - 1; row++) {

        for (let col = 1; col < arr[0].length - 1; col++) {
            if (arr[row][col] !== "A") continue;
            let [currLetter, upLeft, upRight, downLeft, downRight] = [arr[row][col], arr[row - 1][col - 1], arr[row - 1][col + 1], arr[row + 1][col - 1], arr[row + 1][col + 1]]
            let [diagRight, diagLeft] = [upLeft + currLetter + downRight, downLeft + currLetter + upRight]

            if ((diagRight === "SAM" || diagRight === "MAS") && (diagLeft === "SAM" || diagLeft === "MAS")) res++;
        }
    }

    return res
}