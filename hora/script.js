function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var txt = window.document.getElementById('txt')
    var sd = window.document.getElementById('saudacao')
    var data = new Date()
    var min = new Date()
    var hora = data.getHours()
    var minuto = min.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}h${minuto}min</strong>`

        if (hora >= 0 && hora < 12) {
            //bom dia
            img.src = 'imagens/manha.png'
            sd.innerHTML = '<strong>Bom dia!</strong>'
            document.body.style.background = '#e8af58'
        }
        else if (hora >= 12 && hora < 18) {
            //boa tarde
            img.src = 'imagens/tarde.png'
            sd.innerHTML = '<strong>Boa tarde!</strong>'
            document.body.style.background = '#9c7c6c'
            txt.style.color = 'white'

        }
        else {
            // boa noite
            img.src = 'imagens/noite.png'
            sd.innerHTML = '<strong>Boa noite!</strong>'
            document.body.style.background = '#484258'
            txt.style.color = 'white'

        }
}
