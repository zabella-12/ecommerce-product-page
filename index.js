let adiciona = document.getElementById('add');
let remove = document.getElementById('del');
let contador = 0;
let newQtd = 0
let shopping = document.querySelector('#add-card')
let price = document.querySelector("h3.price").getAttribute("data-price")
let cart = 0
let notifica = document.getElementById('notificacao').style.display = "none"


adiciona.addEventListener('click', function () {
    contador = contador + 1
    newQtd = document.getElementById('qtd').innerHTML = contador;

})

remove.addEventListener('click', function () {

    if (contador <= 0) {
        //alert('Não há nada para subtrair')
    }
    else {
        contador = contador - 1
        newQtd = document.getElementById('qtd').innerHTML = contador;
    }

})

function buy() {
    shopping = newQtd
    cart = shopping * price
    if (cart > 0) {
        notifica = document.getElementById('notificacao').style.display = "inline-block"
        notifica = document.getElementById('notificacao').innerHTML = shopping
       
        
    }
}



    //toast
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        
        toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()

        })
        }



function dump() {
    cart = 0
    let inf = document.getElementById('dadosModal').innerHTML = `<strong>Your cart empty.</strong>`
    inf = document.querySelector('.thumbModal').style.display = "none"
    inf = document.querySelector('.thumbModalDel').style.display = "none"
    notifica = document.getElementById('notificacao').style.display = "none"
    notifica = document.getElementById('checkout').style.display = "none"
}


function modalBuy() {
    if (cart > 0) {
        let inf = document.getElementById('dadosModal').innerHTML = `Autum Limited Edition... </br> $125.00 x ${newQtd} <strong>$${cart}</strong>`
        inf = document.querySelector('.thumbModal').style.display = "flex"
        inf = document.querySelector('.thumbModalDel').style.display = "flex"
        notifica = document.getElementById('checkout').style.display = "block"
    }

    else if (cart > 0) {
        dump()
    }
    else {
        dump()
    }
}

//seleção de imagens 
let thum01 = document.getElementById('thumb1')
let thum02 = document.getElementById('thumb2')
let thum03 = document.getElementById('thumb3')
let thum04 = document.getElementById('thumb4')

let fullImg = document.getElementById('bigImg')

thum01.addEventListener('click', function(){
    fullImg.innerHTML = `<img class=" w-75 formas-das-bordas"  src="/images/image-product-1.jpg"></img>` ;
})

thum02.addEventListener('click', function(){
    fullImg.innerHTML = `<img class=" w-75 formas-das-bordas"  src="/images/image-product-2.jpg"></img>` ;
})

thum03.addEventListener('click', function(){
    fullImg.innerHTML = `<img class=" w-75 formas-das-bordas"  src="/images/image-product-3.jpg"></img>` ;
})

thum04.addEventListener('click', function(){
    fullImg.innerHTML = `<img class=" w-75 formas-das-bordas"  src="/images/image-product-4.jpg"></img>` ;
})