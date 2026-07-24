function print(){
    
    const url = new URLSearchParams(location.search);
    let selectno = url.get('no');
    
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList = []}
    else{boardList = JSON.parse(boardList);}

    

    for(let i=0; i<boardList.length; i++){
        if(selectno==boardList[i].no){
            document.querySelector('#title').innerHTML = boardList[i].title
            document.querySelector('#content').innerHTML = boardList[i].content
            return;
        }
    }
        

}
print()



function del(){
    const url = new URLSearchParams(location.search);
    let selectno = url.get('no');
    
    let boardList = localStorage.getItem('boardList');
    if(boardList==null){boardList = []}
    else{boardList = JSON.parse(boardList);}

    
    for(let i=0; i<boardList.length; i++){
        if(selectno==boardList[i].no){
            pass=prompt('비번 입력:');
            if(pass==boardList[i].pw){
                boardList.splice(i ,1);
                localStorage.setItem('boardList', JSON.stringify(boardList))
                alert('삭제완료');
            }
        }   
    }
    
    location.href = "list.html"
}