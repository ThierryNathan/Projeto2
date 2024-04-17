console.log("teste");

document.querySelector("#btn-cadastrar").addEventListener("click", () => {
    
    const form = document.querySelector("form");
    
    const bicho = 
    {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        vida: form.vida.value,
    }
    validar(bicho);

    console.log(bicho);
})

function limparErros()
{
    document.querySelector("input .is-error, textarea .is-error").classList.remove("is-error")
}

function validar(bicho)
{
    limparErros();
    if (bicho.titulo.trim() == "") 
    {
        document.querySelector("#titulo").classList.add("is-error");
        document.querySelector("#titulo-erro").innerText = ("O título é obrigatório");
    }
    if (bicho.descricao.trim() == "" || tarefa.descricao.length < 10) 
    {
        document.querySelector("#descricao").classList.add("is-error");
        document.querySelector("#descricao-erro").innerText = ("A descrição deve ter pelo menos 10 caracteres");
    }
    if (bicho.vida < 10) 
    {
        document.querySelector("#vida").classList.add("is-error");
        document.querySelector("#vida-erro").innerText = ("A descrição deve ter pelo menos 10 caracteres");
    }
}

