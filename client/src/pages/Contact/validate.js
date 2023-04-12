function validate(input) {
    let error = {}

    if (!input.user_name) {
        error.user_name = "El nombre es requerido"
    }
    else if (!/^[A-Za-z\s]+$/g.test(input.user_name)) {
        error.user_name = "El nombre es invalido"

    }
    else if (!input.user_email) {
        error.user_email = "El email es requerido"
    }
    else if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.user_email)) {
        error.user_email = "El email es invalido"
    }
    else if (!input.message) {
        error.message = "El mensaje es requerido"
    }
    return error



}

export default validate;