$(document).ready(function(){
    $("#btnEnviar").click(function(){

        //obtendo os cmpos de entrada
        var nome = $("#nome").val();
        var idade = $("#idade").val();

        //verificando a presença das classes CSS erro ou ok,
        // e removendo-as, se estiver presente
        if($("#resposta").hasClass("erro")){
            $("#resposta").removeClass("erro");
        }

        if($("#resposta").hasClass("ok")){
            $("#resposta").removeClass("ok");
        }

        //verificando se o campo idade está preenchido.
        //Se não tiver, geramos uma mensagem de erro; 
        //caso contrário, geramos uma resposta para o usuário
        var resultado;
        if(idade == ""){
            resultado = "Dados inválidos: idade não fornecida";
            $("#resposta").addClass("erro");
        } else {
            if(idade < 18){
                resultado = nome + " é menor de idade";
            } else {
                resultado = nome + " é maior de idade";
            }
            $("#resposta").addClass("ok");
        }

        $("#resposta").hide();
        $("#resposta").html(resultado);
        $("#resposta").fadeIn(2000);
        $("#resposta").delay(3000);
        $("#resposta").fadeOut(2000);
    });
});