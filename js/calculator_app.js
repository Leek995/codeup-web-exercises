(function(){
    "use strict"
    var buttons = document.getElementsByTagName("button");
    console.log(buttons);
    for(var i = 0; i < buttons.length; i++){
        buttons[i].setAttribute("value", i);
        console.log(`Button ${i} value is ${buttons[i].getAttribute("value")}`);
        if(buttons[i] === buttons[4]){
            buttons[i].setAttribute("value", "+");
        }else if(buttons[i] === buttons[8]){
            buttons[i].setAttribute("value", "-" )
        }else if(buttons[i] === buttons[12]){
            buttons[i].setAttribute("value","*" )
        }else if(buttons[i] === buttons[15]){
            buttons[i].setAttribute("value","=" )
        }else if(buttons[i] === buttons[16]){
            buttons[i].setAttribute("value","/" )
        }
        console.log(`Button ${i} value is ${buttons[i].getAttribute("value")}`);
    }


    // var buttons = document.getElementsByTagName("button");
    // for(var i = 0; i < buttons.length; i++) {
    //     if (buttons[i] === buttons[4]) {
    //         buttons.setAttribute("value", "1");
    //         console.log(buttons[4]);
    //     }
    //
    //     buttons.forEach(function(button){
    //         if(button === buttons[4]){
    //             button.setAttribute("value", "=");
    //         }
    //         console.log(button[4]);
    //     });
    //     var btn1 = document.getElementById("btn1");
    //     btn1.setAttribute("value", 1);
    //     var input_box_1 = document.getElementById("input-box-1");
    //     input_box_1.setAttribute("value", 0);
    //     var first_input = function (event){
    //         input_box_1["value"] = btn1["value"];
    //     }
    //     btn1.addEventListener("click",first_input );
    //     console.log(input_box_1[btn1]);

})();