/* 문제 1 */


/*
let fruitList = ['사과', '바나나'];

let input = prompt('과일 이름을 입력하세요');

if (fruitList.includes(input)) {
  console.log('이미 있는 과일');
} else {
  fruitList.push(input);
  console.log(fruitList);
}
*/

/* 문제2 */

// let input = prompt('주민등록 번호 13자리 입력');

//     if(input[6] == '3' || input[6] == '1'){  
//         console.log('blue');
//     }else{
//         console.log('red');

//     }

// /*문제 3 */
// let input3 = prompt('구매금액:');
// let result = 0;

// if(input3 >= 50000){
//     result = (input3 * 0.9);
// }else if(30000 <= input3 && input3 < 50000){
//     result = (input3 * 0.95);
// }else if(10000 <= input3 && input3 < 30000){
//     result = (input3 * 0.99);
// }else{
//     result = input3;
// }

// console.log(result);

// /*문제4*/
// let input4 = prompt('1~12월중 하나:');

// if(input4>=3 && input4 <=5){
//     console.log('봄');
// }else if(input4>=6 && input4 <=8){
//     console.log('여름');
// }else if(input4>=9 && input4 <=11){
//     console.log('가을');
// }else if(input4>=1 && input4 <=12){
//     console.log('겨울');
// }else{
//     console.log('잘못된 월입니다.');

// }

// /* 문제5 */
// let num1 =prompt('1:');
// let num2 =prompt('2:');
// let num3 =prompt('3:');
// let result; 
// if(num1 > num2){
//     result = num1;
// }else if(num1 > num3){
//     result = num1;
// }else if(num2 > num1){
//     result = num2;
// }else if(num2 > num3){
//     result = num2;
// }else if(num3 > num1){
//     result = num3;
// }else{
//     result = num3;

// }
// console.log(result);


// /* 문제 6  */
// let year = prompt();

// if((year % 4 ==0 && year % 100 != 0 )|| year % 400 ==0){
//     console.log(year+'년은 윤년입니다');
// }else{
//     console.log(year +'년은 평년입니다');

// }


// /* 문제 7 */
// let num4 = prompt();
// let num5 = prompt();
// let num6 = prompt();

// if(num4>num5){
//     let temp = num4;
//     num4 = num5;
//     num5 = temp;
// }


// if(num5>num6){
//     let temp = num5;
//     num5 = num6;
//     num6 = temp;
// }

// if(num6>num4){
//     let temp = num6;
//     num6 = num4;
//     num4 = temp;
// }

// console.log(num4 + num5 + num6);


/* 문제 8 */

let A = prompt('플레이어 A:');
let B = prompt('플레이어 B:');

if(A == (B+1) %3 )
  console.log("A 승");
else if (A==B)
  console.log("무승부");
else
  console.log("B 승");


/* 문제 9*/
let carArray = ['250어7142', '142가7415', '888호8888']
let locationArray = [ 'A1','B1','C2'];
let input = prompt();

A = carArray.indexOf(input);
console.log(locationArray[A])


/* 문제 10 */
let courseList = ['수학','영어','과학','국어'];

let input = prompt('제외할 과목을 입력하세요');
A = courseList.indexOf(input)
courseList.splice(A,1)
console.log(courseList);