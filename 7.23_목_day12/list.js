function list(){
    const tbody = document.querySelector('#tbody')

    let boardList = localStorage.getItem('boardList')
    if(boardList==null){boardList = []}
    else{boardList = JSON.parse(boardList);}

    
    let html = ''
    
    for(let i=0; i<boardList.length; i++){
        const obj = boardList[i];

        html += `<tr>
                    <td>${obj.no}</td>
                    <td><a href ="view.html?no=${obj.no}"> ${obj.title} </a> </td>
                </tr>`
    }
    tbody.innerHTML = html;
}

list();