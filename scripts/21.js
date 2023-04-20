document.addEventListener('DOMContentLoaded', ()=>{
    const boxDt = document.querySelector('#boxDt') ;
    
    boxDt.addEventListener('change', ()=>{
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + boxDt.value.replaceAll('-','') ;
        console.log(url)
        fetch(url)
        .then((resp)=> resp.json())
        .then((data)=>{
            let boxlist = data.boxOfficeResult.dailyBoxOfficeList ;
            let boxTag = '' ;
            for(let box of boxlist) {
                console.log(box.rank, box.movieNm, box.salesAmt, box.rankInten)
    
                boxTag = boxTag + '<details>' ;
                boxTag = boxTag + `<summary> ${box.movieNm} </summary>` ;
                boxTag = boxTag + '<ul>' ;
                boxTag = boxTag + `<li>순위 : ${box.rank}</li>` ;
                boxTag = boxTag + `<li>매출액 : ${parseInt(box.salesAmt).toLocaleString()}원</li>` ;
                boxTag = boxTag + `<li>전일대비순위 : ${box.rankInten}</li>` ;
                boxTag = boxTag + '</ul>' ;
                boxTag = boxTag + '</details>' ;
            }
            console.log(boxTag)
    
            document.querySelector('#boxDiv').innerHTML = boxTag ;
        })
        .catch((err)=>{
            console.log(err);
        })
        ;

    });



});