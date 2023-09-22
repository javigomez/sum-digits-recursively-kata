export function sumDigitsRecursivelyUntilSingleDigit(number:number): number {
    if (isOneSingleDigit(number)) {
        return number;
    }

    const summedDigits = splitIntoDigits(number).reduce(sumDigits(), 0);
    return sumDigitsRecursivelyUntilSingleDigit(summedDigits);
}

function sumDigits() {
    return (accumulatedDigitSum: number, eachDigit: string) => accumulatedDigitSum + parseInt(eachDigit);
}

const splitIntoDigits = (number: number) => {
    return number.toString().split('');
}

const isOneSingleDigit = (number: number):boolean => number < 10;
