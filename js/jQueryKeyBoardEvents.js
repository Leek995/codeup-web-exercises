"use strict"
// $('#textfield').keydown(function (e){
//     console.log($(this).val())
//     console.log("event is fired off");
//
// })
$('#textfield').keypress(function (e){
    console.log($(this).val())
    console.log("event is fired off");

})
// $('#textfield').keyup(function (e){
//     console.log($(this).val())
//     console.log("event is fired off");
//
// })

$('h1').on('click',  function (e) {
    $(this).css('color','red');
    console.log("changing h1 tag");
});

// $('h1').off();
$('#btn').on('click', function (e){
    $('h1').off()
})