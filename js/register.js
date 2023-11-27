/*-------------------- FUNCTIONS -----------------------*/

function submitUserRegisterForm(evt) {
    evt.preventDefault()
//Obtener los datos del formulario
    const el = evt.target.elements;
    
    const fullName = el.inputName.value;
    const email = el.inputCorreo.value;
    const password = el.inputPassword.value;
    const password2 = el.inputPassword2.value;
    const bornDate = el.inputDate.value;
    const location = el.inputPais.value;
    const observation = el.observacion.value;
//Verificar que los password sean iguales.

    if( password !== password2){
        Swal.fire({
            title: 'ERROR',
            text: 'Los passwords no coinciden',
            icon: 'error',
            timer: 1500
        })
        return false
    }

    if( users.find( (element) => element.email === email) ){
        Swal.fire({
            title: 'ERROR',
            text: 'El email ingresado ya existe',
            icon: 'error',
            timer: 1500
        })
        return false
    }

    let user = {
        id: crypto.randomUUID(),
        fullName,
        email,
        password,
        bornDate: new Date(bornDate).getTime(),
        location,
        observation,
        active: true,
        role: 'CLIENT_ROLE'
    }

    users.push(user);

    localStorage.setItem("userList", JSON.stringify(users))
    const userForm = document.getElementById("user-register-form")
    userForm.reset();

    Swal.fire({
        title: 'Usuario Creado',
        text: 'Se ha registrado el usuario correctamente',
        icon: 'success',
        timer: 1500
    })
}





















/*-------------------- ENDFUNCTIONS --------------------*/
