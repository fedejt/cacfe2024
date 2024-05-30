function validarFormulario(e) {
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;
    let perro = document.getElementById('perro').checked;
    let gato = document.getElementById('gato').checked;
    let otra =document.getElementById('otra').checked;
    
    if(nombre.length < 1){
        alert('El campo nombre no puede estar vacío');
        return false;
    }

    if(email.length < 1){
        alert('El campo email no puede estar vacío');
        return false;
    }

    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) == null){
        alert('El email ingresado no es válido');
        return false;
    }
    
    if (telefono.length > 0 && telefono.match(/^[0-9]+$/) == null){
        alert('El teléfono ingresado no es válido');
        return false;
    }

    if (!perro && !gato && !otra){
        alert('Debe seleccionar al menos una opción para mascota');
        return false;
    }

    if(mensaje.length < 1){
        alert('El campo mensaje no puede estar vacío');
        return false;
    }

    document.getElementById("formulario-contacto").submit();
    return true;
}