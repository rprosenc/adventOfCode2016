import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.trim().split(/ +/).map(Number).sort((a,b)=>a<b?-1:1));

const part1 = (rawInput) => {
    const input = parseInput(rawInput);

    return input.filter(a=>a[0]+a[1]>a[2]).length;
};

const part2 = (rawInput) => {
    const input = parseInput(rawInput);

    return;
};

run({
    part1: {
        tests: [
            { input: `5 10 25`, expected: 0 },
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
