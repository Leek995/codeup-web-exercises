(function(){
    "use strict"
    var btn1 = document.getElementById("btn1");
    btn1.setAttribute("value", 1);
    var input_box_1 = document.getElementById("input-box-1");
    input_box_1.setAttribute("value", 0);
    var first_input = function (event){
        input_box_1["value"] = btn1["value"];
    }
    btn1.addEventListener("click",first_input );
    console.log(input_box_1[btn1]);


})();