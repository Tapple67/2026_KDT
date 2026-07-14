/*문제 1*/

// let number = [23, 5, 67, 12, 88, 34]
// let MA =0;

// for(let i=0; i< number.length; i++){
    
//     if (MA < number[i]){
//         MA = number[i];
//     }
// }
// console.log(MA);


/*문제 2*/

// let output = "";
// for(let i = 5; i > 0; i--){
//     output = "";
//     for(let j = 0; j < i; j++){
//         output += '*';
//     }
//     console.log(output);
// }

/*문제 3*/

// let userNames = ['김하준','이서아','박솔민','최도윤']

// for(let i=0; i<userNames.length; i++){
//     if(userNames[i].indexOf('솔') != -1){
//         console.log(userNames[i]);
//         break;
//     }

// }


/*문제 4*/

// let seatLayout = [['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3']];
// for(let i = 0; i < seatLayout.length; i++){
//     for(let j =0; j < seatLayout[i].length; j++){
//         console.log(seatLayout[i][j]);
//     }
// }


/*문제 5*/

// let numbers =[1, 5, 2, 3, 5, 1, 4, 2];
// let num=[];

// for(let i=0; i<numbers.length; i++){
//         if(num.indexOf(numbers[i]) == -1){
//             num.push(numbers[i]);
//         }
//     }
//     console.log(num);



/*문제 6*/

// let numbers = [5, 3, 4, 1, 2];

// for(let i=0; i< numbers.length-1; i++){
//     for(let j= i+1; j<numbers.length; j++){
//         if(numbers[i] > numbers[j]){
//         let temp = numbers[i];
//         numbers[i] =numbers[j];
//         numbers[j] = temp;
//         }
//     }
// }
// console.log(numbers);


/*문제 7*/
// let products= ['볼펜','노트','지우개'];
// let stock=[10,5,20];
// let P_N = prompt('상품명 입력:');
// let P_S = prompt('수량:');

// for(let i=0; i<products.length; i++){
//     if(P_N.indexOf(products[i])!= -1){
//         if(stock[i]>0){
//             stock[i] -= P_S;
//             console.log('구매완료!');
//             console.log('남은재고:'+ stock[i])
//         }
//         else{
//             console.log('재고가 부족합니다.');
//         }
//     }
//     else
//     {
//     }
// }\

/*문제 8*/


// let movieNames=['히든페이스','위키드','글레디에이터2','청설'];
// let movieRatings=[8,4,7,6];
// let output ='';

// for(let i=0; i<movieNames.length; i++){
//     output= '';
   
//     for(let j=1; j<=10; j++){
        
//         if(j<=movieRatings[i]){
//             output += '★';
//         }else{
//             output += '☆';
//         }
//     }
//     console.log(movieNames[i] + output);
// }




 /*문제 9*/


// let seatStatus = ['빈좌석', '예약석','예약석','빈좌석','예약석','빈좌석'];
// let html2 =''

// for(let i=0; i<seatStatus.length; i++){
//     if(seatStatus[i]=='빈좌석'){
//         html2 += `<span style="color:blue;"> ${seatStatus[i]} </span>`
//     }else{
//         html2 += `<span style="color:red;"> ${seatStatus[i]} </span>`
//     }
//     if((i+1)%2==0){
//         html2 += `<br />`
//     }
// }
// document.querySelector('div').innerHTML = html2;


// /* 문제10 */

let carNumbers = ['210어7125','142가7415','888호8888','931나8234'];
let usageMinutes = [65,30,140,420];
let output = 0;
html3 = '';

for( let i=0; i<carNumbers.length; i++){
   
    output += 1000;
    if(usageMinutes[i]>30){
        output += parseInt((usageMinutes[i]-30)/10)*500;
    }
    if(output>20000){
        output = 20000;
    }
    html3 += `${carNumbers[i]}:${+usageMinutes[i]}분 주차, 최종요금: ${output}원 <br/>`
    

    document.querySelector('h2').innerHTML = html3
}
