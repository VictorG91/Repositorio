document.addEventListener('DOMContentLoaded', function (event) {

    const btnSubmit = document.getElementById('btnEnviar');

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let direccion = document.getElementById('direccion');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');
    let edad = document.getElementById('edad');
    let dni = document.getElementById('dni');
    let validar = [false, false, false, false, false, false, false];

    nombre.addEventListener("blur", function (event) {

        if(nombre.value === ''){
            nombre.value='';
            nombre.placeholder='Este campo no puede estar vacío.';
            event.target.style.background = "red";
            validar[0] = false;
            enableButton();
            return;
        }

        if (!validarSoloLetras(nombre.value)) {
            nombre.value='';
            nombre.placeholder='No se permiten números';
            event.target.style.background = "red";
            validar[0] = false;
            enableButton();
            return;
        }

        nombre.value = nombre.value.toUpperCase();
        event.target.style.background = "green";
        event.target.style.color = "white";
        validar[0] = true;
        enableButton();
    })

    nombre.addEventListener('focus', function(event){
        nombre.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    apellidos.addEventListener("blur", function (event) {
        if(apellidos.value === ''){
            apellidos.value='';
            apellidos.placeholder='Este campo no puede estar vacío.';
            event.target.style.background = "red";
            validar[1] = false;
            enableButton();
            return;
        }

        if (!validarSoloLetras(apellidos.value)) {
            apellidos.value='';
            apellidos.placeholder='No se permiten números';
            event.target.style.background = "red";
            validar[1] = false;
            enableButton();
            return;
        }

        apellidos.value = apellidos.value.toUpperCase();
        event.target.style.background = "green";
        event.target.style.color = "white";
        validar[1] = true;
        enableButton();
    })

    apellidos.addEventListener('focus', function(event){
        apellidos.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    direccion.addEventListener("blur", function (event) {

        if(direccion.value === ''){
            direccion.value='';
            direccion.placeholder='Este campo no puede estar vacío.';
            event.target.style.background = "red";
            validar[2] = false;
            enableButton();
            return;
        }

        direccion.value = direccion.value.toUpperCase();
        event.target.style.background = "green";
        event.target.style.color = "white";
        validar[2] = true;
        enableButton();
    })

    direccion.addEventListener('focus', function(event){
        direccion.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    email.addEventListener("blur", function(event) {

        if(email.value === ''){
            email.value='';
            email.placeholder='Este campo no puede estar vacío.';
            event.target.style.background = "red";
            validar[3] = false;
            enableButton();
            return;
        }

        if (!validarEmail(email.value)) {
            email.value='';
            email.placeholder='Introduzca un email valido.';
            event.target.style.background = "red";
            validar[3] = false;
            enableButton();
            return;
        }

        event.target.style.background = "green";
        event.target.style.color = "white";
        validar[3] = true;
        enableButton();
    })

    email.addEventListener('focus', function(event){
        email.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    telefono.addEventListener("blur", function(event) {

        if(telefono.value === ''){
            telefono.value='';
            telefono.placeholder='Este campo no puede estar vacío.';
            event.target.style.background = "red";
            validar[4] = false;
            enableButton();
            return;
        }

        if (!validarTelefono(Number(telefono.value))) {
            telefono.value = '';
            telefono.placeholder = 'Introduzca un numero de telefono con 9 digitos.';
            event.target.style.background = "red";
            validar[4] = false;
            enableButton();
            return;
        }

        event.target.style.background = "green";
        event.target.style.color = "white";
        validar[4] = true;
        enableButton();
    })

    telefono.addEventListener('focus', function(event){
        telefono.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    edad.addEventListener("blur", function(event){

        if (!validarSoloNumeros(edad.value)) {
            edad.value='';
            edad.placeholder='No se permiten letras';
            event.target.style.color = "white";
            event.target.style.background = "red";
            validar[5] = false;
            enableButton();
            return;
        }

        if (Number(edad.value) < 0 || Number(edad.value) > 120 || Number(edad.value) == ''){
            edad.value = '';
            edad.placeholder = 'Introduzca una edad válida.';
            event.target.style.background = "red";
            event.target.style.color = "white";
            validar[5] = false;
            enableButton();
            return;
        }

        event.target.style.background = "green";
        event.target.style.color = "white";
        validar[5] = true;
        enableButton();
    })

    edad.addEventListener('focus', function(event){
        edad.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    dni.addEventListener("blur", function(event) {
        if (!validarDni(dni.value)) {
            dni.value = '';
            dni.placeholder = 'Introduzca un DNI valido. El DNI debe contener 8 dígitos y una letra';
            event.target.style.background = "red";
            validar[6] = false;
            enableButton();
            return;
        }

        dni.value = dni.value.toUpperCase();
        event.target.style.background = "green";
        event.target.style.color = "white";
        validar[6] = true;
        enableButton();
    })

    dni.addEventListener('focus', function(event){
        dni.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
        enableButton();
    })

    btnSubmit.addEventListener('click', function(event) {
        alert('Nombre: ' + nombre.value + '\n' +
            'Apellidos: ' + apellidos.value + '\n' +
            'Direccion: ' + direccion.value + '\n' +
            'Email: ' + email.value + '\n' +
            'Teléfono: ' + telefono.value + '\n' +
            'Edad: ' + edad.value + '\n' +
            'DNI: ' + dni.value);
    });

    function enableButton(){
        let contadorFalse = 0;
        for(let i = 0; i < validar.length; i++){
            if(validar[i] == false){
                contadorFalse++;
            }
        }
    
        if(contadorFalse > 0){
            btnSubmit.disabled = true;
        } else {
            btnSubmit.disabled = false;
        }

    }
    
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

function validarSoloLetras(input) {
    const letrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ]+(\s[a-zA-ZáéíóúÁÉÍÓÚ]+)*$/;
    return letrasRegex.test(input);
}

function validarSoloNumeros(edad) {
    const numerosRegex = /^[0-9]+$/;
    return numerosRegex.test(edad);
}