$(function (){
    //产生扑克牌
    let poke=[];
    let colorArr=['s','h','d','c']
    let flag={};
    for(let i=0;i<52;i++){
        let index=Math.floor(Math.random()*colorArr.length);
        let color=colorArr[index];
        let number=Math.round(Math.random()*12+1);
        while(flag[color+'_'+number]){
            index=Math.floor(Math.random()*colorArr.length);
            color=colorArr[index];
            number=Math.round(Math.random()*12+1);
        }
        poke.push({color,number})
        // flag[color+'_'+number]=true;
    }
    //发牌
    let index=-1;
    for(let i=0;i<6;i++){
        for(let j=0;j<i;j++){
           index++;
           let obj=poke[index];
           let lefts=350-50*i+100*j,tops=50*i;
           $('<div>').addClass('poke').css({backgroundImage:`url(./pkp/${obj.number}${obj.color}.jpg)`})
               .appendTo('.box')
               .data('number',obj.number)
               .attr('id',i+'_'+j)
               .delay(index*100)
               .animate({left:lefts,top:tops,opacity:1})
            // $('.poke').on('click',function () {
            //     $(this).css({top:tops+=30})
            // })
            // obj.onclick(function () {
            //     this.css({top:tops+=-30})
            // })
        }
    }

    for(;index<52;index++){
        let obj=poke[index]
        $('<div>').addClass('poke left').css({backgroundImage:`url(./pkp/${obj.number}${obj.color}.jpg)`})
            .attr('id','-2_-2')
            .appendTo('.box')
            .data('number',obj.number)
            .delay(index*30)
            .animate({left:0,top:480,opacity: 1})
    }
    let first=null;
    $('.box').on('click','.poke',function (){
        let _this=$(this);
        let [i,j]=_this.attr('id').split('_');
        let id1=i*1+1+'_'+j*1
        let id2=i*1+1+'_'+(j*1+1)
        let obj1=$('#'+id1)
        let obj2=$('#'+id2)
        if(obj1.length||obj2.length){
            return;
        }
        // $(this).animate({top:'-=30px'})
        if(_this.hasClass('active')){
            _this.removeClass('active').animate({top:'+=30px'})
        }else{
            _this.addClass('active').animate({top:'-=30px'})
        }
        //判断
        if(!first){
            first=_this;
        }else{
            let number1=first.data('number'),number2=_this.data('number')
            if(number1+number2==14){
                $('.active').animate({top:0,left:710,opacity:1},function () {
                    $('.active').remove();
                })
            }else{
                $('.active').animate({top:'+=30px'},function () {
                    _this.removeClass('active')
                })
            }
        first=null;
        }
    })
   let rightBtn=$('.rightBtn');
    let leftBtn=$('.leftBtn');
    let n=0;
    rightBtn.on('click',function(){
        $('.left').last().css('zIndex',n++).animate({left:'710px'},function (){
            $(this).removeClass('left').addClass('right')
        });
    })
    leftBtn.on('click',function(){
        $('.right').last().css('zIndex',n++).animate({left:'0px'},function (){
            $(this).removeClass('right').addClass('left')
        });
    })
})