//******* PIXEL ART MAKER CODE BEGINS HERE *********** //
// Declare height, width and color variables at the global scope.
let height, width, color;

// When size is submitted by the user, call makeGrid().
$("#sizePicker").submit(function(event) {

    // Prevent default action of the submit event.
    event.preventDefault();
    
    // Get input values of height and width 
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();

    // Call  makeGrid().
    makeGrid(height, width);
});

function makeGrid(x, y) {
    // Remove all existing table-rows (tr).
    $('tr').remove();
    // Implement a for loop to create the grid dynamically.
    for (let i = 1; i <= x; i++) {
        // Select the table container and append rows to it.
        $("#pixelCanvas").append('<tr id=table' + i + '></tr>');
        // Implement a nested for loop to create a cell for each rows.
        for (let j = 1; j <= y; j++) {
            $("#table" + i).append('<td></td>');
        }
    }

    // Add color.
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        // Check if the cell (td) has a style attribute.
        if ($(this).attr('style')) {
            // Remove the style attribute.
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}

// ***CODE FOR WELCOME MODAL (THE EVENT FIRES AFTER PAGE LOADS)!!!!!*** //

//Get Modal element
let modal = $('#simpleModal');
//Get close button
let closeBtn = $('#closeBtn');

//Listen for Load
$(window).on('load', function() {
    modal.css('display', 'block');
});

//Listen for click on closeBtn
closeBtn.on('click', function() {
    modal.css('display', 'none');
});



//I WANT TO SAY A BIG THANK YOU TO GOOGLE, UDACITY AND ANDELA LEARNING COMMUNITY🙏!!!

//GOD BLESS THE TEAM THAT WORKED TOGEHTHER TO MAKE #ALCwithGoogle3.0 A LIFE CHANGING EXPERIENCE
