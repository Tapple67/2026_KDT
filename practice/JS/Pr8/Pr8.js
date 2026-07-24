// 1.기획서/요구사항 따른 프로토타입
// 2. 메모리 설계
//  1) 저장해야 할것들을 모두 찾아보기, 카테고리명/제품명/가격/이미지/등록일
// 2)속성들간의 종속관계 파악, 테이블 나누기
// 3) 쪼개진 테이블 간 연관 만들기, 관계형 데이터베이스
    // 3-1)
    // 3-2)


let categoryList = [{'ccode': 1 , name :'음료'},{'ccode': 2 , name :'과자'}];
let products = [
    {'pcode':1, 'pname':'콜라' , 'pprice':1000 ,'pimg': 'http://https://placehold.co/100x100' , 'pdate' : '2026-07-22', 'ccode' :1},
    {'pcode':2, 'pname':'사이다' , 'pprice':2000 ,'pimg': 'http://https://placehold.co/100x100' , 'pdate' : '2026-07-23', 'ccode' :1},

]

productPrint();
function productPrint(){
    let tbody = document.querySelector('#main table tbody'); 

    let html = '';

   

    for(let i =0; i<products.length; i++){
        let product = products[i];

        let cname='';
        for( let j = 0 ; j < categoryList.length ; j++ ){
            if(categoryList[j].ccode == product.pcode){
                cname = categoryList[j].name;
                break;
            }
        }

        html += `<tr>
                        <td> <img src= "${products[i].pimg}"> </td>
                        <td> ${cname} </td>
                        <td> ${product.pname} </td> 
                        <td> ${product.pprice} </td> 
                        <td> ${product.pdate} </td> 
                        <td> 
                            <button onClick ="prductDelete(${product.pcode})" class="deleteBtn">삭제</button> 
                            <button onClick ="prductUpdate(${product.pcode})" class="updateBtn">수정</button> 
                        </td>

                    </tr> `
                    
    }

    tbody.innerHTML = html;
}


function prductDelete(pcode){
        for( let k = 0 ; k < products.length ; k++ ){
            if(products[k].pcode == pcode){
                products.splice (k ,1)
            }

    }
    productPrint();
    return;
} 


function prductUpdate(pcode){
    for( let k = 0 ; k < products.length ; k++ ){
        if(products[k].pcode == pcode){
            let newpname = prompt('새 이름:');
            let newprice = prompt('새 가격:');
            products[k].pname = newpname;
            products[k].pprice = newprice;
        } 
    }
    productPrint();
    return;
}

let finalPcode = 2

function productAdd(){
    let category = document.querySelector(".category").value;
    let name = document.querySelector(".name").value;
    let price = document.querySelector(".price").value;
    let img = document.querySelector(".image").files[0];

    if(category == 'disabled'){
        alert("카테고리를 선택해주세요");   
        return;
    }

    let pdate = `${ new Date().getFullYear() }-${ new Date().getMonth()+1 }-${ new Date().getDate() }`
    let object =({pcode: finalPcode+1 , pname: name , pprice: price , pimg: img == undefined ? 'https://placehold.co/100': URL.createObjectURL(img), 'pdate' : pdate, 'ccode' : category});
   
    products.push(object);
    productPrint();
    console.log(products);
    return;
} 

