function 쓰기(){
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value
    const pw = document.querySelector('#pw').value

    const obj={title, content, pw};

    let boardList = localStorage.getItem('boardList');

        if(boardList == null){
            boardList =[];
        }else{boardList = JSON.parse(boardList);}

    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no + 1
    boardList.push(obj);

    localStorage.setItem('boardList',JSON.stringify(boardList));
    alert('성공');
    location.href = 'list.html'

}