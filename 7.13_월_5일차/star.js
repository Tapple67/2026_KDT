/* 별 찍기 */


let output = '';
let html4 = '';
for(let i=0; i<10; i++){
    for(let j=0; j <= i; j++){
        output += '* ';
    }
    output += `<br>`
}

for(let i=0; i<10; i++){
    for(let k=0; i < 9-k; k++){
        output +='* '
    }
    output += `<br>`
}
    html4 += output;
    document.querySelector('p').innerHTML = html4