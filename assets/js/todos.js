//Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//When I click the delete icon, fade out the li and then remove
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
})

//add new todo
$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        //grab new todo text from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append(`<li><span class="bg-danger text-white"><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
        //clear input box after adding to list
        $(this).val("");
    }
})

//When I press pencil icon, I want the text input box to disappear.
//When I click it again, I want it to reappear.
$(".fa-pencil-alt").click(function() {
    $("input[type=text]").fadeToggle("slow", "linear"); 
})