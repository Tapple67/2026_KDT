// /* 문제 1 */
// let product = {};

// let product_name = prompt("제품명을 입력하세요:");
// let price = prompt("가격을 입력하세요:");
// let maker = prompt("제조사를 입력하세요:");

// product = {
//     product_name: product_name,
//     price: price,
//     maker: maker};

// console.log(product);


// const members=[
//     {id:'user1', password:'pass1',name:'사용자1'},
//     {id:'user2', password:'pass2',name:'사용자2'},
    
// ];

// let member = {};

// let user_id = prompt("아이디를 입력하세요:");
// let user_pw = prompt("비밀번호를 입력하세요:");
// let user_name = prompt("이름을 입력하세요:");
// let A = false;
// member = {id: user_id, password: user_pw, name: user_name};
// for(let i=0; i<members.length ; i++){
//     if(member.id == members[i].id){
//         A = true;
//         console.log("이미 있는 아이디입니다");
//         break;
//     }
    
// }
// if(A==false){
//     members.push(member);
    
// }

// console.log(members);


// /*문제 3*/

// const scores = [
// { name: 'A', math: 80, science: 92 },
// { name: 'B', math: 95, science: 88 },
// { name: 'C', math: 76, science: 78 }
// ];


// let score = [];

// for(let i=0; i<scores.length; i++){
//     score.push(scores[i].math);

    
// }
// console.log(score);

/* 문제 4*/


// const products = [
// { id: 1, name: '사과' },
// { id: 2, name: '바나나' },
// { id: 3, name: '포도'},
// { id: 4, name: '딸기' }
// ];
// let product = [];
// let three = false;

// for(let i=0; i<products.length; i++){
//     if(products[i].id == 3){
//         three = true;
//         console.log(products[i]);
//     }
// }
// if(three = false){
//     console.log('상품을 찾을 수 없습니다.')
// }


// /* 문제5 */
// const users = [
// { id: 1, name: '유저1', isActive: true },
// { id: 2, name: '유저2', isActive: false },
// { id: 3, name: '유저3', isActive: true },
// { id: 4, name: '유저4', isActive: false }
// ];


// let activeUsers = [];

// for(let i=0; i<users.length; i++){
//     if(users[i].isActive == true){
//         activeUsers.push(users[i]);
//     }
    
// }
// console.log(activeUsers);


// /* 문제 6 */
// const movies = [
// { title: '인셉션', director: '크리스토퍼 놀란' },
// { title: '기생충', director: '봉준호'},
// { title: '매트릭스', director: '워쇼스키 자매' }
// ];

// let movie = [];
// for(let i=0; i<movies.length; i++){

// movie.push(movies[i].title);
// }
// console.log(movie);


// /* 문제 7 */
// const team = [
// { name: '철수', department: '개발팀' },
// { name: '영희', department: '기획팀' },
// { name: '민수', department: '개발팀'},
// { name: '지혜', department: '기획팀' }
// ];

// let result=[{}];
// let dv = [];
// let pl =[];

// for(let i=0; i<team.length; i++){
//     if(team[i].department in result){
//         result[team[i].department].push(team[i].name);
//     }
//     else{
//         result[team[i].department] = [team[i].name];
//     }

// }
// console.log(result);

// /* 문제 8 */
// const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1}];
// const productsInfo = [
// { id: 1, price: 1000 },
// { id: 2, price: 5000 }, // 장바구니에 없는 상품
// { id: 3, price: 2500 }
// ];
// let cart8=[];
// let product8=[];
// let result8 =0;
// for(let i=0; i<cart.length; i++){
//     cart8 = cart[i];
//     for(let i=0; i<productsInfo.length; i++){
//         product8 = productsInfo[i];

//         if(cart8.id == product8.id){
//             result8 += cart8.quantity * product8.price;
//         }
//     }
// }
// console.log(result8);


// /*문제 9 */

// const votes = ['A', 'B', 'B', 'C', 'A', 'B', 'A'];

// let result = [];

// for(let i=0; i<votes.length; i++){
//     if(votes[i] in result){
//         result[votes[i]] += 1;
//     }else{
//         result[votes[i]] = 1;
//     }
// }

// console.log(result);


/*문제10*/
const webtoons = [
{ title: '나 혼자만 레벨업', rating: 9.8 },
{ title: '유미의 세포들', rating: 9.9 },
{ title: '전지적 독자 시점', rating: 9.7}
];
let toon;
let html = ''

for(let i=0; i<webtoons.length; i++){
    toon = (webtoons[i]);
    html += `<div> ${ toon.title } </div>`
    for(let j=1; j<=10; j++){
        if(toon.rating < j){
            html += '<span> ☆ </span>'
        }else{
            html += '<span> ★ </span>'
        }
    }
    
}

document.querySelector('p').innerHTML = html;


/* 문제 10*/
let responce = {"currentCount":10,"data":[{"소재지":"인천광역시 부평구 안남로417번길 20, 2층 (청천동)","업소명":"1982삼계정","업태":"한식","연번":1,"전화번호":"032-512-1982","지정메뉴":"녹두삼계탕"},{"소재지":"인천광역시 부평구 부평대로 301 (청천동,남광센트렉스 111호)","업소명":"갈비가","업태":"한식","연번":2,"전화번호":"032-363-3787","지정메뉴":"속초코다리냉면"},{"소재지":"인천광역시 부평구 평천로553,1층(삼산동)","업소명":"경복궁삼계탕","업태":"한식","연번":3,"전화번호":"032-511-1494","지정메뉴":"들깨삼계탕"},{"소재지":"인천광역시 부평구 부평대로63번길10-11(부평동)","업소명":"금강산추어탕","업태":"한식","연번":4,"전화번호":"032-527-8118","지정메뉴":"추어탕"},{"소재지":"인천광역시 부평구 부평대로87번길 4(부평동)","업소명":"뉴욕반점","업태":"중식","연번":5,"전화번호":"032-516-4488","지정메뉴":"삼선짬뽕,찹쌀탕수육"},{"소재지":"인천광역시 부평구 신트리로22번길 15-14 (부평동, 1층 일부)","업소명":"더히든키친","업태":"양식","연번":6,"전화번호":"032-272-7276","지정메뉴":"바질페스토파스타"},{"소재지":"인천광역시 부평구 마장로 402(청천동)","업소명":"덕수갈비","업태":"한식","연번":7,"전화번호":"032-517-4070","지정메뉴":"왕갈비탕"},{"소재지":"인천광역시 부평구 대정로 93, 웰링턴 1층 103호 (부평동)","업소명":"동강해물탕","업태":"한식","연번":8,"전화번호":"032-524-9166","지정메뉴":"해물탕"},{"소재지":"인천광역시 부평구 백범로468번길45(십정동)","업소명":"동암아구해물탕","업태":"한식","연번":9,"전화번호":"032-435-0233","지정메뉴":"해물찜,해물탕"},{"소재지":"인천광역시 부평구 부흥로257-7(부평동)","업소명":"들내음 들깨칼국수","업태":"한식","연번":10,"전화번호":"032-515-4151","지정메뉴":"팥칼국수"}],"matchCount":67,"page":1,"perPage":10,"totalCount":67};