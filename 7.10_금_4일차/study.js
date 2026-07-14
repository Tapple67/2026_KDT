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

/* 문제 8 */

// let A = prompt('플레이어 A:');
// let B = prompt('플레이어 B:');

// if(A == (B+1) %3 )
//   console.log("A 승");
// else if (A==B)
//   console.log("무승부");
// else
//   console.log("B 승");


/* 문제 9*/
// let carArray = ['250어7142', '142가7415', '888호8888']
// let locationArray = [ 'A1','B1','C2'];
// let input = prompt();

// A = carArray.indexOf(input);
// console.log(locationArray[A])


/* 문제 10 */
// let courseList = ['수학','영어','과학','국어'];

// let input = prompt('제외할 과목을 입력하세요');
// A = courseList.indexOf(input)
// courseList.splice(A,1)
// console.log(courseList);






/* 반복문 */

//생각해보기
// let A = [];

// for(let i = 0; i < 3;i++ ){
// let input = prompt();
// A.push(input)

// }
// console.log(A)


/* 반복문 실습 문제 1*/

// for(let i=0; i<10; i++){
//   console.log(i+1);
// }

// let fruits = ['사과', '바나나', '포도', '딸기'];

// for(let j=0; j<fruits.length; j++){
//   console.log(fruits[j]);
// }


// let numbers = [1,2,3,4,5];
// rvnumbers = numbers.reverse();
// console.log(rvnumbers);

// let number = 0;
// for(let i=1; i<=50; i++){
  
//   number += i;
// }
// console.log(number);

// for(let i=1; i<=20; i++){
//   if(i%2 == 0)
//     console.log(i)
// }

// let scores = [85,92,78,65,92];
// let sum = 0;
// let avg = 0;
// for(let i=0; i<scores.length; i++){
//   sum += scores[i];
//   avg = sum / scores.length;
// }
// console.log(sum, avg);

// let scores = [77, 82, 100, 54, 96];

// for(let i=0; i < scores.length; i++){
//   if(scores[i]==100){
//     console.log('100점 만점자를 찾았습니다');
//     break;
//   }
// }

// let scores = [90, 45, 72, 88, 59, 100];
// let sum=0;
// for(let i=0; i < scores.length; i++){
//   let A = scores[i]

//   if(scores[i]<60)
//     continue;
  
  
//   console.log(A);
  
// }

// let bloodTypes = ['A', 'B','O','AB','A','B','A']
// let A = 0;
// for(let i=0; i < scores.length; i++){
//   if(bloodTypes[i]=='A')
//     A++;
// }
// console.log(A);


let nameArray=['유재석','강호동','신동엽'];
let scores= [92, 86, 72];
let k = 0;
let html = ""

for(let i=0; i < scores.length; i++){
  html = html + (nameArray[i]);
  let k = scores[i]/10; 
  for(let j=1; j <= 10; j++){

    if(scores[i] / 10> j )
      html= html +('●');
    else
      html= html + '○';
  }
  html = html + "<br />"
}

document.querySelector("p").innerHTML = html  // 출력

