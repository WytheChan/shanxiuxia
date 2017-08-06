(function(){
    var menu=document.getElementsByClassName('menu')[0],
        arrow=document.getElementsByClassName('banner-arrow')[0],
        repair=document.getElementsByClassName('repair')[0].firstElementChild,
        repair2=document.getElementsByClassName('repair2')[0],
        tabs=document.getElementsByClassName('ser-tab-item'),
        tabItems=document.getElementsByClassName('ser-tab-wrap');     

    // 滚动效果    
    window.onscroll=function(){
        if(document.body.scrollTop>100){
            menu.className='menu clearfix active';
        };
        if(document.body.scrollTop>=1300){
        repair.style['transform']='translateX(40%)';
        };
        if(document.body.scrollTop>=2810){
        repair2.style['transform']='translateY(-110px)';
        }
    };
   
    //箭头点击事件
    arrow.onclick=function(){
        document.body.scrollTop=600
    }

    //选项卡
    for(var i=0;i<tabs.length;i++){
       (function(i){
            tabs[i].onclick=function(){
            if(!/active/.test(this.className)){
               
               for(var j=0;j<tabs.length;j++){
                    if(/active/.test(tabs[j].className)){
                         tabs[j].className='ser-tab-item';
                         tabs[j].firstElementChild.src='img/suggest'+(j+1)+'.png';
                         tabItems[j].className='ser-tab-wrap container'
                    }
               }

                this.className='ser-tab-item active';
                this.firstElementChild.src='img/suggest'+(i+1)+'-'+(i+1)+'.png';
                tabItems[i].className='ser-tab-wrap active container'
            }
        }
       }(i));
    }
}());