import { readFileSync } from 'fs';

let contents = readFileSync('data/day4.txt', 'utf-8');
let passports = contents.split('\n\n');

function part1(): number {
    let numValid = 0;

    for (let passport of passports) {
        if (passport.includes('byr') && passport.includes('iyr') && passport.includes('eyr') &&
            passport.includes('hgt') && passport.includes('hcl') && passport.includes('ecl') &&
            passport.includes('pid')) {
                numValid++;
        }
    }

    return numValid;
}

function getFieldValue(passport: string): {[id: string]: string} {
    let splitAtSpace = passport.split(" ");
    let splitFully: string[] = [];
    for (let elem of splitAtSpace) {
        let splitAtNewLine = elem.split('\n');
        for (let single of splitAtNewLine) {
            splitFully.push(single);
        }
    }

    let dict: {[id: string]: string} = {};
    for (let keyValPair of splitFully) {
        let indexOfColon = keyValPair.indexOf(':');
        let key = keyValPair.substring(0, indexOfColon);
        let val = keyValPair.substring(indexOfColon + 1);
        dict[key] = val;
    }
    return dict;
}

function checkYear(year: number, lower: number, upper: number): boolean {
    return lower <= year && year <= upper;
}

function checkByr(year: number): boolean {
    return checkYear(year, 1920, 2002);
}

function checkIyr(year: number): boolean {
    return checkYear(year, 2010, 2020);
}

function checkEyr(year: number): boolean {
    return checkYear(year, 2020, 2030);
}

function checkHgt(hgt: string): boolean {
    if (hgt.includes('cm')) {
        let num = Number(hgt.substring(0, hgt.indexOf('cm')));
        return 150 <= num && num <= 193;
    } else if (hgt.includes('in')) {
        let num = Number(hgt.substring(0, hgt.indexOf('in')));
        return 59 <= num && num <= 76;
    } else {
        return false;
    }
}

function checkHcl(hcl: string): boolean {
    if (hcl.charAt(0) !== '#') {
        return false;
    }
    
    let chars = new Set<string>();
    for (let char of Array.from(hcl.substring(1))) {
        chars.add(char);
    }
    
    let allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let char of allowedChars) {
        chars.delete(char);
    }

    return chars.size === 0;
}

let ecls = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
function checkEcl(ecl: string): boolean {
    return ecls.includes(ecl);
}

function checkPid(pid: string): boolean {
    if (pid.length !== 9) {
        return false;
    }

    let pidSet = new Set(pid);
    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let num of nums) {
        pidSet.delete(num);
    }

    return pidSet.size === 0;
}

function part2(): number {
    let numValid = 0;

    for (let passport of passports) {
        if (passport.includes('byr') && passport.includes('iyr') && passport.includes('eyr') &&
            passport.includes('hgt') && passport.includes('hcl') && passport.includes('ecl') &&
            passport.includes('pid')) {
                let byr = Number(getFieldValue(passport)['byr']);
                let iyr = Number(getFieldValue(passport)['iyr']);
                let eyr = Number(getFieldValue(passport)['eyr']);
                let hgt = getFieldValue(passport)['hgt'];
                let hcl = getFieldValue(passport)['hcl'];
                let ecl = getFieldValue(passport)['ecl'];
                let pid = getFieldValue(passport)['pid'];
                
                if (checkByr(byr) && checkIyr(iyr) && checkEyr(eyr) && checkHgt(hgt) && checkHcl(hcl) &&
                    checkEcl(ecl) && checkPid(pid)) {
                        numValid++;
                }
        }
    }

    return numValid;
}

console.log(part1());
console.log(part2());