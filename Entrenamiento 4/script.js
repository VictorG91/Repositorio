document.addEventListener('DOMContentLoaded', function(event){

    const btnSubmit = document.getElementById('submit');
    var nombre = document.getElementById('nombre');
    var edad = document.getElementById('edad');
    var email = document.getElementById('email');
    var telephone = document.getElementById('phone');

    btnSubmit.addEventListener('click', function(event){
        
        

    })
    
})

function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
