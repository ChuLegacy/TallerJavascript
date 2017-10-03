$(document).ready(function () {
    
    $("#search_2").click(function () {
        $(".texto_1");
        var name = $("#name").val();
        $("#primera").text("Hola, mi nombre es : " + name);
        
        $(".texto_1");
        var identidad = $("#identidad").val();
        $("#segunda").text("Mi tipo de documento es : " + identidad );
        
        $(".texto_1");
        var numero = $("#numero").val();
        $("#tercera").text("Mi numero de documento es :" + numero );
        
        $(".texto_1");
        var Genero = $("#Genero").val();
        $("#cuarta").text("Mi Genero biologico es :" + Genero );
        
        $(".texto_1");
        var estatura = $("#estatura").val();
        $("#quinta").text("Mi estatura es :" + estatura );
        
        $(".texto_1");
        var verdadero = $("#verdadero").val();
        $("#sexta").text("es verdad que vive en cartago ? :" + verdadero );
    });
});