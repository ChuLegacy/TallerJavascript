$(document).ready(function () {
    $("#search_2").click(function () {
        var a = Number($("#capture_1").val());
        var b = Number($("#capture_2").val());
        $("#result_1").text(Math.pow(a, b));
        $("#result_2").text(Math.pow(b, 10));
        $("#result_3").text(a * b);
        $("#result_4").text(a / b);
        $("#result_5").text(b / a);
        $("#result_6").text(a % b);
        $("#result_7").text(b + a);
        $("#result_8").text(a - b);
    });
});


