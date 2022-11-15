const infCadastro = document.querySelector('#formUp');

infCadastro.onsubmit = evento => {
    //receber o valor do campo 
    const nome = document.querySelector('#name');
    let cor1 = document.querySelector('#name1');

    //verificar se o campo esta em branco 
    if(!nome.value) {
   evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p> Campo Nome é obrigatorio!</p>'
     cor1.style.color = '#FF0000';
    console.log(nome);
    return;
}
    //receber o valor do campo 
    var email = document.querySelector('#email').value;
    //verificar se o campo esta em branco 
    if(email === "") {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p>Campo Email é obrigatorio!</p>'
    return;
}
    //receber o valor do campo 
    var repetEmail = document.querySelector('#repetEmail').value;
    //verificar se o campo esta em branco 
    if(repetEmail === '') {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p>Você precisa confirmar seu email!</p>'
    return;
}
    //receber o valor do campo 
    var password = document.querySelector('#password').value;
    //verificar se o campo esta em branco 
    if(password === '') {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p>Você Não pode esquecer da sua senha!</p>'
    return;
}
 //receber o valor do campo 
 var repetPassword = document.querySelector('#repetPassword').value;
 //verificar se o campo esta em branco 
 if(repetPassword === '') {
 evento.preventDefault();
 document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado?</p><p>Você precisa repetir sua senha!</p>'
 return;
}

};

//JANELA MODAL PARA VOLTAR AO HOME APOS FINALIZAR O CADASTRO
function finalizar(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'home-bt' ){
            modal.classList.remove('abrir')
        }         
    })
};
