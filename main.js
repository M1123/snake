$(()=>{
    let id, delay=200,score=0, tailx=[],taily=[],i=0,
    HighScore,
    h=Math.floor($(".container").height()),
    w=Math.floor($(".container").width());
    h -= (h%30);
    $(".container").css("height",h)
    console.log($(".container").height());
    w -= (w%30);
    $(".container").css("width",w)
    console.log($(".container").width());
    HighScore = localStorage.getItem("score");
    $("header").html('Рекорд: '+HighScore);

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
            if (($("#snake").position().top>=$(".container").height() -10)||($("#snake").position().left>=$(".container").width() -10)||($("#snake").position().top<0)||($("#snake").position().left<0)){
                clearInterval(id);
                alert('Game over! Ваш счет: '+score);
                if(score>HighScore){localStorage.setItem("score",score);}
                location.reload();  
            }
            // console.log(tailx[score]);
            if ((Math.abs($("#snake").position().left-$("#food").position().left)<1)&&(Math.abs($("#snake").position().top-$("#food").position().top)<1)){
                score++; 
                // $("#food").html(score+1);
                delay-=5;
                console.log('score = '+score);
                console.log('delay = '+delay);
                let fx=Math.floor(Math.random()*w/30)*30;
                $("#food").css("left",fx)
                let fy=Math.floor(Math.random()*h/30)*30;
                $("#food").css("top",fy)

                let tail=$('<div class="tail"></div>')
                tailx[score]=$("#snake").position().left;
                taily[score]=$("#snake").position().top;
                $(tail).css("left",tailx[score]).css("top",taily[score])
                $('.container').append(tail)

            }

            // console.log($("#snake").position().left);
            // console.log($("#food").position().left);
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