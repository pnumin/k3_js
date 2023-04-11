document.addEventListener("DOMContentLoaded", () => {

    const bts = document.querySelectorAll('button');
    console.log(bts);

    //document.querySelector('#h2Id').textContent = bts.textContent ;


    //case1
    // for(let i=0 ; i < bts.length ; i++) {
    //    console.log(bts[i].textContent) ; 
    // }


    //case2
    // bts.forEach((item) => {
    //     console.log(item.textContent) ;
    // });

    // bts.forEach((item, idx) => {
    //     console.log(idx, item.textContent) ;
    // });


    //case3
    // for(let idx in bts) {
    //     console.log(bts[idx].textContent)
    // }

    //case4
    for(let item of bts) {
        console.log(item.textContent);
    }
    for(let [k, v] of bts.entries()) {
        console.log(k, v.textContent);
    }
});