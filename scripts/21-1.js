const funB = () => {
    console.log('funB') ;
}

document.addEventListener('DOMContentLoaded', ()=>{
    
    setTimeout(()=>{
        console.log('A') ;
        setTimeout(()=>{
            console.log('B') ;
            setTimeout(()=>{
                console.log('C') ;
            }, 500);
        }, 1000);
    }, 700);
});