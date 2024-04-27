left  = document.getElementById("left")
alif  = document.getElementById("alif")
ba    = document.getElementById("ba")
ta    = document.getElementById("ta")
tha   = document.getElementById("tha")
dja   = document.getElementById("dja")
Ha    = document.getElementById("Ha")
Kha   = document.getElementById("Kha")
dal   = document.getElementById("dal")
dhal  = document.getElementById("dhal")
Ra    = document.getElementById("Ra")
zay   = document.getElementById("zay")
sin   = document.getElementById("sin")
chin  = document.getElementById("chin")
Sad   = document.getElementById("Sad")
Dad   = document.getElementById("Dad")
Ta    = document.getElementById("Ta")
Dha   = document.getElementById("Dha")
Ayn   = document.getElementById("Ayn")
Ghayn = document.getElementById("Ghayn")
fa    = document.getElementById("fa")
Qaf   = document.getElementById("Qaf")
kaf   = document.getElementById("kaf")
lam   = document.getElementById("lam")
mim   = document.getElementById("mim")
noun  = document.getElementById("noun")
ha    = document.getElementById("ha")
waw   = document.getElementById("waw")
ya    = document.getElementById("ya")

//mettre aplabet entier
alphabet = [alif, ba, ta, tha, dja, Ha, Kha, dal, dhal, Ra, zay, sin, chin, Sad, Dad, Ta, Dha, Ayn, Ghayn, fa, Qaf, kaf, lam, mim, noun, ha, waw, ya, left]
nouveau = [alif, tha, dja, Ha, Kha, dhal, Ra, Sad, Dad, Ta, Dha, Ayn, Ghayn, Qaf, ha, waw, ya]
francais = [ba, ta, dal, zay, sin, chin, fa, kaf, lam, mim, noun]
emphatique = [Ha, Kha, Ra, Sad, Dad, Ta, Dha, Ghayn, Qaf]


function dimLetterExcept(letter){
    for (let i = 0; i < alphabet.length; i ++){
        alphabet[i].style.color = "#222222"
    }
    letter.style.color = "white"
} 


window.addEventListener("keydown", (event) => {
    if (event.key == "l"){
        left.style.fontSize = "100px"
    }
    if (event.shiftKey && event.key == "L"){
        left.style.fontSize = "0px"
    }
    if (event.key == "a"){
        for (let i = 0; i < alphabet.length; i++){
            alphabet[i].style.color = "white"
        }
    }
    if (event.key == "f"){
        for (let i = 0; i < francais.length; i++){
            francais[i].style.color = "green"
        }
    }
    if (event.key == "n"){
        for (let i = 0; i < nouveau.length; i++){
            nouveau[i].style.color = "yellow"
        }
    }
    if (event.key == "e"){
        for (let i = 0; i < emphatique.length; i++){
            emphatique[i].style.color = "blue"
        }
    }


    if (event.altKey && event.key == "p"){
        dimLetterExcept(alif)
    }
    if (event.altKey && event.key == "o"){
        dimLetterExcept(ba)
    }
    if (event.altKey && event.key == "i"){
        dimLetterExcept(ta)
    }
    if (event.altKey && event.key == "u"){
        dimLetterExcept(tha)
    }
    if (event.altKey && event.key == "y"){
        dimLetterExcept(dja)
    }
    if (event.altKey && event.key == "t"){
        dimLetterExcept(Ha)
    }
    if (event.altKey && event.key == "r"){
        dimLetterExcept(Kha)
    }
    if (event.altKey && event.key == "e"){
        dimLetterExcept(dal)
    }
    if (event.altKey && event.key == "z"){
        dimLetterExcept(dhal)
    }
    if (event.altKey && event.key == "a"){
        dimLetterExcept(Ra)
    }

    if (event.altKey && event.key == "m"){
        dimLetterExcept(zay)
    }
    if (event.altKey && event.key == "l"){
        dimLetterExcept(sin)
    }
    if (event.altKey && event.key == "k"){
        dimLetterExcept(chin)
    }
    if (event.altKey && event.key == "j"){
        dimLetterExcept(Sad)
    }
    if (event.altKey && event.key == "h"){
        dimLetterExcept(Dad)
    }
    if (event.altKey && event.key == "g"){
        dimLetterExcept(Ta)
    }
    if (event.altKey && event.key == "f"){
        dimLetterExcept(Dha)
    }
    if (event.altKey && event.key == "d"){
        dimLetterExcept(Ayn)
    }
    if (event.altKey && event.key == "s"){
        dimLetterExcept(Ghayn)
    }

    if (event.altKey && event.key == ":"){
        dimLetterExcept(fa)
    }
    if (event.altKey && event.key == ";"){
        dimLetterExcept(Qaf)
    }
    if (event.altKey && event.key == ","){
        dimLetterExcept(kaf)
    }
    if (event.altKey && event.key == "n"){
        dimLetterExcept(lam)
    }
    if (event.altKey && event.key == "b"){
        dimLetterExcept(mim)
    }
    if (event.altKey && event.key == "v"){
        dimLetterExcept(noun)
    }
    if (event.altKey && event.key == "c"){
        dimLetterExcept(ha)
    }
    if (event.altKey && event.key == "x"){
        dimLetterExcept(waw)
    }
    if (event.altKey && event.key == "w"){
        dimLetterExcept(ya)
    }

    if (event.altKey && event.key == "!"){
        dimLetterExcept()
    }
})