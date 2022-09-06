"use strict";
(function(){
    // alert($('#header-one').html());
    // alert($('#content').html());
    // $('.list-items').css('border', '1px solid black');
    // $('#list-items').css('border', '1px solid red');
    // $('li').css('font-size', '20px');
    // $('h1, p, li').css('background', 'yellow');
    // // .html grabs content and possibly changes content too
    // $('h1').html("This is now my header");
    // alert($('#header-one').html());
    //
    // var fun = function (){
    //     console.log("my click event was fired off");
    // }
    // // $('#header-one').click(fun);
    // var content = $('#content');
    // $('#content').dblclick(function (e){
    //     alert(content.html());
    // });
    //
    // var subContent = $('#sub-content');
    // console.log(subContent.html());
    // var hover_out = function (e){
    //     subContent.css('background', 'none');
    // }
    // var hover_in = function (e){
    //     subContent.css('background', 'yellow');
    // }
    // $('#sub-content').hover( hover_in, hover_out );
    //
    // subContent.mouseenter(function (){
    //     subContent.css('font-size', '50px');
    // })
    // subContent.mouseout(function (){
    //     subContent.css('font-size', '10px');
    // })

        //                                   Selectors Exercise Start
    // Change background of h1 when clicked
    // Gather selector at h1
    // create event
    var header_one = $('#header-one');
    header_one.click(function (){
        $(this).css('background', 'red');
    })

    $('p').dblclick(function (){
        $(this).css('fontSize', '18px');
    })

    var hoveringIn = function (e){
        $('li').css('color', 'red');
    }
    var hoveringOut = function (e){
        $('li').css('color', 'black');
    }
    $('li').hover(hoveringIn, hoveringOut);

    var subSubContent = document.getElementById('#sub-sub-content').innerHTML;
    subSubContent =
})();
