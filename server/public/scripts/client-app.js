$(document).ready(function() {
    // +++++++++++++++++++++++++++++++++++++++
    //               VARIABLES
    // +++++++++++++++++++++++++++++++++++++++

    var array = [],
        joinArray = [],
        storeNumbers = [];

    // +++++++++++++++++++++++++++++++++++++++
    //            EVENT LISTENERS
    // +++++++++++++++++++++++++++++++++++++++

    //combine these click functions,
    //numbers
    $('.1').on('click', function() {
        array.push(1);
        joinArray = array.join("");
        $('.display').text(joinArray);
        console.log("Clicked on 1");
        console.log("array: ", array);
        console.log("joinArray: ", joinArray);
    });


    $('.2').on('click', function() {
        array.push(2);
        joinArray = array.join("");
        $('.display').text(joinArray);
        console.log("Clicked on 2");
        console.log("array: ", array);
        console.log("joinArray: ", joinArray);
    });


    $('.3').on('click', function() {
        array.push(3);
        joinArray = array.join("");
        $('.display').text(joinArray);
        console.log("Clicked on 3");
        console.log("array: ", array);
        console.log("joinArray: ", joinArray);
    });

    $('.4').on('click', function() {
        $('.display').text("4");
        console.log("Clicked on 4");
    });
    $('.5').on('click', function() {
        $('.display').text("5");
        console.log("Clicked on 5");
    });
    $('.6').on('click', function() {
        $('.display').text("6");
        console.log("Clicked on 6");
    });
    $('.7').on('click', function() {
        $('.display').text("7");
        console.log("Clicked on 7");
    });
    $('.8').on('click', function() {
        $('.display').text("Clicked on 8");
        console.log("8");
    });
    $('.9').on('click', function() {
        $('.display').text("Clicked on 9");
        console.log("9");
    });
    $('.0').on('click', function() {
        $('.display').text("Clicked on 0");
        console.log("0");
    });
    $('.dot').on('click', function() {
        $('.display').text("Clicked on .");
        console.log(".");
    });


    //operators
    $('.add').on('click', function() {
        console.log("Clicked add");
        keepNum();
        $('.display').empty();

    });


    $('.subtract').on('click', function() {
        $('.display').empty();
        console.log("Clicked subtract");
    });
    $('.multiply').on('click', function() {
        $('.display').empty();
        console.log("Clicked multiply");
    });
    $('.divide').on('click', function() {
        $('.display').empty();
        console.log("Clicked divide");
    });
    $('.equals').on('click', function() {
        $('.display').empty();
        keepNum();
        console.log("Clicked equals");
        console.log("storeNumbers: ", storeNumbers);
        //call a calculate switch function
    });

    //clear button
    $('.reset').on('click', function() {
        $('.display').empty();
        array = [];
        console.log("Clicked clear");
        console.log("array: ", array, "   joinedArray: ", joinArray, "   storeNumbers: ", storeNumbers);

    });


}); // <<< end doc ready


// +++++++++++++++++++++++++++++++++++++++
//              FUNCTIONS
// +++++++++++++++++++++++++++++++++++++++

//if someone clicks an operator first
//if someone clicks two operators in a row
//if someone clicks a number

// remembers numbers to calculate
function keepNum() {
    storeNumbers.push(joinArray);
    array = [];
    joinArray = [];
    console.log("storeNumbers: ", storeNumbers);
}

// add button fuction
function addition() {}
// subtract button function
function subtract() {}
// multiply button function
function multiply() {}
// divide button function
function divide() {}


// calculate / equals button function
function calculate() {
    //do things to numbers stored in an array
    //potential switch statement for each operator
    // modulus to select odd/even array values
    // switch doMath(operator) {
    //     case add:
    //         this.getById('.add') =
    // }

}
