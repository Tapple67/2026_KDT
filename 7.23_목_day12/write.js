function 등록(){
    //1.내용 가져오기

    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value
    const pw = document.querySelector('#pw').value

    //2. 값 저장
    const obj = {title, content, pw}
    console.log(obj)

    //3. 스토리지 불러오기
    let boardList = localStorage.getItem('boardList')
    if(boardList == null){boardList = []}
    else{boardList = JSON.parse(boardList)}


    //4. no 부여
    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length - 1].no + 1

    console.log(obj.no)
    //5. boardList에 값 넣기
    boardList.push(obj);

    //6. 로컬 스토리지에 넣기
    localStorage.setItem('boardList',JSON.stringify(boardList))

    //list로 이동
    location.href = "list.html"


}




































// 1. 값 가져오기 
// 2. 가져온값 변수에 넣기
// 3. 로컬 스토리지 불러오기 
//   -비었으면 배열 선언, 아니면 가져오기
// 4. no 설정

// 5. 변수에 저장한 값 배열에 넣기
// 6. localStorage에 저장
// 7. 저장 성공하면 list 페이지로 이동




// 1. html위치? 불러오기
// 2. 로컬 스토리지 불러오기 
//   -비었으면 배열 선언, 아니면 가져오기

// 3. for 문으로 나열
//     view.html 위치 이동 링크도  생성
// 4.추가하기


// 1. url에서 no 추출
// 2. 변수에 no 넣기
// 3. 로컬 스토리지 불러오기 
//   -비었으면 배열 선언, 아니면 가져오기
// 4. for 문으로 나열
//     no 비교해서 같으면 출력
//     출력은 번호 제목


// 삭제
// 1. url에서 no 추출
// 2. 변수에 no 넣기
// 3. 로컬 스토리지 불러오기 
//   -비었으면 배열 선언, 아니면 가져오기
// 4. for 문으로 나열
//     no 비교문 안에
//     패스워드 입력받아서 같으면
//     splice
//     하고 setItem
//     성공하고 list로 이동

