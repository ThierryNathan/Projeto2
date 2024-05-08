function inc(id)
{
    const bichos = JSON.parse(localStorage.getItem("bichos")) || [] 
    let bicho = bichos.find( bicho => bicho.id = id )
    bicho.status += 10
    localStorage.setItem("bichos", JSON.stringify(bichos))

    document.querySelector("#"+id+" progress").value += 10
}

function dec(id)
{
    const bichos = JSON.parse(localStorage.getItem("bichos")) || [] 
    let bicho = bichos.find( bicho => bicho.id = id )
    bicho.status -= 10
    localStorage.setItem("bichos", JSON.stringify(bichos))

    document.querySelector("#"+id+" progress").value -= 10
}