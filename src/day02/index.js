import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.split(''));

const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];

const movements = {
    '1U': false,
    '1D': '4',
    '1L': false,
    '1R': '2',

    '2U': false,
    '2D': '5',
    '2L': '1',
    '2R': '3',

    '3U': false,
    '3D': '6',
    '3L': '2',
    '3R': false,

    '4U': '1',
    '4D': '7',
    '4L': false,
    '4R': '5',

    '5U': '2',
    '5D': '8',
    '5L': '4',
    '5R': '6',

    '6U': '3',
    '6D': '9',
    '6L': '5',
    '6R': false,

    '7U': '4',
    '7D': false,
    '7L': false,
    '7R': '8',

    '8U': '5',
    '8D': false,
    '8L': '7',
    '8R': '9',

    '9U': '6',
    '9D': false,
    '9L': '8',
    '9R': false,
}

const part1 = (rawInput) => {
    const input = parseInput(rawInput);

    const result = [];
    let key;
    key = '5';
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (movements[key+input[i][j]]) {
                key = movements[key+input[i][j]];
            }
        }
        result.push(key);
    }

    return result.join('');
};

const part2 = (rawInput) => {
    const input = parseInput(rawInput);

    return;
};

run({
    part1: {
        tests: [
            {
                input: `ULL
RRDDD
LURDL
UUUUD`, expected: "1985"
            },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            // { input: ``, expected: "" },
        ],
        solution: part2,
    },
    trimTestInputs: true,
});
