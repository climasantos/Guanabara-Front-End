function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 0 && hora < 18) {
        // bom dia
        img.src= 'pexels-srv-3657143.jpg'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src= 'pexels-srv-3657143.jpg'
    } else {
        // boa noite USEI A MESMA FOTO POIS NÃO CONSEGUI EDITAR AS MESMAS
        img.src= 'pexels-srv-3657143.jpg'
    }
}
