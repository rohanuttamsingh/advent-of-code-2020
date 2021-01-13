import { readFileSync } from 'fs';

let contents = readFileSync('data/day7.txt', 'utf-8').trimEnd();
let rules = contents.split('\n');

function getBagColor(rule: string) {
    return rule.substring(0, rule.indexOf(' bags'));
}

function canContainKey(keys: string[], containers: Set<string>): number {
    if (keys.length === 0) {
        return 0;
    }

    let key = String(keys.pop());
    let numContaining = 0;

    for (let rule of rules) {
        if (rule.substring(rule.indexOf('contain')).includes(key) && !containers.has(getBagColor(rule))) {
            numContaining++;
            containers.add(getBagColor(rule));
            keys.push(getBagColor(rule));
        }
    }
    return numContaining + canContainKey(keys, containers);
}

function part1(): number {
    return canContainKey(['shiny gold'], new Set<string>());
}

console.log(part1());