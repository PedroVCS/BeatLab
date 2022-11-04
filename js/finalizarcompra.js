
var button = document.getElementById("action-bt3");

button.addEventListener("click", function(){
    var dados = document.getElementById("dados");

    dados.classList.toggle("hide");
});

// function finalizar(){
//     const modal = document.getElementById('janela-modal')
//     modal.classList.add('abrir')

//     modal.addEventListener('click', (e) => {
//         if(e.target.id == 'home-bt' || e.target.id == 'janela-modal'){
//             modal.classList.remove('abrir')
//         }         
//     })
// };


function finalizar(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'home-bt'){
            modal.classList.remove('abrir')
        }         
    })
};

// var button = document.getElementById("action-bt");

// button.addEventListener("click", function(){
//     var dados = document.getElementById("dados");

//     dados.classList.toggle("hide");
// });

