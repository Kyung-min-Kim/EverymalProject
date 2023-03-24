$(function () {
    $("#animalplus").on("click", function() {
        $(".btnJoinArea").prepend($("#pet_form").clone());
    });
    $("#animalminus").on("click", function() {
        $("#pet_form").remove();
    });
    // $("#animalplus").on("click", function() {
    //     $("#pet_form").clone().insertBefore($(".btnJoinArea"));
    // });
});