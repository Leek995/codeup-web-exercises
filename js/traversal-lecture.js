$(function () {
    "use strict";

    // ====================== $(selector).each()
    //
    // implicit iteration
    //
    // $('li').css("color", "red");
    //
    // explicit iteration with .each()
    // - give every other li a background color of lightblue
    // - concatenate the li index at the end of the inner text of each li
    //
    //
    // $('li').each(function(index, element) {
    //   var currentText = $(element).text();
    //   $(element).text(currentText + " " + index);
    //     if (index % 2 === 0) {
    //         $(element).css('background', 'lightblue');
    //     }
    // });
    //
    // make the text purple for all list items that start with the letter b and
    // create a monochromatic transition for the background color
    //
    // $('li').each(function(index, element) {
    //     if ($(element).text().toLowerCase().startsWith('b')) {
    //         $(element).css('color', 'purple');
    //     }
    //     $(element).css('background', "#" + ("" + index).repeat(3));
    // });
    //
    //
    // ====================== DOM Traversal Methods (see file folders example)
    //
    // first, last, next, prev, children, parent
    //
    // .first()
    //
    // $('article').first().css('background', 'lime');
    //
    // .last()
    //
    // $('article').last().css('background', 'lime');
    //
    // .children()
    //
    // $('section').first().children().css('background', 'yellow');
    // $('section').first().children('article').css('background', 'yellow');
    //
    // .parent()
    //
    // $('#cool-title').parent().css('background', 'firebrick');
    // $('#cool-title').parents('body').css('background', 'blue');
    //
    // .next() / .prev()
    //
    // $('ol').children()
    //     .first()
    //     .next()
    //     .css('font-size', '50px');
    //
    //
    // Which one will be selected?
    //
    // $('main')
    //     .children().last().prev().prev().children().first()
    //     .css('background', 'yellow')
    //     .css('font-family', 'fantasy');

});