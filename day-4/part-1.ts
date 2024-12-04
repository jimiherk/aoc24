const input = Deno.readTextFileSync('input.txt').split('\n').map(el => el.split(''));

const sequence = ["X", "M", "A", "S"];
const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],            [0, 1],
    [1, -1], [1, 0], [1, 1]
];

let foundWords = 0;

for (let row = 0; row < input.length; row++) {
    for(let column = 0; column < input[row].length; column++) {
        if (input[row][column] != "X") continue;

        for (const direction of directions) {
            const res = findSequence(direction, [row, column], 0);

            if (res) foundWords++;
        }
    }
}

function findSequence(direction: number[], coordinates: number[], current: number) {
    if (current == 3) {
        console.log("Found XMAS!");
        return true;
    };

    console.log(current)

    coordinates = [coordinates[0] + direction[0], coordinates[1] + direction[1]];
    current++;

    if (coordinates[0] < 0 || coordinates[0] >= input.length || coordinates[1] < 0 || coordinates[1] >= input[0].length) {
        return false;
    }

    if (input[coordinates[0]][coordinates[1]] == sequence[current]) {
        console.log("Found ", sequence[current]);
        return findSequence(direction, coordinates, current);
    }
    else return false;
}

console.log(foundWords)