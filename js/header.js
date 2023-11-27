// En cualquiera de las páginas se deberá observar el header, en este deberán renderizarse el botón de login o logout según 
// corresponda.
// - Además (lugar a elección) se deberá pintar los botones de acceso a las páginas de ADMIN USERS, ADMIN PRODUCTS si el 
// usuario posee un rol de Administrador.
// - Debe haber un usuario con role admin:
// ▪ admin@admin.com
// ▪ admin

/*-------------------- FUNCTIONS --------------------*/


const headerNavList = document.querySelector(".nav-list");
const userInfoHeader = document.getElementById('header-user');


const loguedUser = JSON.parse(localStorage.getItem("currentUser"));

if(loguedUser){
    if(loguedUser.role === 'ADMIN_ROLE'){

        const adminUserLink = document.createElement("a");

        adminUserLink.href = '/pages/admin/user-admin.html';
        adminUserLink.innerText ='Admin Usuarios';
        adminUserLink.classList.add('nav-link');


        const adminUserLi = document.createElement("li");
        adminUserLi.classList.add('nav-item');

        adminUserLi.appendChild(adminUserLink);

        headerNavList.appendChild(adminUserLi);

        
        const productAdminLink = document.createElement("a");

        productAdminLink.href = '/pages/admin/product-admin.html';
        productAdminLink.innerText = 'Admin Productos';
        productAdminLink.classList.add('nav-link')

        const productAdminLi = document.createElement("li");
        productAdminLi.classList.add('nav-item');

        productAdminLi.appendChild(productAdminLink);

        headerNavList.appendChild(productAdminLi);
        

    }

    const userDataHTML = userInfoHeader.querySelector('.user-data');

    
    const userImg = document.createElement('img');
    
    userImg.src = loguedUser.image;
    userImg.alt = "User Image";
    userImg.classList.add('user-profile-picture');
    
    userDataHTML.appendChild(userImg);
    
    const userName =  document.createElement('span');
    
    userName.classList.add('user-profile-name')
    userName.innerText = loguedUser.fullName;
    
    userDataHTML.appendChild(userName);

    const userActionHTML = userInfoHeader.querySelector('.user-action');

    const logoutButton = document.createElement('button');

    logoutButton.classList.add('nav-logout-button');
    // logoutButton.classList.add('nav-link');
    // logoutButton.classList.add('nav-item');
    logoutButton.innerText = 'Salir';

    userActionHTML.onclick = function(){
        localStorage.removeItem('currentUser');
        window.location.href = '../../index.html';
    };

    userActionHTML.appendChild(logoutButton);




}else{

    const userActionHTML = userInfoHeader.querySelector('.user-action');

    const loginLink = document.createElement("a");
    loginLink.href = '/pages/login/login.html';
    loginLink.innerText = 'Ingresar';
    loginLink.classList.add('nav-login-button');

    userActionHTML.appendChild(loginLink);

}









/*-------------------- END FUNCTIONS --------------------*/




