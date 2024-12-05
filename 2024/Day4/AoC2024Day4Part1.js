// Advent of Code 2024, Day 4, Part 1

const parse = s => s.split("\n").filter(el => el)

const countXmas = str => {
    let arr = parse(str)
    let res = 0

    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr[0].length; col++) {
            let currLetter = arr[row][col]
            if (currLetter !== "X") continue;

            let [farEnoughUp, farEnoughDown, farEnoughLeft, farEnoughRight] =
                [
                    row <= arr.length -4,
                    row >= 3,
                    col <= arr[0].length - 4,
                    col >= 3
                ]
            let words = []
            
            // Check for vertical (up/down) instances
            if (farEnoughUp) words.push(currLetter + (arr[row + 1][col]) + arr[row + 2][col] + arr[row + 3][col]);
            if (farEnoughDown) words.push(currLetter + arr[row - 1][col] + arr[row - 2][col] + arr[row - 3][col]);
            
            // Check for horizontal (left/right) instances
            if (farEnoughLeft) words.push(currLetter + arr[row][col + 1] + arr[row][col + 2] + arr[row][col + 3]);
            if (farEnoughRight) words.push(currLetter + arr[row][col - 1] + arr[row][col - 2] + arr[row][col - 3]);
            
            // Check diagonal down/right
            if (farEnoughUp && farEnoughLeft) words.push(currLetter + arr[row + 1][col + 1] + arr[row + 2][col + 2] + arr[row + 3][col + 3]);
            
            // Check diagonal up.left
            if (farEnoughDown && farEnoughRight) words.push(currLetter + arr[row - 1][col - 1] + arr[row - 2][col - 2] + arr[row - 3][col - 3]);
            
            // Check diagonal up/right
            if (farEnoughDown && farEnoughLeft) words.push(currLetter + arr[row - 1][col + 1] + arr[row - 2][col + 2] + arr[row - 3][col + 3]);
            
            // Check diagonal down/left
            if (farEnoughUp && farEnoughRight) words.push(currLetter + arr[row + 1][col - 1] + arr[row + 2][col - 2] + arr[row + 3][col - 3]);

            res += words.filter(el => el === "XMAS").length
        }
    }

    return res
}
