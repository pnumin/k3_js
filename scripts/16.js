const show = () => {
    event.preventDefault() ;

    //랜덤수 생성
    let n = Math.floor(Math.random() * 6) + 1 ;

    //사용자 입력 수 : 라디오의 체크값을 찾음
    let user ;
    const radios = document.querySelectorAll('input[type=radio]');
    for(let item of radios) {
        console.log(item);
        if (item.checked) {
            user = item.value ;
            break;
        }
    }

    //랜덤수와 사용자입력수 같은지 검사
    if (n === parseInt(user)) {
        document.querySelector('article h1').textContent = '주사위게임 : 맞음(승)' ;
    }
    else {
        document.querySelector('article h1').textContent = '주사위게임 : 틀림(패)' ;
    }

    //결과출력
    document.querySelector(".h2Class").innerHTML = `<img src="./images/${n}.png">`;
}