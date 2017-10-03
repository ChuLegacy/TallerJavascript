$(document).ready(function(){
    $("#search").click(function (){
        var name = $("#name").val();
        $("#primera").text("Hola mi nombre es " + name + " y me siento feliz de estar aprendiendo JavaScript usando jQuery");
    }); 
});

