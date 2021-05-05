var slots = [document.getElementById("slot1"), 
    document.getElementById("slot2"), 
    document.getElementById("slot3")]

var mao = document.getElementById("mao")

for (const slot of slots) {
    slot.addEventListener("click", () => {
        if(mao.children.length > 0){
            colocaPosicao(mao.children[0], slot)
            slot.append(mao.children[0])
        }else{
            mao.append(slot.children[slot.children.length-1])
            limpaPosicao(mao.children[0])
        }
    })
}

function limpaPosicao(el) {
    el.classList.remove("row-1")
    el.classList.remove("row-2")
    el.classList.remove("row-3")
}

function colocaPosicao(el, slot){
    el.classList.add(`row-${3-slot.children.length}`)
}