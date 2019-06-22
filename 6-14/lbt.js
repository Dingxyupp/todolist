$(function () {
    let img=$('.lbt>li');
    let rightBtn=$('.right');
    let leftBtn=$('.left');
    let imgWidth=img.width();
    let anniu=$('.circul>li')
    let current=0,next=0;
    let flag=true;
    rightBtn.on('click',function (){
        if(!flag){
            return;
        }
        next++
        flag=false;
        if(next>=img.length){
            next=0;
        }
        img.css({left:imgWidth}).eq(0).css({left:0});
        $(img[next]).css({left:imgWidth});
        img.eq(current).animate({left:-imgWidth})
        img.eq(next).animate({left:0},function () {
            flag=true;
        })
        anniu.eq(current).removeClass('hot').end().eq(next).addClass('hot');
        current=next;
    })
    let t=setInterval(function (){
        rightBtn.triggerHandler('click')
    },2000)
    img.on('mouseenter',function (){
        clearInterval(t);
    })
    img.on('mouseleave',function (){
        t=setInterval(function (){
            rightBtn.triggerHandler('click')
        },2000);
    })
})
