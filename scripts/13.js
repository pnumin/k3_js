
// function show() {
//     //alert("안녕하세요.") ;
//     event.preventDefault();
//     document.getElementById("h2Id").innerHTML = "안녕하세요2";
    
// }

//화살표 함수로 변경
const show = () => {
    event.preventDefault();

    //랜덤수 생성(1~6)
    let n = Math.floor(Math.random() * 6 ) + 1 ;
    console.log(n);

    // document.getElementById("h2Id").innerHTML = '<img src="./images/1.png">';
    // case4
    //document.getElementById("h2Id").innerHTML = '<img src="./images/' + n +'.png">';

    // case5
    document.getElementById("h2Id").innerHTML = `<img src="./images/${n}.png">`;

    // let imgTag ;
    // case1
    // if (n == 1) imgTag = '<img src="./images/1.png">' ;
    // else if (n == 2) imgTag = '<img src="./images/2.png">' ;
    // else if (n == 3) imgTag = '<img src="./images/3.png">' ;
    // else if (n == 4) imgTag = '<img src="./images/4.png">' ;
    // else if (n == 5) imgTag = '<img src="./images/5.png">' ;
    // else if (n == 6) imgTag = '<img src="./images/6.png">' ;

    // case2
    // switch (n) {
    //     case 1 : imgTag = '<img src="./images/1.png">' ; break;
    //     case 2 : imgTag = '<img src="./images/2.png">' ; break;
    //     case 3 : imgTag = '<img src="./images/3.png">' ; break;
    //     case 4 : imgTag = '<img src="./images/4.png">' ; break;
    //     case 5 : imgTag = '<img src="./images/5.png">' ; break;
    //     case 6 : imgTag = '<img src="./images/6.png">' ; break;
    // }

    // case3
    // let imgArr = ['<img src="./images/1.png">',
    //                 '<img src="./images/2.png">',
    //                 '<img src="./images/3.png">',
    //                 '<img src="./images/4.png">',
    //                 '<img src="./images/5.png">',
    //                 '<img src="./images/6.png">',
    //             ]
    // document.getElementById("h2Id").innerHTML = imgArr[n-1];



}

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2Id").innerHTML = "시작입니다.";
// });

document.addEventListener("DOMContentLoaded", () => {
    //document.getElementById("h2Id").innerHTML = "시작입니다.";
    // document.querySelector('#h2Id').innerHTML = "아이디선택자:시작입니다.";
    // const bt = document.createElement('button') ;
    // bt.textContent = "확인" ;
    // document.getElementById('hdiv').append(bt) ;
});