let url = new URLSearchParams( location.search)
console.log(url)

let name = url.get('name');
let pcode = url.get('pcode');
let page = url.get('page');

console.log(name)
console.log(pcode, page)

function 링크함수(){
    location.href = "exam2.html?name=강호동"
}

let value =0;
function 증가함수(){
    value += 1
    document.querySelector('#box1').innerHTML = value;
}
setInterval(증가함수 ,1000)



function 시계함수(){
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let time = `${hour}: ${minute}: ${second}`
    
    document.querySelector('#box2').innerHTML = time;
}
setInterval(시계함수 ,1000)



let time = 0;
let timeInter;

function 타이머시작(){
    timeInter = setInterval(타이머함수 , 1000)
}

function 타이머함수(){
    time++
    document.querySelector('#box3').innerHTML = time;

}
function 타이머종료(){
    clearInterval( timeInter )
}
