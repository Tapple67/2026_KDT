let 목록 = [{날짜:'2025-06-19',항목:'점심식사',금액:'9000'},
            {날짜:'2025-06-19',항목:'교통비',금액:'1500'}
];



function send(){
    const date = document.querySelector('.dt');
    const list = document.querySelector('.li');
    const cost = document.querySelector('.co');
    const table1 = document.querySelector('.table1');

    const 날짜 = date.value;
    const 항목 = list.value;
    const 금액 = Number(cost.value);

    let 객체 = {날짜, 항목, 금액};

    목록.push(객체);
    console.log(목록);
    alert('등록 성공!');

    table1.innerHTML += `<tr>
                <td>${날짜}</td>
                <td>${항목}</td>
                <td>${금액.toLocaleString()}</td>
                </tr>`
}

