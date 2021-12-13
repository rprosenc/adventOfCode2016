import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.split(''));

const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];


const moveI = (key, direction) => {
    const movements = {
        '1U': false,    '2U': false,    '3U': false,
        '1D': '4',      '2D': '5',      '3D': '6',
        '1L': false,    '2L': '1',      '3L': '2',
        '1R': '2',      '2R': '3',      '3R': false,

        '4U': '1',      '5U': '2',      '6U': '3',
        '4D': '7',      '5D': '8',      '6D': '9',
        '4L': false,    '5L': '4',      '6L': '5',
        '4R': '5',      '5R': '6',      '6R': false,

        '7U': '4',      '8U': '5',      '9U': '6',
        '7D': false,    '8D': false,    '9D': false,
        '7L': false,    '8L': '7',      '9L': '8',
        '7R': '8',      '8R': '9',      '9R': false,
    }

    if (movements[key+direction]) {
        return movements[key+direction];
    }

    return key;
}

const moveII = (key, direction) => {
    const movements = {
                                        '1U': false,
                                        '1L': false,
                                        '1R': false,
                                        '1D': '3',

                        '2U': false,    '3U': '1',      '4U': false,
                        '2L': false,    '3L': '2',      '4L': '3',
                        '2R': '3',      '3R': '4',      '4R': false,
                        '2D': '6',      '3D': '7',      '4D': '8',

        '5U': false,    '6U': '2',      '7U': '3',      '8U': '4',      '9U': false,
        '5L': false,    '6L': '5',      '7L': '6',      '8L': '7',      '9L': '8',
        '5R': '6',      '6R': '7',      '7R': '8',      '8R': '9',      '9R': false,
        '5D': false,    '6D': 'A',      '7D': 'B',      '8D': 'C',      '9D': false,

                        'AU': '6',      'BU': '7',      'CU': '8',
                        'AL': false,    'BL': 'A',      'CL': 'B',
                        'AR': 'B',      'BR': 'C',      'CR': false,
                        'AD': false,    'BD': 'D',      'CD': false,

                                        'DU': 'B',
                                        'DL': false,
                                        'DR': false,
                                        'DD': false,
    }

    if (movements[key+direction]) {
        return movements[key+direction];
    }

    return key;
}

const part1 = (rawInput) => {
    const input = parseInput(rawInput);

    const result = [];
    let key;
    key = '5';
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            key = moveI(key, input[i][j])
        }
        result.push(key);
    }

    return result.join('');
};

const part2 = (rawInput) => {
    const input = parseInput(rawInput);

    const result = [];
    let key;
    key = '5';
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            key = moveII(key, input[i][j])
        }
        result.push(key);
    }

    return result.join('');
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
            {
                input: `ULL
RRDDD
LURDL
UUUUD`, expected: "5DB3"
            },
        ],
        solution: part2,
    },
    trimTestInputs: true,
});
