export default function validation(input) {

    const error = {}
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = RegExp("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email valido";
    }
    if(!input.email) {
        error.email =  "Debe ingresar un email"
    }
    if(input.email > 31) {
        error.email = "Email no mayor a 31 caracteres);
    }    

    if(!regexPassword.test(input.password)) {
        error.password = "Debe contener al menos un numero";
    }
    if(!input.password.length < 6 || input.password.length > 10) {
        error.password = "Contraseña de contener entre 6 y 10 caracteres"
    }

    return error;
}