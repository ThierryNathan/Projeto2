const bichos = JSON.parse(localStorage.getItem("bichos")) || [] 

bichos.forEach(bicho => card(bicho))

function card(bicho)
{
    //template literals
    const cardBicho = 
    `
        <div class="nes-container with-title is-centered">
        <p class="title">${bicho.titulo}</p>

        <div class = "container">
        <div class="life-container">
            <p>Vida</p> 
            <a href="#" class="nes-badge is-icon">
            <span class="is-warning"><i class="nes-icon heart is-small"></i></span>
            <span class="is-primary">${bicho.vida}</span>
            </a>
        </div>

        <div class="special-container">
            <p>Poder</p> 
            <a href="#" class="nes-badge is-icon">
            <span class="is-warning"><i class="nes-icon star is-small"></i></span>
            <span class="is-primary">${bicho.poder}</span>
            </a>
        </div>

        <div class="stamina-container">
            <p>Vigor</p> 
            <a href="#" class="nes-badge is-icon">
            <span class="is-warning"><i class="nes-icon like is-small"></i></span>
            <span class="is-primary">${bicho.vigor}</span>
            </a>
        </div>
        </div>

        <p>Força</p> 
        <progress class="nes-progress is-success" value="50" max="100"></progress>
        
        <!-- Esta seção só será exibida no momento em que o usuário clicar no botão de editar ou durante a criação de um novo animal. -->
        <button type="button" class="nes-btn is-error">apagar</button>
        <button type="button" class="nes-btn is-primary">-</button>
        <button type="button" class="nes-btn is-primary">+</button>   

        </div>
    `  

    const card = document.createElement("div")
    card.innerHTML = cardBicho
    document.querySelector("#lista-de-animais").appendChild(card)
}