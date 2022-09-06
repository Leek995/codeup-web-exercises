"use strict";
(function(){
    alert($('#header-one').html());
    alert($('#content').html());
    $('.list-items').css('border', '1px solid black');
    $('#list-items').css('border', '1px solid red');
    $('li').css('font-size', '20px');
    $('h1, p, li').css('background', 'yellow');
    // .html grabs content and possibly changes content too
    $('h1').html("This is now my header");
    alert($('#header-one').html());
})();
