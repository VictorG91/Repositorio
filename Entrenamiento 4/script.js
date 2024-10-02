document.addEventListener('DOMContentLoaded', function (event) {

    const btnSubmit = document.getElementById('btnEnviar');

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let via = document.getElementById('via');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');
    let edad = document.getElementById('edad');
    let dni = document.getElementById('dni');

    btnSubmit.addEventListener('click', function(event) {

        if (!validarEmail(email.value)) {
            alert('Introduzca un email valido.');
            return;
        }
    
        if (!validarTelefono(Number(telefono.value))) {
            alert('Introduzca un numero de telefono con 9 digitos.');
            return;
        }

        if (Number(edad.value) < 0 || Number(edad.value) > 120){
            alert('Introduzca una edad válida.');
            return;
        }
    
        if(validarEmail && validarTelefono){
            alert('Nombre: ' + nombre.value +
                'Edad: ' + edad.value +
                'Email: ' + email.value +
                'Teléfono: ' + telefono.value
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

    function validarDni(dni) {
        const regex = /^\d{1,8}[A-Za-z]$/;
        return regex.test(dni);
      }