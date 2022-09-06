(function(){
    "use strict"
    // Functions that displays how html is render on document
    function inputBox(button){
        var html = '';
        html += `<h1>${button.value}</h1>`
        return html;
    }
    // Functions that sorts integer buttons from other buttons
    function numberButtons(buttons){
        // create an empty array to sort all the buttons with that represent an integer
        let number_buttons = [];
        // iterate through array of buttons; that has an attribute of id
        // during iteration store node in empty array of number_buttons
        buttons.forEach(function (button){
            if(button.hasAttribute('id')){
                number_buttons.push(button);
            }
        })
        // iterate through array; and create Attribute of value based on id number
        for(let i = 0; i < number_buttons.length; ++i){
            if(number_buttons[i]['id'] === i){
                number_buttons[i].createAttribute('value');
                number_buttons[i].setAttribute('value', i)
            }
        }

        for(let i = 0; i < number_buttons.length; ++i){
            if(number_buttons[i]["id"] === number_buttons[i]){
                number_buttons.splice(number_buttons[i], 1, number_buttons[i]["value"]);
            }
        }

        // Return array with integers associated with corresponding values
        return number_buttons;
    }

    for(let i = 0; i < buttons.length; ++i){
        buttons[i].addEventListener("click", () => {
            var results;
            results = buttons[i]['id'];
            var getResults = inputBox(results);
        })
        input_container.innerHTML = getResults;
    }

    // Gather all the button elements from HTML store location of each node in variable
    var buttons = document.querySelectorAll("button");
    var input_container = document.querySelector('input-container');

})();

