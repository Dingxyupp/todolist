window.onload=function () {
    let li=document.querySelectorAll('.weipai>li')
    li.forEach(function (elem) {
        elem.onclick=function (e) {
            e=e;
            if(e.target.nodeName==='LI'){
                console.log(1);
            }
        }
    })
}