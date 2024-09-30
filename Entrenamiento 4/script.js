document.addEventListener('DOMContentLoaded', function (event) {
    const btnSubmit = document.getElementById('submit');
    
    btnSubmit.addEventListener('click', function(event) {

    
        const nombre = document.getElementById('nombre').value;
        const edad = Number(document.getElementById('edad').value);
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
    
    
        if (!validarEmail(email)) {
            alert('Introduzca un email valido.');
            return;
        }
    
        if (!validarTelefono(telefono)) {
            alert('Introduzca un numero de telefono con 9 digitos.');
            return;
        }
    
        if(validarEmail && validarTelefono){
            alert('Nombre: ' + nombre +
                'Edad: ' + edad +
                'Email: ' + email +
                'Teléfono: ' + telefono
            )
        }
    });
    
    });
    
    function validarEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
     
    function validarTelefono(telefono){
        const telefonoRegex = /^[0-9]{9}$/;
        return telefonoRegex.test(telefono);
    }