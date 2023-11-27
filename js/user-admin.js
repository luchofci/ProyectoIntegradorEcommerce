const userTableBody = document.getElementById('user-table-body');
const userDataForm = document.getElementById('user-data-form');
const userDataFormSubmitBtn = document.getElementById('user-data-form-submit-btn')
//variable global que viene de main
let users = JSON.parse(localStorage.getItem("userList"));

function pintarTablaDeUsuarios() {
    let insertHTML = "";

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let auxHTML = `
        <tr>
            <td>
                <img class="table-user-img" src="${user.image}" alt="">
            </td>
            <td>${user.fullName}</td>
            <td>${user.email}</td>   
            <td>${user.role.replace('_ROLE', '')}</td>
            <td>${user.active}</td>
            <td>
                <button class="action-btn btn-danger" 
                        title="Borrar Producto"onclick="onClickDeleteUser('${user.id}', '${user.fullName}')"><i class="fa-solid fa-trash-can"></i></button>
                <button class="action-btn" 
                        title="Editar usuario"
                        onclick="onClickEditUser('${user.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>`;

        insertHTML += auxHTML
    }
    userTableBody.innerHTML = insertHTML;
}


/*ACA TENEMOS 3 FUNCIONES IGUALES PERO DESDE LA MAS LARGA A LA MAS CORTA EN FUNCION DE FLECHA.
NUMERO 1
// function onClickEditUser(userId){
//     const selectedUser = users.find( function lala(element)  {
//         if(element.id === userId){
//             return true;
//         }
//     })
//     console.log("el usuario a editar es ", selectedUser)
// }

NUMERO 2
// function onClickEditUser(userId){
//     const selectedUser = users.find((element)=> {
//         if(element.id === userId){
//             return true;
//         }
//     })
//     console.log("el usuario a editar es ", selectedUser)
// }
NUMERO 3
*/
function onClickEditUser(userId) {
    const selectedUser = users.find(element => element.id === userId);

    if (selectedUser === undefined) {
        swal.fire('Error', 'No se pudo editar el usuario', 'error')
        return
    };

    const el = userDataForm.elements;

    el.userRole.value = selectedUser.role;
    el.userActive.value = selectedUser.active;
    el.userId.value = selectedUser.id;
    el.inputName.value = selectedUser.fullName;
    el.inputCorreo.value = selectedUser.email;
    el.inputPassword.value = selectedUser.password;
    el.inputPassword.disabled = true;
    el.inputPassword2.value = selectedUser.password;
    el.inputPassword2.disabled = true;
    el.inputDate.value = formatInputDate(selectedUser.bornDate);
    el.inputPais.value = selectedUser.location;
    el.observation.value = selectedUser.observation;
    el.image.value = selectedUser.image;

    userDataFormSubmitBtn.classList.add('btn-edit');
    userDataFormSubmitBtn.innerText = 'Editar usuario';

};


function submitUserDataForm(evt) {
    evt.preventDefault()
//Obtener los datos del formulario
    const el = evt.target.elements;
    
    const role = el.userRole.value;
    const active = el.userActive.value;
    const id = el.userId.value;
    const fullName = el.inputName.value;
    const email = el.inputCorreo.value;
    const password = el.inputPassword.value;
    const password2 = el.inputPassword2.value;
    const bornDate = el.inputDate.value;
    const location = el.inputPais.value;
    const observation = el.observation.value;
    const image = el.image.value;
//Verificar que los password sean iguales.

    if( !id && password !== password2){
        Swal.fire({
            title: 'ERROR',
            text: 'Los passwords no coinciden',
            icon: 'error',
            timer: 1500
        })
        return false
    }

    const userWithExistentEmail = users.find((user) => {
        if (user.email === email) {
            return true;
        }
    })

    
    if (userWithExistentEmail && id !== userWithExistentEmail.id) {
        Swal.fire({
            title: 'ERROR',
            text: 'El email ingresado ya existe',
            icon: 'error',
            timer: 1500
        })
        return false
    };

    let user = {
        id: id || crypto.randomUUID(),
        fullName,
        email,
        password,
        bornDate: new Date(bornDate).getTime(),
        location,
        observation,
        active: active || true,
        role: role || "CLIENT_ROLE",
        image,
        
    };

    if(!id){
        users.push(user);
        Swal.fire({
            title: 'Usuario Creado',
            text: 'El usuario fue creado correctamente',
            icon: 'success',
            timer: 1500
        })
    }else{
        const indice = users.findIndex(usuario => {
            if (usuario.id === id) {
                return true
            }
        })
        //reemplazo el usuario en los datos nuevos del formulario
        users[indice] = user;

        Swal.fire({
            title: 'Usuario Editado',
            text: 'Los datos del usuario fueron actualizados correctamente',
            icon: 'success',
            timer: 1500
        })
    }

    actualizarLocalStorage(users);

    userDataForm.reset();
    el.inputPassword.disabled = false;
    el.inputPassword2.disabled = false;
    userDataFormSubmitBtn.classList.remove('btn-edit');
    userDataFormSubmitBtn.innerText = 'Registrarse';
    pintarTablaDeUsuarios();
}



function onClickDeleteUser(userId, fullName) {
    Swal.fire({
        title: `Esta seguro que quiere borrar el usuario ${fullName}` ,
        showDenyButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: `Cancelar`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Usuario Borrado", "", "success");
            const remainedUsers = users.filter(element => element.id !== userId);
            users = remainedUsers;
            
            actualizarLocalStorage(users);
            pintarTablaDeUsuarios()
        } 
    });
};
function actualizarLocalStorage(usersArray) {
    localStorage.setItem("userList", JSON.stringify(usersArray))
};

function init() {
    pintarTablaDeUsuarios();
};

init();