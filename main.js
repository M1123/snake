$(()=>{
    let id, delay=150,score=0,HighScore,
    h=Math.floor($(".container").height())*0.9,
    w=Math.floor($(".container").width())*0.9;
    h -= (h%30);
    $(".container").css("height",h)
    w -= (w%30);
    $(".container").css("width",w)
    HighScore = localStorage.getItem("score");
    $(".score").html('Рекорд: '+HighScore);
    
    $("#reset").on("click", ()=>{
        localStorage.setItem("score",score);
        location.reload();  
    })

    Move=(dir)=>{
        let deltaX='+=0px',deltaY='+=0px' ;
        switch(dir) {
            case 'Left': 
                deltaX='-=30px';
                deltaY='+=0px';
            break;
            case 'Right':
                deltaX='+=30px';
                deltaY='+=0px';
            break;
            case 'Down': 
                deltaY='+=30px';
                deltaX='+=0px';
            break;
            case 'Top':
                deltaY='-=30px';
                deltaX='+=0px';
            break;
          };
        id = setInterval(()=> {
            $( "#snake" ).animate( {top:deltaY, left:deltaX},delay/2 )
            if (($("#snake").position().top>=h-29)||($("#snake").position().left>=w-29)||($("#snake").position().top<0)||($("#snake").position().left<0)){
                clearInterval(id);
                alert('Game over! Ваш счет: '+score);
                if(score>HighScore){localStorage.setItem("score",score);}
                location.reload();  
            }
            if ((Math.abs($("#snake").position().left-$("#food").position().left)<1)&&(Math.abs($("#snake").position().top-$("#food").position().top)<1)){
                score++; 
                $("#food").html(score+1);
                delay-=5;  //змея ускоряется после приема пищи
                console.log('score = '+score);
                console.log('delay = '+delay); 
                let fx=Math.floor(Math.random()*w/30)*30;
                $("#food").css("left",fx)
                let fy=Math.floor(Math.random()*h/30)*30;
                $("#food").css("top",fy)
                if(score==10){
                    $(".container").css("backgroundImage","url(1.gif)");
                }
                if(score==11){
                    $(".container").css("backgroundImage","url(grass.jpg)");
                }
            }
        }, delay);
    }
    keyEvent=()=>{
        switch (event.keyCode) //Анализ Unicode клавиш
        {
            case 37: case 65: {clearInterval(id); Move('Left'); break}
            case 38: case 87: {clearInterval(id); Move('Top'); break}
            case 39: case 68: {clearInterval(id); Move('Right'); break}
            case 40: case 83: {clearInterval(id); Move('Down'); break}
        }
    }

})