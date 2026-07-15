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


const members=[
    {id:'user1', password:'pass1',name:'사용자1'},
    {id:'user2', password:'pass2',name:'사용자2'},
    
];

let member = {};

let user_id = prompt("아이디를 입력하세요:");
let user_pw = prompt("비밀번호를 입력하세요:");
let user_name = prompt("이름을 입력하세요:");
let A = false;
member = {id: user_id, password: user_pw, name: user_name};
for(let i=0; i<members.length ; i++){
    if(member.id == members[i].id){
        A = true;
        break;
    }
    
}
if(A==false){
    members.push(member);
    
}


console.log(members);