출력();

function 출력(){
    const url =new URLSearchParams(location.search);

    const selectno = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if(boardList == null){
            boardList =[];
        }else{boardList = JSON.parse(boardList);}

        for(let i =0; i<boardList.length; i++){
            const obj = boardList[i];
            if(obj.no == selectno){
                document.querySelector('#title').innerHTML = obj.title
                document.querySelector('#content').innerHTML = obj.content
                return;
            }
        }
}


function 삭제(){
    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');


    let boardList = localStorage.getItem('boardList')
    if(boardList == null){
            boardList =[];
        }else{boardList = JSON.parse(boardList);}


    for(let i =0; i<boardList.length; i++){
        if(boardList[i].no==selectNo){
            let confirm = prompt('비번입력:');
            if(boardList[i].pw == confirm){
                boardList.splice(i , 1);
                localStorage.setItem('boardList', JSON.stringify(boardList));
                alert('성공');
                location.href = "list.html";
            }else{
                alert('실패');
            }
        }
    }
}