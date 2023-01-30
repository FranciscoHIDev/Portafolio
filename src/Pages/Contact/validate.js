function validate(input) {
    let error = {}

    if (!input.name) {
        error.name = "El nombre es requerido"
    }
    else if (!/^[A-Za-z\s]+$/g.test(input.name)) {
        error.name = "El nombre es invalido"

    }
    else if (!input.email) {
        error.email = "El email es requerido"
    }
    else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email)) {
        error.email = "El email es invalido"
    }   
    else if (!input.messaje) {
        error.messaje = "El mensaje es requerido"
    }
    return error



}

export default validate;