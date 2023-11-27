/*-------------------- VARIABLES --------------------*/




/*-------------------- END VARIABLES --------------------*/


/*-------------------- FUNCTIONS -----------------------*/


function submintLoginForm(evt){
    evt.preventDefault()
    const el = evt.target.elements;
    const email = el.inputEmail.value;
    const password = el.inputPassword.value;



    // const userMach = users.find( element => element.email === email)
    //este codigo dre arriba es lo mismo que abajo.
    const userMach = users.find( element => {
        if ( element.email === email){
            return true
        }
        return false
    }) 
    
    if ( !userMach){
        Swal.fire({
            title: 'ERROR',
            text: 'El usuario NO existe',
            icon: 'error',
            timer: 2000
        })
        return false
    }
    if( password !== userMach.password){
        Swal.fire({
            title: 'ERROR',
            text: 'El password es incorrecto',
            icon: 'error',
            timer: 2000
        })
        return false
    }
    let currentUser = userMach

    localStorage.setItem("currentUser", JSON.stringify(currentUser))

    window.location.href = "../../index.html";

}


function init(){
    //chequeamos si ya estamos logeados, si lo estamos redireccionamos al home.-
    if ( currentUser) {
        window.location.href = "../../index.html";

    }
}





/*-------------------- END FUNCTIONS --------------------*/
init()