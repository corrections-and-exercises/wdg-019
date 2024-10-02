let input = process.argv.slice(2);

const numbers = input.reduce(function (acc, curr) {
    let test = parseFloat(curr);
    if (!isNaN(test)) {
        acc.push(test);
    }
    return acc;
}, []);

console.log(numbers);
