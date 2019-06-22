window.addEventListener('load',function () {
    let li=document.querySelectorAll('.Top>ul>li')
    let content=document.querySelector('.content')
    let type="all";
    let type1='done'
    let d=0;
    let todolist=[
        {id:1,content:'端午收作业',ctime:'2019-6-7',symbol:'-',stauts:false},
        {id:2,content:'回家',ctime:'2019-6-7',symbol:'-',stauts:false},
        {id:3,content:'博客',ctime:'2019-5-31',symbol:'-',stauts:true},
        {id:4,content:'文档',ctime:'2019-6-7',symbol:'-',stauts:false}
    ];
    for(let i=0;i<li.length;i++){
        li[i].onclick=function(){
            li[d].classList.remove('hot');
            li[i].classList.add('hot');
            d=i;
            let type=this.getAttribute('type')
            render(filterDate(type));

            content.onclick=function (e){
                let target=e.target;
                let id=target.parentNode.id;
                if(target.nodeName==='I'){
                    let index=todolist.findIndex(elem=>elem.id == id);
                    todolist.splice(index,1);
                }else if(target.nodeName==='INPUT'){
                    let ele=todolist.filter(elem=>elem.id == id)[0];
                    ele.stauts=target.checked;
                }
                render(filterDate(type));
            }
        }
    }
    li[0].onclick();
    let forms=document.myform;
    let textarea=forms.elements[0];
    let button=forms.elements['button'];
    button.onclick=function (e) {
        e.preventDefault();
        let obj=creatObj();
        todolist.push(obj);
        forms.reset();
        render(filterDate(type));
    }
    //creatObj
    function creatObj() {
        let id=todolist[todolist.length-1].id+1
        let content=textarea.value;
        let ctime=new Date().toLocaleDateString();
        let symbol='-'
        let stauts=false
        return {id,content,ctime,symbol,stauts}
    }

    function filterDate(type){
        let arr=[];
        switch(type){
            case "all":
                arr=todolist;
                break;
            case "done":
                arr=todolist.filter(elem=>elem.stauts)
                break;
            case "doing":
                arr=todolist.filter(function (elem) {
                    return !elem.stauts
                });
                break;
        }
        return arr;
    }
    function render(arr){
        let html='';
        arr.forEach(function (elem) {
            if(elem.stauts){
                html +=
                    `
               <li id="${elem.id}">
               <input type="checkbox" checked><p>${elem.content}</p><i>${elem.symbol}</i><span>${elem.ctime}</span>
               </li>
                `
            }else{
                html +=
                    `
               <li id="${elem.id}">
               <input type="checkbox"><p>${elem.content}</p><i>${elem.symbol}</i><span>${elem.ctime}</span>
               </li>
                `
            }

        })
        content.innerHTML=html;
    }
})