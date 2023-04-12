document.addEventListener("DOMContentLoaded", ()=>{
    const sel1 = document.querySelector('#sel1') ;
    const sel2 = document.querySelector('#sel2') ;

    const d1 = document.querySelector('#d1') ;
    const d2 = document.querySelector('#d2') ;


    //단위표시
    d1.textContent = sel1.value ;
    d2.textContent = sel2.value ;
});