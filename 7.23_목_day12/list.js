function list(){
    //1.공간 가져오기

    const tbody = document.querySelector('#tbody')

    //2. 스토리지
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList)}

    let html = ''

    //3.for문으로 찾기
    for(let i =0; i<boardList.length; i++){
        
        html += `<tr>
                    <td>${boardList[i].no}</td>
                    <td><a href ="view.html?no=${boardList[i].no}"> ${boardList[i].title} </a> </td>
                </tr>`
    }

    tbody.innerHTML = html;
}
list();