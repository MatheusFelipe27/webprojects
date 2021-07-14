function carregar(){
    var pa = document.getElementById('pa')
    var initial = document.getElementById('initial')
    var final = document.getElementById('final')
    if(pa.value<1)
        alert('Digite uma PA positiva e tente novamente!')
    else{
        if(Number(initial.value) >=Number(final.value))
            res.innerHTML = 'O valor inicial é maior ou igual ao valor que se quer atingir.'
        else{
            res.innerHTML = 'A distribuição da sua PA é: '
            let fin = Number(final.value)
            let ini = Number(initial.value)
            let pra = Number(pa.value)
            for(let i=ini; i<=fin; i+=pra){
                res.innerHTML +=' '+ '\u{1F449}'+' '+ i   
            }
        }
    }
}