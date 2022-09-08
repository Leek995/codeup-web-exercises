(function (){
    "use strict"
    $('div').children().on('click', function (){
        let orange = 'rgb(255, 165, 0)'
        let white = 'rgb(255, 255, 255)'
        let current_color = white

        if(current_color === orange){
            $(this).css('background', white);
        }else(current_color === white){
            $(this).css('background', orange);
        }

    });


})();