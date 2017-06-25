$(document).ready(function () {
    var testNumLength = function (number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length - 9, 9));
            if (number.length > 30) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = "0";
    var newnumber = "";
    var operator = "";
    var decimalUsed = false;
    var decimal = "";
    var answer = false;
    var totaldiv = $("#total");
    totaldiv.text("0");
    var input = "";
    $("#decimal").click(function () {
        if (decimal == "") {
            if (answer == true) {
                number = $(this).text();
            }
            else {
                number += $(this).text();
            }
            answer = false;
            totaldiv.text(number);
            testNumLength(number);
            decimal = ".";
            decimalUsed = true;
        }
    });
    $("#numbers a").not("#clear,#clearall").click(function () {
        if (answer === true) {
            number = $(this).text();
        }
        else if (number == "0") {
            number = $(this).text();
        }
        else {
            number += $(this).text();
        }
        answer = false;
        totaldiv.text(number);
        testNumLength(number);
    });
    $("#operators a").not("#equals").click(function () {
        if (decimalUsed == true) {
            if (operator === "+") {
                number = (parseFloat(number, 10) + parseFloat(newnumber, 10)).toFixed(2);
            } else if (operator === "-") {
                number = (parseFloat(newnumber, 10) - parseFloat(number, 10)).toFixed(2);
            } else if (operator === "÷") {
                number = (parseFloat(newnumber, 10) / parseFloat(number, 10)).toFixed(2);
            } else if (operator === "×") {
                number = (parseFloat(newnumber, 10) * parseFloat(number, 10)).toFixed(2);
            }
        }
        else {
            if (operator === "+") {
                number = (parseFloat(number, 10) + parseFloat(newnumber, 10)).toString(10);
            } else if (operator === "-") {
                number = (parseFloat(newnumber, 10) - parseFloat(number, 10)).toString(10);
            } else if (operator === "÷") {
                number = (parseFloat(newnumber, 10) / parseFloat(number, 10)).toString(10);
            } else if (operator === "×") {
                number = (parseFloat(newnumber, 10) * parseFloat(number, 10)).toString(10);
            }
        }
        operator = $(this).text();
        newnumber = number;
        number = "";
        decimal = "";
        if (newnumber.length > 9) {
            totaldiv.text(newnumber.substr(newnumber.length - 8, 8) + operator);
        }
        else {
            totaldiv.text(newnumber + operator);
        }
    });
    $("#clear,#clearall").click(function () {
        number = "";
        decimal = "";
        operator = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });
    $("#equals").click(function () {
        if (decimalUsed == true) {
            if (operator === "+") {
                number = (parseFloat(number, 10) + parseFloat(newnumber, 10)).toFixed(2);
            } else if (operator === "-") {
                number = (parseFloat(newnumber, 10) - parseFloat(number, 10)).toFixed(2);
            } else if (operator === "÷") {
                number = (parseFloat(newnumber, 10) / parseFloat(number, 10)).toFixed(2);
            } else if (operator === "×") {
                number = (parseFloat(newnumber, 10) * parseFloat(number, 10)).toFixed(2);
            }
        }
        else {
            if (operator === "+") {
                number = (parseFloat(number, 10) + parseFloat(newnumber, 10)).toString(10);
            } else if (operator === "-") {
                number = (parseFloat(newnumber, 10) - parseFloat(number, 10)).toString(10);
            } else if (operator === "÷") {
                number = (parseFloat(newnumber, 10) / parseFloat(number, 10)).toString(10);
            } else if (operator === "×") {
                number = (parseFloat(newnumber, 10) * parseFloat(number, 10)).toString(10);
            }
        }
        totaldiv.text(number);
        testNumLength(number);
        newnumber = "";
        operator = "";
        answer = true;
        decimalUsed = false;
    });
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == 49 || keycode == 97) {
            $("#one").click();
        } else if (keycode == 50 || keycode == 98) {
            $("#two").click();
        } else if (keycode == 51 || keycode == 99) {
            $("#three").click();
        } else if (keycode == 52 || keycode == 100) {
            $("#four").click();
        } else if (keycode == 53 || keycode == 101) {
            $("#five").click();
        } else if (keycode == 54 || keycode == 102) {
            $("#six").click();
        } else if (keycode == 55 || keycode == 103) {
            $("#seven").click();
        } else if (keycode == 56 || keycode == 104) {
            $("#eight").click();
        } else if (keycode == 57 || keycode == 105) {
            $("#nine").click();
        } else if (keycode == 48 || keycode == 96) {
            $("#zero").click();
        } else if (keycode == 46) {
            $("#clearall").click();
        } else if (keycode == 8) {
            $("#clear").click();
        } else if (keycode == 187) {
            $("#equals").click();
        } else if (keycode == 43 || keycode == 107) {
            $("#plus").click();
        } else if (keycode == 45 || keycode == 109) {
            $("#minus").click();
        } else if (keycode == 42 || keycode == 120 || keycode === 106) {
            $("#multiply").click();
        } else if (keycode == 47 || keycode == 111 || keycode === 191) {
            $("#divide").click();
        }
    });
});