const ob1 = {
    name:'홍길동',
    a: 'hello'

};


const students = [
    {이름:'안현준', 학번:'20210852', 학년:'1', 전공:'CP'}, 
    {이름:'서현욱', 학번:'20210846', 학년:'2', 전공:'SW'},
    {이름:'황소현', 학번:'20210012', 학년:'3', 전공:'LL'},
    {이름:'권유린', 학번:'20210021', 학년:'4', 전공:'DD'},
];

const majors = [
    {전공코드: 'CP', 전공:'컴퓨터공학과', 전화:'010-1234-1234'},
    {전공코드: 'SW', 전공:'소프트웨어공학과', 전화:'010-3213-1231'},
    {전공코드: 'LL', 전공:'국어국문학과', 전화:'010-3121-3121'},
    {전공코드: 'DD', 전공:'정보통신공학과', 전화:'010-1352-3151'},
];


const classes = [
    {강의: '머신러닝', 강의코드:'01', 학년:3, 학기:1},
    {강의: '프로그래밍언어', 강의코드:'02', 학년:1, 학기:2},
    {강의: '임베디드', 강의코드:'03', 학년:2, 학기:2},
    
];


const CR = [

];


let grade = prompt('학번을 입력하세요:');
let subject=" ";
let CRR =[];

while(true){
     subject = prompt('과목을 입력하세요:');

     CRR.push({학번: grade, 과목: subject});

    if(subject===null){
        break;
    }
}

CR.push(CRR);

console.log(CR);

for(let i =0; i< students.length; i++){
console.log('이름:' + students[i].이름 + students[i].전공);
}



for(let i =0; i< classes.length; i++){
console.log('강의명:' + classes[i].강의  + ' 학년:'+ classes[i].학년 + ' 학기:' + classes[i].학기);
}