/*-------------------- VARIABLES --------------------*/

let productosFiltrados = null;
const categoryBox = document.getElementById("select-products-categories");

/*-------------------- END VARIABLES --------------------*/

/*-------------------- FUNCTIONS --------------------*/
function pintarListaProductos() {
    const productsBox = document.getElementById("products-box");
    let contenido = "";
    for (i = 0; i < productosFiltrados.length; i++) {
        const product = productosFiltrados[i];
        contenido += `
            <article class="thecard">
                <div class="thefront">
                    <img class="card-img" src="${product.imageUrl}" alt=""
                        loading="lazy">
                    <div class="card-body">
                        <h2 class="card-title">${product.title1}</h2>
                        <p class="card-description">${product.description1}</p>
                        <div class="card-values">
                            <div class="card-age">${product.detais}</div>
                            <div class="card-price">$${product.price}.-</div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-btn-vm">Ver mas</a>
                        <button class="card-btn-buy">Comprar</button>
                    </footer>
                </div>
                <div class="theback">
                    <div class="card-info">
                        <h3 class="card-info-title">${product.title2}</h3>
                        <p class="card-info-text">${product.description2}</p>
                    </div>
                    <div>
                        <div class="card-values">
                            <div class="card-age">${product.detais}</div>
                            <div class="card-price-back">${product.price}.-</div>
                        </div>
                        <footer class="card-footer">
                            <a href="#" class="card-btn-vm-back">Ver mas</a>
                            <button class="card-btn-buy-back"><a href="">Comprar</a>

                            </button>
                        </footer>
                    </div>
                </div>
            </article>
        `;
    }
    productsBox.innerHTML = contenido
}


function pintarListaSelectCategorias() {
    let contenido = "<option value='All' selected >Todos</option>";
    for (const key in productsCategories) {
        contenido += `
            <option value="${productsCategories[key]}">${productsCategories[key]}</option>
        `;
    }
    categoryBox.innerHTML = contenido
}


function filtrarPorCategoria() {
    const selectedValue = categoryBox.value;
    productosFiltrados = products.filter((product) => {
        if (selectedValue === "All") {
            return true
        }

        if (product.category === selectedValue) {
            return true
        }
        return false
    })

    pintarListaProductos()
}

function filtrarPorNombre(){
    const keyInputBox = document.getElementById("product-keyword")
    const inputValue = keyInputBox.value.toLowerCase();

    productosFiltrados = products.filter((product)=>{
        if ( inputValue === ""){
            return true
        }
        const title = product.title1.toLowerCase();
        if (title.includes(inputValue)){
            return true
        }
        return false

    })

    pintarListaProductos()
}




function init() {
    productosFiltrados = products;
    pintarListaProductos();
    pintarListaSelectCategorias();
}


/*-------------------- END FUNCTIONS --------------------*/



/*-------------------- EVENTOS --------------------*/







/*-------------------- END EVENTOS --------------------*/









init();