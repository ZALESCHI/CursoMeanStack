function exibir(){
    //obtendo os dados dos campos de entrada
    var v_nome = document.getElementById('nome').value;
    var v_idade = document.getElementById('idade').value;

    //criando a mensagem
    var mensagem = "Nome = " + v_nome +
                   "\nIdade = " + v_idade;
    
    if(v_idade < 18){
        mensagem += "\nMenor de Idade" ;
    } else if(v_idade == "18") {
        mensagem += "\nPossui exatamente 18 anos";
    } else {
        mensagem += "\nMaior de 18 anos";
    }

    //exibindo a mensagem
    alert(mensagem);
}

var botao = document.getElementById("btnEnviar");
botao.addEventListener("click", exibir);