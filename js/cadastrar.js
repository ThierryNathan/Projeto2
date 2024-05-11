document.querySelector("#btn-cadastrar").addEventListener("click", () => {

    const form = document.querySelector("form")
    const bicho = 
    {
        id: "id_" + new Date().getTime(),
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        vida: form.vida.value,
        poder: form.poder.value,
        vigor: form.vigor.value
    }

    const validado = validar(bicho);
    if (validado) {
        salvar(bicho);
    }

})

function salvar(bicho)
{
    const bichos = JSON.parse(localStorage.getItem("bichos")) || [] 
    bichos.push(bicho)
    localStorage.setItem("bichos" , JSON.stringify(bichos))
    window.location.href = "index.html"
}

function validar(bicho)
{
    limparErros()
    let validado = true;

        if (bicho.titulo.trim() == "")
        {
            document.querySelector("#titulo").classList.add("is-error")
            document.querySelector("#titulo-erro").innerText = "o título é obrigatório"
            validado = false
        }

        if (bicho.descricao.trim() == "" || bicho.descricao.length < 10)
        {
            document.querySelector("#descricao").classList.add("is-error")
            document.querySelector("#descricao-erro").innerText = "a descrição deve ter pelo menos 10 caracteres"
            validado = false
        }
        
        if (bicho.vida <= 0)
        {
            document.querySelector("#vida").classList.add("is-error")
            document.querySelector("#vida-erro").innerText = "vida deve ser maior que zero"
            validado = false
        }

        if (bicho.poder <= 0)
        {
            document.querySelector("#poder").classList.add("is-error")
            document.querySelector("#poder-erro").innerText = "poder deve ser maior que zero"
            validado = false
        }

        if (bicho.vigor <= 0)
        {
            document.querySelector("#vigor").classList.add("is-error")
            document.querySelector("#vigor-erro").innerText = "vigor deve ser maior que zero"
            validado = false
        }

        return validado;
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
