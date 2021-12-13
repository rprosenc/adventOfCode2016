import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split(', ');

const left = (v) => {
    const rotations = {
        '0_1': [-1, 0],
        '-1_0': [0, -1],
        '0_-1': [1, 0],
        '1_0': [0, 1]
    }
    return rotations[v.join('_')];
}
const right = (v) => {
    const rotations = {
        '0_1': [1, 0],
        '1_0': [0, -1],
        '0_-1': [-1, 0],
        '-1_0': [0, 1]
    }
    return rotations[v.join('_')];
}

const eq = (a, b) => a[0]===b[0] && a[1]===b[1];
const add = (a, b) => [a[0] + b[0], a[1] + b[1]];
const mul = (a, b) => [a[0] * b[0], a[1] * b[1]];
const mulScal = (v, s) => [v[0] * s, v[1] * s];
const move = (position, direction, input) => {
    const length = Number(input.substr(1));
    let newDirection;
    switch (input.substr(0, 1)) {
        case 'L':
            newDirection = left(direction);
            break;
        case 'R':
            newDirection = right(direction);
            break;
    }
    const newPosition = add(position, mulScal(newDirection, length));

    return [newPosition, newDirection];
}
const dist = p => Math.abs(p[0]) + Math.abs(p[1])

const part1 = (rawInput) => {
    const input = parseInput(rawInput);
    let d = [0, 1]; // x/y
    let p = [0, 0];

    for (var i = 0; i < input.length; i++) {
        [p, d] = move(p, d, input[i]);
    }

    return dist(p);
};

const part2 = (rawInput) => {
    const input = parseInput(rawInput);
    let d = [0, 1]; // x/y
    let p = [0, 0];
    let key;

    const visited = ['0_0'];
    let pp;
    for (var i = 0; i < input.length; i++) {
        pp = [...p];
        [p, d] = move(p, d, input[i]);

        while(!eq(p, pp)) {
            pp = add(pp, d);
            key = pp.join('_');
            if (visited.includes(key)) {
                return dist(pp);
            }
            visited.push(key);
        }

    }

    return dist(p);
};

run({
    part1: {
        tests: [
            {input: `R2, L3`, expected: 5},
            {input: `R2, R2, R2`, expected: 2},
            {input: `R5, L5, R5, R3`, expected: 12},
        ],
        solution: part1,
    },
    part2: {
        tests: [
            {input: `R8, R4, R4, R8`, expected: 4},
        ],
        solution: part2,
    },
    trimTestInputs: true,
});
