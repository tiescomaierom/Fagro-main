function fazerPesquisa() {
    // Pegamos o texto da barra de pesquisa
    var texto = document.getElementById("barraDePesquisa").value;

    // Mostramos o resultado da pesquisa
    document.getElementById("resultado").innerHTML = "Você pesquisou por: " + texto;
}