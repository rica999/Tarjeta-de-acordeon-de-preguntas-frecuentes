$(function () {
    $("#question1").click(function () {
        $("#response1").slideDown();
        $("#arrow1").addClass('arrow_inverse');
    });
    $("#response1").mouseout(function () {
        $("#response1").slideUp();
        $("#arrow1").removeClass('arrow_inverse');
    });
    $("#question2").click(function () {
        $("#response2").slideDown();
        $("#arrow2").addClass('arrow_inverse');
    });
    $("#response2").mouseout(function () {
        $("#response2").slideUp();
        $("#arrow2").removeClass('arrow_inverse');
    });
    $("#question3").click(function () {
        $("#response3").slideDown();
        $("#arrow3").addClass('arrow_inverse');
    });
    $("#response3").mouseout(function () {
        $("#response3").slideUp();
        $("#arrow3").removeClass('arrow_inverse');
    });
    $("#question4").click(function () {
        $("#response4").slideDown();
        $("#arrow4").addClass('arrow_inverse');
    });
    $("#response4").mouseout(function () {
        $("#response4").slideUp();
        $("#arrow4").removeClass('arrow_inverse');
    });
    $("#question5").click(function () {
        $("#response5").slideDown();
        $("#arrow5").addClass('arrow_inverse');
    });
    $("#response5").mouseout(function () {
        $("#response5").slideUp();
        $("#arrow5").removeClass('arrow_inverse');
    });
})