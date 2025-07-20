let num: number = 5;
let speed: string = 'fast';

let position:{ x: number; y: number } = {
    x: 10,
    y: 20
}

let json = '{"x":10, "y":"apple"}'
// const output = JSON.parse(json);
const output: { x: number, y: string } = JSON.parse( json );
console.log( output );


let word = [ "red", "green", "black" ];
let found = false;

for( let i = 0; i < word.length; i++ ){
    if( word[ i ] === 'green' ){
        found = true;
    }
}

let nums = [ -19, -3, 40 ];
let numberAboveZero: boolean | number = false;


for( let i = 0; i < word.length; i++ ){
    if( nums[ i ] > 0 ){
        numberAboveZero = nums[ i ];
    }
    console.log(`numberAboveZero ${numberAboveZero}`);
}
