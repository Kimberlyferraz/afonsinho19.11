const series = [
    {
        nome: "The Chosen",
        temporada: "5"
    },
    {
        nome: "Friends",
        temporada: "3"
    },
    {
        nome: "Stranger Things",
        temporada: "4"
    }
]

const formulario = document.getElementById("formAluno")
const campoNome = document.getElementById("nome")
const campoTemporada = document.getElementById("temporada")
const corpoTabela = document.getElementById("corpoTabela")

function exibir(){
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < series.length; posicao++){

        const serie = series[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${serie.nome}</td>
                <td>${serie.temporada}</td>
            </tr>
        `
    }
}

exibir();

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const serie = {
        nome: campoNome.value,
        temporada: campoTemporada.value
    }

    series.push(serie)

    exibir()

})