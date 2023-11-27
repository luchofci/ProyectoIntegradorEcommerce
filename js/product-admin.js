const productTableBody = document.getElementById('product-table-body');
const productDataForm = document.getElementById('product-data-form');
const productDataFormSubmitBtn = document.getElementById('product-data-form-submit-btn')
const titulo = document.querySelector("h1")
//variable global que viene de main
let filteredProducts = products;

function pintarTablaDeProductos() {
    let insertHTML = "";

    for (let i = 0; i < filteredProducts.length; i++) {
        const product = filteredProducts[i];
        let auxHTML = `
        <tr>
            <td>
                <img class="table-product-img" src="${product.imageUrl}" alt="Imagen de Producto">
            </td>
            <td>${product.id}</td>
            <td>${product.title1}</td>
            <td>${product.description1}</td>   
            <td>${product.title2}</td>
            <td>${product.description2}</td>
            <td>${product.price}</td>
            <td>${product.detais}</td>
            <td>${productsCategories[product.category]}</td>
            <td>${product.order}</td>
            <td>${product.active}</td>
            <td>
                <button class="action-btn btn-danger" 
                        title="Borrar Producto"onclick="onClickDeleteProduct('${product.id}', '${product.title1}')"><i class="fa-solid fa-trash-can"></i></button>
                <button class="action-btn" 
                        title="Editar producto"
                        onclick="onClickEditProduct('${product.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>`;

        insertHTML += auxHTML
    }
    productTableBody.innerHTML = insertHTML;
}

// pintarTablaDeProductos();

function onClickEditProduct(productId){
    const selectedProduct = filteredProducts.find(element => element.id === productId);

    if ( selectedProduct === undefined){
        swal.fire('Error', 'No se pudo editar el producto', 'error')
        return
    };

    const el = productDataForm.elements; 

    el.productId.value = selectedProduct.id;
    el.image.value = selectedProduct.imageUrl;
    el.inputNameFront.value = selectedProduct.title1;
    el.frontDescription.value = selectedProduct.description1;
    el.inputNameBack.value = selectedProduct.title2;
    el.backDescription.value = selectedProduct.description2;
    el.precio.value = selectedProduct.price;
    el.detalles.value = selectedProduct.detais;
    el.categoria.value = selectedProduct.category;
    el.numeroOrden.value = selectedProduct.order;
    el.stock.value = selectedProduct.active;

    productDataFormSubmitBtn.classList.add('btn-edit');
    titulo.scrollIntoView({ behavior: 'smooth' })
    productDataFormSubmitBtn.innerText = 'Editar producto';

};

function submitProductDataForm(evt){
    evt.preventDefault()

    const el = evt.target.elements;

    const imageUrl = el.image.value;
    const id = el.productId.value;
    const title1 = el.inputNameFront.value;
    const description1 = el.frontDescription.value;
    const title2 = el.inputNameBack.value;
    const description2 =  el.backDescription.value;
    const price =  el.precio.value;
    const detais = el.detalles.value;
    const category =  el.categoria.value;
    const order =   el.numeroOrden.value;
    const active = el.stock.value;


    let product = {
        id: id || crypto.randomUUID(),
        title1,
        description1,
        title2,
        description2,
        price,
        detais,
        imageUrl,
        category,
        order,
        active: active || true,
    };

    if(!id){
        filteredProducts.push(product);
        Swal.fire({
            title: 'Producto Creado',
            text: 'El producto fue creado correctamente',
            icon: 'success',
            timer: 1500
        })
    }else{
        const indice = filteredProducts.findIndex(producto =>{
            if(producto.id === id){
                return true
            }
        })

        filteredProducts[indice] = product;

        Swal.fire({
            title: 'Producto Editado',
            text: 'Los datos del producto fueron actualizados correctamente',
            icon: 'success',
            timer: 1500
        })
    }
    actualizarLocalStorage(filteredProducts);

    productDataForm.reset();
    pintarTablaDeProductos();
};

function onClickDeleteProduct(productId, title1){
    Swal.fire({
        title: `Esta seguro que quiere borrar el producto ${title1}` ,
        showDenyButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: `Cancelar`
    }).then((result) =>{
        if (result.isConfirmed) {
            Swal.fire("Producto Borrado", "", "success");
            const remainedProducts = filteredProducts.filter( element => element.id !== productId);
            filteredProducts = remainedProducts;

            actualizarLocalStorage(filteredProducts);
            pintarTablaDeProductos();
            
            
        }
    })
}

function actualizarLocalStorage(productArray) {
    localStorage.setItem("productList", JSON.stringify(productArray))
};

function init() {
    pintarTablaDeProductos();
};

init();