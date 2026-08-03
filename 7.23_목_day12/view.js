view()
function view(){
    //1. url 가져오기
    const url = new URLSearchParams(location.search);

    //2. 변수에 no 저장
    let select = url.get('no');

    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList)}

    for(let i =0; i<boardList.length; i++){
        if(select == boardList[i].no){

            document.querySelector('#title').innerHTML = boardList[i].title
            document.querySelector('#content').innerHTML = boardList[i].content
            return;
        }
    }
}




function del(){

    //1. url 가져오기
    const url = new URLSearchParams(location.search);

    //2. 변수에 no 저장
    let select = url.get('no');

    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList)}

    for(let i =0; i<boardList.length; i++){
        if(select == boardList[i].no){
            let pass = prompt('비번입력:')
            if(pass == boardList[i].pw){
                boardList.splice(i,1)
                localStorage.setItem('boardList',JSON.stringify(boardList))
                alert('삭제완료');
            }else{
                alert('비번 틀림');
                return;
            }
        }

    }

    location.href= "list.html"
}