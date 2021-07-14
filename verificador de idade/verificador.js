function submeter(){
    var date = new Date()
    var year = date.getFullYear()
    var formYear = document.getElementById('inp')
   //    alert(console.log(formYear.value))
    if(formYear.value.length==0 || formYear.value>=year){
        alert('Ano invalido, preencha novamente')
    }
    else{
        var rad = document.getElementsByName('sex')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var age = year - formYear.value
        var gender = ''
        if(rad[0].checked){
            if(age< 11){
                gender = 'criança'
                img.setAttribute('src', 'menininho.jpg')

            }
            else if(age> 10 && age<19){
                gender = 'adolescente'
                img.setAttribute('src', 'menino.jpg')

            }
            else if(age>18 && age<51){
                gender = 'adulto'
                img.setAttribute('src', 'homem.jpg')
            }
            else{
                gender = 'idoso'
                img.setAttribute('src', 'idoso.jpg')
            }

        }
        else if(rad[1].checked){
            if(age< 11){
                gender = 'criança'
                img.setAttribute('src', 'menininha.jpg')
            }
            else if(age> 10 && age<19){
                gender = 'adolescente'
                img.setAttribute('src', 'menina.jpg')
            }
            else if(age>18 && age<51){
                gender = 'adulta'
                img.setAttribute('src', 'mulher.jpg')
            }
            else{
                gender = 'idosa'
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        else{
            alert('Selecione o seu sexo')
        }
        if(gender!= ''){
            att.style.textAlign = 'center'
            if(age>1)
                att.innerHTML = 'Você é '+ gender+ ' de '+ age+ ' anos de idade!!'
            else
                att.innerHTML = 'Você é '+ gender+ ' de '+ age+ ' ano de idade!!'
    
            att.appendChild(img)
        }    
    }
    
    
}