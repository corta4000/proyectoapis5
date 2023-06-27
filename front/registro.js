// Obtener referencia al formulario de registro
const registrationForm = document.getElementById('registration-form');

// Agregar un event listener para el envío del formulario
registrationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario

  // Abrir una nueva pestaña con la página de registro
  window.open('login.html', '_blank');
});

class Registrate {
    constructor(){
        /*
        Se instancia el formualario del lado del JS para que accione al momento
        del submit (evento del formulario)
        */
        const formRegistro = document.querySelector('#registration-form');
        this._registrar = this._registrar.bind(this);
        formRegistro.addEventListener('submit', this._registrar);  
        console.log('form: ' + formRegistro);  
    }

    _registrar(event) {
        event.preventDefault();

        console.log('values')

        //Instancio los input para luego obtener sus valores
        const inputName = document.querySelector('#name');
        console.log('name' + inputName.value)
        const inputMail = document.querySelector('#mail');
        console.log('mail' + inputMail.value)
        const inputPassword = document.querySelector('#password');
        console.log('password' + inputPassword.value)


        this.signup({
            name : inputName.value,
            mail : inputMail.value,
            password : inputPassword.value
        })
        .then(result => {
            //Promesa hacer algo una vez obtenido el resuldao del servidor
            
        });
                
    }

    //Metodo para hacer el fetch al server.
    signup(postBody) {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody)
        };
        
        return fetch('registro', fetchOptions);

    }

}

const registrare = new Registrate();
