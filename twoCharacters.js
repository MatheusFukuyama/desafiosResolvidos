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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    const arrayS = s.split('')
    const characters = []
    const combinacoes = []
    let maiorValor = 0

    arrayS.forEach(element => {
        if(!characters.includes(element)) {
            characters.push(element)
        }
    });

    for(let i=0; i<characters.length; i++) {
        for(let j=i; j< characters.length; j++) {
            combinacoes.push([i,j])
        }
    }

    let arrayAuxiliar = []
    combinacoes.forEach(combinacao => {

        arrayAuxiliar = []
        arrayS.forEach(element => {
            arrayAuxiliar.push(element)
        })

        arrayAuxiliar.forEach((element, index) => {
            if(element != combinacao[0] && element != combinacao[1])
            arrayAuxiliar.splice(index, 1)
        })

        if(arrayAuxiliar.length > maiorValor)
            maiorValor = arrayAuxiliar.length

    })

    return maiorValor

}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const l = parseInt(readLine().trim(), 10);

    // const s = readLine();

    const result = alternate('beabeefeab');

    ws.write(result + '\n');

    ws.end();
}
