document.addEventListener('DOMContentLoaded', function (event) {

    const btnSubmit = document.getElementById('btnEnviar');

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let direccion = document.getElementById('direccion');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');
    let edad = document.getElementById('edad');
    let dni = document.getElementById('dni');
    let validar = new Array();

    nombre.addEventListener("blur", function (event) {

        if(nombre.value === ''){
            nombre.value='';
            nombre.placeholder='Este campo no puede estar vacío.';
            event.target.style.color = "white";
            event.target.style.background = "red";
            return;
        }

        nombre.value = nombre.value.toUpperCase();
        validar[0] = 'true';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    apellidos.addEventListener("blur", function (event) {
        if(apellidos.value === ''){
            apellidos.value='';
            apellidos.placeholder='Este campo no puede estar vacío.';
            event.target.style.color = "white";
            event.target.style.background = "red";
            return;
        }

        apellidos.value = apellidos.value.toUpperCase();
        validar[1] = 'true';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    direccion.addEventListener("blur", function (event) {

        if(direccion.value === ''){
            direccion.value='';
            direccion.placeholder='Este campo no puede estar vacío.';
            event.target.style.color = "white";
            event.target.style.background = "red";
            return;
        }

        direccion.value = direccion.value.toUpperCase();
        validar[2] = 'true';
        event.target.style.color = "";
        event.target.style.background = "";

    })

    email.addEventListener("blur", function(event) {

        if(email.value === ''){
            email.value='';
            email.placeholder='Este campo no puede estar vacío.';
            event.target.style.color = "white";
            event.target.style.background = "red";
            return;
        }

        if (!validarEmail(email.value)) {
            email.value='';
            email.placeholder='Introduzca un email valido.';
            event.target.style.color = "white";
            event.target.style.background = "red";
            return;
        }
        
        validar[3] = 'true';
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
            event.target.style.color = "white";
            event.target.style.background = "red";
            return;
        }

        if (!validarTelefono(Number(telefono.value))) {
            telefono.value = '';
            telefono.placeholder = 'Introduzca un numero de telefono con 9 digitos.';
            event.target.style.background = "red";
            event.target.style.color = "white";
            return;
        }

        validar[4] = 'true';
    })

    telefono.addEventListener('focus', function(event){
        telefono.placeholder='';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    edad.addEventListener("blur", function(event){

        if (Number(edad.value) < 0 || Number(edad.value) > 120){
            edad.value = '';
            edad.placeholder = 'Introduzca una edad válida.';
            event.target.style.background = "red";
            event.target.style.color = "white";
            return;
        }

        validar[5] = 'true';
        event.target.style.color = "";
        event.target.style.background = "";
    })

    dni.addEventListener("blur", function(event) {
        if (!validarDni(dni.value)) {
            dni.value = '';
            dni.placeholder = 'Introduzca un DNI valido. El DNI debe contener 8 dígitos y una letra';
            event.target.style.background = "red";
            return;
        }

        dni.value = dni.value.toUpperCase();
        validar[6] = 'true';
        event.target.style.color = "";
        event.target.style.background = "";
    })


    btnSubmit.addEventListener('click', function(event) {

        if(elementos==''){
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

function enableButton(){
    for(let i = 0; i < validar.lenght; i++){
        if(array[i] =='true'){

        }

    }

    if(elementos.value==''){
        btnSubmit.setAttribute("disabled","true");
    } else {
        btnSubmit.setAttribute("disabled","false");
    }
}