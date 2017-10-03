$(document).ready(function () {
    $("#search_2").click(function () {
       $("#result_1").text(Math.pow(50,10));
       $("#result_2").text(Math.pow(10,50));
       $("#result_3").text(50*10);
       $("#result_4").text(50/10);
       $("#result_5").text(10/50);
       $("#result_6").text(50%10);
       $("#result_7").text(10+50);
       $("#result_8").text(50-10);
    });
});

