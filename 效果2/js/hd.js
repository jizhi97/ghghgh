var inner = document.getElementsByClassName('inner')[0];
var imgs = document.getElementsByClassName('con')[0].getElementsByTagName('img');
var lis = document.getElementsByTagName('li');
var timer1 = null,timer2 = null;
var index = 1;
inner.scrollLeft = imgs[0].offsetWidth;

function automove(){
    timer1 = setInterval(function(){
        clearInterval(timer2) 
        index++;  
        if(index>=imgs.length){
            index = 1;
            inner.scrollLeft=0;
        }
       
        var step = 0; 
        var maxstep =20; 
        var start = inner.scrollLeft;
        var end = imgs[0].offsetWidth * index; 
        var num = (end - start) / maxstep;
        timer2 =setInterval(function(){
            step++;
            if(step>=maxstep){
                step = 0;
              
                clearInterval(timer2);
            }
            
            start += num;  
            inner.scrollLeft = start;
        },10)
        
        for(var i=0;i<lis.length;i++){
            lis[i].className = '';
        }
        lis[index-1].className ='light';
    },1000)


}
automove();
