window.onload = function () {
    var botaoHTML = document.getElementById("botao")
    botaoHTML.addEventListener("click", cliqueBotao)
}

window.onload = function () {
    var botaoContato = document.getElementById("contato")
    botaoContato.addEventListener("click", cliqueContato)
}


function cliqueBotao() {
    document.location.href = "../../html/paginas/index.html"
}

function cliqueContato() {
    alert('Contato: lucasmalheiros@alunos.utfpr.edu.br')
}
/* Encontrei um erro ao tentar usar mais de um botão neste arquivo, a ideia original
era utilizar o botão adicionar elemento para adicionar mais dias no chamado, entretanto quando faço isso
o elemento "Contato" no Header para de funcionar, vou perguntar para o senhor antes de enviar a segunda
fase do projeto


window.onload = function (){
        var botaoAdd = document.getElementById("adicionar-mais-dias")
        botaoAdd.addEventListener("click", cliqueAdicionar)
}
function cliqueAdicionar(){

                    <label for="enunciado">Selecione o dia de agendamento: </label>
                    <select name="dia-agendado" id="dia-agendado" class="form-control">
                    <option selected>Dia do mês</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
}
*/

