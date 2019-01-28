$(document).ready(function(){
    $("#acaoLer").click(function(){
        $.ajax({
            dataType: 'json',
            url: 'http://emiliocelso.com.br/api/android',
            method: 'GET',
            success: function(resposta){
                //redefinindo o cabecalho
                var cabecalho = $("<tr>");
                cabecalho.append("<td>Nome</td>");
                cabecalho.append("<td>Telefone</td>");
                cabecalho.append("<td>Data Nasc.</td>");

                $("#tabela").html(cabecalho);

                $.each(resposta, function(k, v){
                    var linha = $("<tr>");
                    var colunas = "<td>" + v.Nome + "</td>";
                    colunas += "<td>" + v.Telefone + "</td>";
                    colunas += "<td>" + v.DataNascimento + "</td>";

                    linha.append(colunas);
                    $("#tabela").append(linha);
                });
            },
            error: function(erro){
                alert("Erro: " + erro.responseText);
            }
        });
    });

    $("#acaoEnviar").click(function(){
        $.ajax({
            url: 'http://emiliocelso.com.br/api/android',
            method: 'POST',
            data: {
                Nome: $("#nome").val(),
                Telefone: $("#telefone").val(),
                DataNascimento: $("#data").val()
            },
            success: function(resposta){
                alert('Dados inseridos com sucesso');
            },
            error: function(erro){
                alert('Erro: ' + erro.responseText);
            }
        });
    });
});