document.addEventListener('DOMContentLoaded', function (event) {

    const btnSubmit = document.getElementById('btnEnviar');

    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let direccion = document.getElementById('direccion');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');
    let edad = document.getElementById('edad');
    let dni = document.getElementById('dni');
    let elementos = document.getElementsByTagName('input');

    nombre.addEventListener("blur", function (event) {

        if(nombre.value === ''){
            nombre.value='';
            nombre.placeholder='Este campo no puede estar vacío.';
            event.target.style.color = "white";
            event.target.style.background = "red";
            return;
        }

        nombre.value = nombre.value.toUpperCase();
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
    })

    edad.addEventListener("blur", function(event){

        if (Number(edad.value) < 0 || Number(edad.value) > 120){
            edad.value = '';
            edad.placeholder = 'Introduzca una edad válida.';
            event.target.style.background = "red";
            event.target.style.color = "white";
            return;
        }
    })

    dni.addEventListener("blur", function(event) {
        if (!validarDni(dni.value)) {
            dni.value = '';
            dni.placeholder = 'Introduzca un DNI valido. El DNI debe contener 8 dígitos y una letra';
            event.target.style.background = "red";
            return;
        }
    })

    btnSubmit.addEventListener('click', function(event) {
        if(!input==empty){
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