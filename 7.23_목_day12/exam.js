// JSON. stringity( 객제 ) : 객체 타입 -- > 문자 타입 변환
sessionStorage.setItem( '회원객체' , JSON.stringify( { 'name' : '유재석' , 'age' : 40 } ) )
// JSON.parse( 문자열 ) : 문자열 타입 -- > 객체 타입 변환
let 회원객체 = JSON.parse( sessionStorage.getItem( '회원객체' ) )
console.log( 회원객체 )