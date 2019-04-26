$(()=>{
    var id;
    var delay=400;
    MoveLeft=(dir)=>{
        id = setInterval(function() {
            $( "#snake" ).animate( {left:'-=30px'},300 )
          }, delay);
    }
    MoveRight=(dir)=>{
        id = setInterval(function() {
            $( "#snake" ).animate( {left:'+=30px'},300 )
          }, delay);
    }
    MoveDown=(dir)=>{
        id = setInterval(function() {
            $( "#snake" ).animate( {top:'-=30px'},300 )
          }, delay);
    }
    MoveTop=(dir)=>{
        id = setInterval(function() {
            $( "#snake" ).animate( {top:'+=30px'},300 )
          }, delay);
    }
    keyEvent=()=>{
    let i=0,Hmove=false,Vmove=false;

        switch (event.keyCode) //Анализ Unicode клавиш
        {
            case 37: case 65: {clearInterval(id); MoveLeft(); break}
            case 38: case 87: {clearInterval(id); MoveDown(); break}
            case 39: case 68: {clearInterval(id); MoveRight(); break}
            case 40: case 83: {clearInterval(id); MoveTop(); break}
        }
    }
})