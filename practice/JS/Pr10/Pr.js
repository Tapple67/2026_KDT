function sign(){
    let id = document.querySelector('.signid').value
    let pw = document.querySelector('.signpw').value

    let memberList = JSON.parse(localStorage.getItem('memberList'));
    console.log(memberList)

    if(memberList == null){
        memberList=[]
    }


    let no = memberList.length == 0 ? 1: memberList[memberList.length -1].no + 1

    let obj = {no, id ,pw}; console.log(obj);
    memberList.push(obj); console.log(memberList);

    alert('등록 성공')
    localStorage.setItem('memberList', JSON.stringify(memberList))

}




function login(){
    let id = document.querySelector('.loginid').value
    let pw = document.querySelector('.loginpw').value
    
    let memberList = JSON.parse(localStorage.getItem('memberList'))
    if(memberList == null){return;}

    for(let i=0; i<memberList.length; i++){
        if(memberList[i].id == id && memberList[i].pw == pw){
            alert('로그인 성공');
            return
        }

    }   
    alert('로그인 실패');
}