document.querySelector("#btn-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")

    const bicho = 
    {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        vida: form.vida.value,
        poder: form.poder.value,
        vigor: form.vigor.value
    }

    validar(bicho)

    console.log(bicho)

})

function validar(bicho)
{
    limparErros()

    if (bicho.titulo.trim() == "")
    {
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-erro").innerText = "o título é obrigatório"
    }

    if (bicho.descricao.trim() == "" || bicho.descricao.length < 10)
    {
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-erro").innerText = "a descrição deve ter pelo menos 10 caracteres"
    }
    
    if (bicho.vida <= 0)
    {
        document.querySelector("#vida").classList.add("is-error")
        document.querySelector("#vida-erro").innerText = "vida deve ser maior que zero"
    }

    if (bicho.poder <= 0)
    {
        document.querySelector("#poder").classList.add("is-error")
        document.querySelector("#poder-erro").innerText = "poder deve ser maior que zero"
    }

    if (bicho.vigor <= 0)
    {
        document.querySelector("#vigor").classList.add("is-error")
        document.querySelector("#vigor-erro").innerText = "vigor deve ser maior que zero"
    }
}


function limparErros()
{
    // Percorre o array
    document
        .querySelectorAll("input.is-error, textarea.is-error")
        .forEach
        (element => 
            {
            element.classList.remove("is-error");
            // Limpa o texto de erro
            const erroId = element.id + "-erro";
            const erroElement = document.querySelector("#" + erroId);
            if (erroElement) 
            {
                erroElement.innerText = "";
            }
            }
        );
}
