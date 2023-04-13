//회문 체크 함수
const palindrome = (t1, t2) => {
    let s = t1.value ;

    //입력내용이 없는 경우 
    if (s.length == 0) {
        document.querySelector("h2").textContent = '단어를 입력하세요.';
        return ;
    } 

    //입력내용이 있는 경우
    //방법1
    let rs = '' ;
    for(let i = s.length - 1; i >=0 ; i--) {
        rs = rs + s[i] ;
    }
    console.log("s=",s, ",rs =", rs);

    if ( s == rs) {
        t2.value = rs + ": 회문입니다.";
    }
    else {
        t2.value = `${rs} :회문이 아닙니다.`;
    }

}

//숫자 합계
const numSum = (t1, t2) => {
    console.log('numSum');
}

document.addEventListener("DOMContentLoaded", ()=>{
    //DOM요소 가져오기
    const txt1 = document.querySelector("#txt1") ;
    const txt2 = document.querySelector("#txt2") ;

    const bts = document.querySelectorAll(".bt") ;
    //버튼배열에 클릭이벤트 작성
    for(let bt of bts) {
        bt.addEventListener('click', (event)=>{
            event.preventDefault();
            let gubun = bt.getAttribute('id').slice(-1) ;
            if (gubun === '1') palindrome(txt1, txt2) ;
            else numSum(txt1, txt2) ;
            
        });
    }
}) ;