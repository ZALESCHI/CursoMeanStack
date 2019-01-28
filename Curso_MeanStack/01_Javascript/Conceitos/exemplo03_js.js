function exibir(){
    alert("Função callback");
}


document.getElementById("btn1").addEventListener('click', exibir);

document.getElementById("btn2").addEventListener('click', function(){
    alert("Função anônima");
});

document.getElementById("btn3").addEventListener('click', 
    () => alert("Arrow Function") );

