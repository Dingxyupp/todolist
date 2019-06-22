$(function (){
    let lis=$('.tab>li');
    let contentBox=$('.content')
    let todolist=[
        {id:1,content:"一套企业站",status:true,ctime:'2019-5-6',symbol:'x'},
        {id:2,content:"一套移动商城",status:true,ctime:'2019-5-6',symbol:'x'},
        {id:3,content:"php",status:false,ctime:'2019-5-6',symbol:'x'},
        {id:4,content:"wamp集成开发环境",status:false,ctime:'2019-5-6',symbol:'x'},
        {id:5,content:"nodejs",status:false,ctime:'2019-5-6',symbol:'x'},
        {id:6,content:"vue",status:false,ctime:'2019-5-6',symbol:'x'}
    ]
    let str=localStorage.getItem('toddolist');
    if(!str){
       localStorage.setItem('todolist',JSON.stringify(todolist));
    }
    // todolist=JSON.parse(str);
    lis.on('click',function () {
        let type=$(this).attr('type')
        $(this).addClass('hot').siblings('li').removeClass('hot')
        // filterData(type);
        render(filterData(type));
    })
    lis.triggerHandler('click');//触发指定事件类型，且只会影响第一个元素（jquery）
    contentBox.on('click','del',function(){
        let _this=$(this);
       let id= _this.closest('li').attr('id');
        let index=todolist.findIndex(elem=>(elem.id == id));//返回符合要求的第一个元素的位置
        todolist.splice(index,1);
        render(todolist);
    })
    function  filterData(type) {
        let arr=[];
        switch (type) {
            case "all":
                arr=todolist;
                break;
            case "done":
                arr=todolist.filter(elem=>elem.status);
                break;
            case "doing":
                arr=todolist.filter(elem=>!elem.status);
                break;
        }
        return arr;
    }

    function render(arr) {
        let html='';
        arr.forEach(function (elem) {
            if(elem.status){
                html +=`
                <li id="${elem.id}">
               <input type="checkbox" checked><p>${elem.content}<del>${elem.symbol}</del><span>${elem.ctime}</span></p>
               </li>
                `
            }else{
                html +=`
                <li id="${elem.id}">
               <input type="checkbox"><p>${elem.content}<del>${elem.symbol}</del><span>${elem.ctime}</span></p>
               </li>
                `
            }

        })
        contentBox.html(html);
    }
})