// /*문제1\ */
// let 밑변 =prompt('밑변:');
// let 높이 =prompt('높이:');

// console.log(밑변 * 높이/2 );

// /*문제2 */
// let 섭씨 =prompt('섭씨:');
// console.log((섭씨 * 9 /5) + 32);

// /*문제3 */
// let 년도 = prompt('태어난 년도:');
// console.log((2025 - 년도));



// /*문제4 */
// let 키 = prompt('키:');
// let 몸무게 = prompt('몸무게:');
// console.log((몸무게/(키*키)));


// /*문제5 */
// let 아이디 = prompt('아이디:');
// let 이메일 = prompt('이메일:');
// let result5;
// result5 = 아이디=='admin' || 이메일=='admin@test.com' ? '관리자':'일반사용자';
// console.log(result5);


/*문제6 */

let 점수 = prompt('점수:');
let result6;
result6 = 점수 >=90 ? 'A' : 점수>=80 && 점수 < 90?'B':'c'
let html = ''
html += `  ${result6 }`

document.querySelector('h2').innerHTML = html;

/*문제7 */
let 나이 = prompt('나이:');
let result7;
result7 = 나이>=20 && 점수 < 30 ?'이벤트 대상입니다':'이벤트 대상이아닙니다'
console.log(result7);

/*문제8 */
let likeCount ='3'
likeCount++;
console.log('좋아요=' + likeCount);


/*문제9 */
let todoList=['장보기','과제하기'];
let 할일 = prompt('할일:');
todoList.push(할일);

/*문제10 */
let waitingList =['김민준', '이서연', '박도윤', '최지우'];
console.log(waitingList[waitingList.length-1])

