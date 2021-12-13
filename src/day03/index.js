import run from "aocrunner";
import {transcode} from "buffer";

const parseInput = (rawInput) => rawInput.split('\n').map(l => l.trim().split(/ +/).map(Number));

const part1 = (rawInput) => {
    const input = parseInput(rawInput);

    return input.map(t=>t.sort((a,b)=>a<b?-1:1)).filter(a=>a[0]+a[1]>a[2]).length;
};

const part2 = (rawInput) => {
    const input = parseInput(rawInput);
    const triangles = [];
    for (let i = 0; i < input.length; i+=3) {
        triangles.push([input[i][0], input[i+1][0], input[i+2][0]]);
        triangles.push([input[i][1], input[i+1][1], input[i+2][1]]);
        triangles.push([input[i][2], input[i+1][2], input[i+2][2]]);
    }

    return triangles.map(t=>t.sort((a,b)=>a<b?-1:1)).filter(t=>t[0]+t[1]>t[2]).length;
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
            { input: `101 301 501
102 302 502
103 303 503
201 401 601
202 402 602
203 403 603`, expected: 6 },
        ],
        solution: part2,
    },
    trimTestInputs: true,
});
