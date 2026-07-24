/* 문제 1*/
function isAdult(x){
    if(x>=20){
        return true;
    }else{
        return false;

    }
    
}
console.log(isAdult(25));
console.log(isAdult(17));

/* 문제 2*/

const numbers = [10, 20, 30, 40, 50] ;
function sumArray(x){
    let A=0;
    for(let i = 0; i<numbers.length; i++){
        A += numbers[i];

    }
    return A;
}

console.log(sumArray(numbers));



/* 문제 3*/
const words = ['apple', 'banana', 'kiwi', 'strawberry'];
let max = words[0];
function findLongestWord(x){
    for(let i = 0; i<x.length; i++){
        if(x[i].length > max.length){
            max = x[i];
        }
    }   
    return max;
}

console.log(findLongestWord(words));


/* 문제 4*/
let userScore = 0;
function gainScore(x){
    userScore += 10;
    return x;

}

function loseScore(x){
    userScore -= 5;
    return x;
}
gainScore(userScore);
gainScore(userScore);
gainScore(userScore);
loseScore(userScore);
console.log(userScore);


/* 문제 5*/
const students = [
{ name: '김철수', score: 85},
{ name: '이영희', score: 92},
{ name: '박민준', score: 78}
]

let max6 = students[0].score;


function findTopStudent(x){
    for(let i=0; i<x.length; i++){
    if(x[i].score > max6){
        max6 = x[i].score;
    }
    
    }   
return max6;

}

console.log(findTopStudent(students));

/*문제 6 */
const products = [
{ name: '노트북', price: 1200000, stock: 5 },
{ name: '모니터', price: 350000, stock: 12 },
{ name: '키보드', price: 80000, stock: 25 }
] ;

let html =''
function renderProducts(){
    for(let i = 0; i<products.length; i++){
        
        html += `<h4>  ${products[i].name} </h4>`
    }
    
    
    document.querySelector('div').innerHTML(html);
}




/* 문제 7*/

let num1 =5;
let num2 =5;
let operator = '+';

function calculator(x,y,z){
    let result;
    if(z=='+'){
        result= x + y;
    }
    else if(z =='-'){
        result= x - y;

    }else{
        return 0;
    }

    return result;
}

console.log(calculator(num1,num2,operator));

/* 문제8 */
let todoList=['장보기', '운동하기'];
let html1 =''
function renderList(){
    for(let i =0; i<todoList.length; i++){
        let list = todoList[i];

        html1 += `<li>${list}</li>`

    }

    document.querySelector('ul').innerHTML = html1;
}

renderList()


/* 문제9 */
let age = prompt('나이 입력:');

function getTiketPrice(x){
    if(x<8){
        console.log('무료');
    }
    else if(x>=8 && x<=19){
        console.log('5000원');

    }
    else{
        console.log('5000원');

    }
}

getTiketPrice(age);


