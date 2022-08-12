'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

const isUpperCase = str => str === str.toUpperCase();

function abbreviation(a, b) {
    const arraya = a.split('')
    const arrayb = b.split('')
    let possivel = true
    let encontrado = false

    if(arrayb.length > arraya.length)
        return "NOT"

    for(let i=0; i<b.length && possivel; i++) {
        for(let j=i; j<a.length & possivel; j++) {
            if(arraya[j] == arrayb[i]) {
                arraya[j] = ''
                break;
            }
        }
    
    }


    if(possivel)
        return 'YES'
    else
        return 'NOT'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const a = readLine();

        const b = readLine();

        const result = abbreviation(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
