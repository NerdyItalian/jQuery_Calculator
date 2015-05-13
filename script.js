$(document).ready(function(){
    var numLength = function(number) {
        if (number.length > 9) {
            total.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                total.text("Err");
            }
        }
    };

    var number = "";
    var newNumber = "";
    var operator = "";
    var total = $("#total");
    total.text("0");

    $("#numbers a").not("#clear,#clearAll").on("click", function(){
        number += $(this).text();
        total.text(number);
        numLength(number);
    });
    $("#operators a").not("#equals").on("click", function(){
        operator = $(this).text();
        newNumber = number;
        number = "";
        total.text("0");
    });
    $("#clear, #clearAll").on("click", function(){
        number = "";
        total.text("0");
        if ($(this).attr("id") === "clearAll"){
            newNumber = "";
        }
    });

    $("#equals").on("click", function(){
        if (operator === "+"){
            number = (parseInt(number, 10) + parseInt(newNumber,10)).toString(10);
        } else if (operator === "-"){
            number = (parseInt(newNumber, 10) - parseInt(number,10)).toString(10);
        } else if (operator === "/"){
            number = (parseInt(newNumber, 10) / parseInt(number,10)).toString(10);
        } else if (operator === "*"){
            number = (parseInt(newNumber, 10) * parseInt(number,10)).toString(10);
        }
        total.text(number);
        numLength(number);
        number = "";
        newNumber = "";
    });
});