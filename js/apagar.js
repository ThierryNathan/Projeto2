function apagar(id)
{
    const bichos = JSON.parse(localStorage.getItem("bichos")) || [] 
    const bichosAtt = bichos.filter( bicho => bicho.id != id )
    localStorage.setItem("bichos", JSON.stringify(bichosAtt))

    document.querySelector("#" + id).remove()
}