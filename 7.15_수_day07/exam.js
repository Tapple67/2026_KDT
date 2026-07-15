const person = [{ name:"안현준", age :"25", city :"서울"},
 
];

console.log(person);



const book = { 
    title: 'Cracking the Coding Interview', 
    author: 'Gayle Laakmann McDowell',
    pages: 500 
    };

    let = values= Object.values(book);

    for(let i=0; i< values.length; i++){
        console.log(values[i]);
    }


    const person2 = { name: '김코딩', age: 25, };
    person2.email = 'aaaaaa.@com';
    delete(person2.age);

    console.log(Object.values(person2));


    const product = { 
        name: '노트북',
        price: 1200000,
        stock: 50 
    };

    console.log(product.price * product.stock);


    const user = { name: '김코딩','job-title': '개발자'}; 

    console.log(user['job-title']);


    const student = {  name: '이학생', age: 25, address: { city: 'Seoul', zipCode: '12345' } };
    console.log(student.address);
    let ad = student.address;
    console.log(ad.city);


    const character = {  name: '전사', hp: 200, mp: 50 };
    console.log('level' in character );


    const country = {name: '대한민국', capital: '서울', population: 51780000 };

    let country1=[];
    let country2=[];

    country1 = Object.keys(country); console.log(country1);
    country2 =  Object.values(country); console.log(country2);

    console.log(country1 + country2);


    const inventory = { apple: 15, banana: 5, orange: 20, grape: 8 };
    let num = Object.values(inventory);
    let num1 = Object.keys(inventory);

    for(let i = 0; i<num.length; i++){

        if(num[i]<10){
            console.log(num1[i]);
        }
    }


    const students10 = [ 
        { name: '김철수', major: '컴퓨터공학' },
        { name: '이영희', major: '경영학' },
        { name: '박지성', major: '체육교육' }
    ];

    let A10 = Object.values(students10);

    for(let i=0; i<students10.length; i++){
        console.log(A10[i].name+':'+ A10[i].major);
    }
