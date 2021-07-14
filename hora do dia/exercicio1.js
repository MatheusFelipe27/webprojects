function carregar(){
    var texto = document.getElementById('texto')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    texto.innerHTML= "Agora são " + hora +" horas e " + minutos +" minutos."
    if(hora>=0 && hora<12){
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    }
    else if( hora>=12 && hora<19){
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#b9846f' 
    }
    else{
        img.src ='noite.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}
