//                                                    JAVASCRIPT
(function (){
    "use strict"
    // get defition data to later add class to element
    // returns a list of definition data object array
    let definition_data = $('dd');
    let definition_title = $('dt');

    // add class of invisible
    definition_data.addClass('invisible');

    // create an event that turns definition data visible when(clicked)
    // remove class functions to toggle off. Maybe refactor to use toggle
    // method.

    definition_data.removeClass('invisible');
    definition_data.addClass('visible');

    // for(let i =0; i < definition_title.length; ++i){
    //     definition_title[i].hover(
    //         function (e){
    //             definition_data[i].removeClass('invisible');
    //             definition_data[i].addClass('visible');
    //         },
    //         function (e){
    //             definition_data[i].removeClass('visible');
    //             definition_data[i].addClass('invisible');
    //         })
    // }
    console.log(definition_data[2].)

    // definition_title.hover(
    //     function (e){
    //         definition_data.removeClass('invisible');
    //         definition_data.addClass('visible');
    //     },
    //     function (e){
    //         definition_data.removeClass('visible');
    //         definition_data.addClass('invisible');
    //     }
    // )


    // definition_data.hover(
    //     // hover-in event function
    //     function(){
    //         definition_data.forEach(function (definition){
    //             definition.visibility = none;
    //         })
    //     },
    //     // hover-out event function
    //     function () {
    //         definition_data.forEach(function (definition) {
    //             definition.visibility = hidden;
    //         })
    //     }















})();