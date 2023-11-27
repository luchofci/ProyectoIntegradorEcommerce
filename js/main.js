const productsCategories = {
    productosSecos: "Alimento Seco para Gatos",
    productosHumedos: "Alimento humedo para Gatos",
}

//Aqui estan los usuarios iniciales
const usersSeed = [{
    id: crypto.randomUUID(),
    fullName:"admin",
    email: "admin@admin.com",
    password: 'admin',
    bornDate: new Date('1989-02-23').getTime(),
    location: "buenos_aires",
    observation: "Yolo",
    active: true,
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
    role: 'ADMIN_ROLE'
},
{
    id: crypto.randomUUID(),
    fullName:"test",
    email: "test@test.com",
    password: 'test',
    bornDate: new Date('2000-01-01').getTime(),
    location: "chaco",
    observation: "Yolo",
    active: true,
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
    role: 'CLIENT_ROLE'
},
{
    id: crypto.randomUUID(),
    fullName:'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'alice123',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'formosa',
    observation: "Yolo",
    active: true,
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325',
    role: 'CLIENT_ROLE'
},
{
    id: crypto.randomUUID(),
    fullName:'Michael Smith',
    email: 'michael.smith@example.com',
    password: 'michael123',
    bornDate: new Date('1983-04-10').getTime(),
    location: 'san_luis',
    observation: "Yolo",
    active: true,
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280',
    role: 'CLIENT_ROLE'
},
{
    id: crypto.randomUUID(),
    fullName:'Emily Johnson',
    email: 'emily.johnson@example.com',
    password: 'emily123',
    bornDate: new Date('1995-02-15').getTime(),
    location:  'capital_federal',
    observation: "Yolo",
    active: false,
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325',
    role: 'CLIENT_ROLE'
},
];


//Aqui estan los productos iniciales
const productsSeed = [
    {
    id: crypto.randomUUID(),
    title1: "Mother & Babycat",
    description1: "Alimento seco para gatitos en su primera etapa de crecimiento (de 1 a 4 meses de edad) y durante el período de destete. Tambien indicado para gatas gestantes o en período de lactancia.",
    title2: "Especial para facilitar el destete",
    description2: "Entre las 4 y las 12 semanas después del nacimiento, la inmunidad proporcionada de forma natural por el calostro de la madre disminuye progresivamente. Mother & Babycat ayuda a reforzar las defensas naturales del gatito en su primera etapa de crecimiento, gracias a un exclusivo complejo de antioxidantes, que incluye vitamina E.",
    price: 6900,
    detais: "De 1 a 4 meses de edad",
    // imageUrl: "/assets/images/products/Royal Canin Mother & baby cat.png",
    imageUrl: "https://github.com/luchofci/ProyectoIntegradorEcommerce/blob/main/assets/images/products/Royal%20Canin%20Mother%20&%20baby%20cat.png?raw=true",
    category: "productosSecos",
    order: 0,
    active: 5
},
{
    id: crypto.randomUUID(),
    title1: "Kitten",
    description1: "Alimento para gatos, especial para gatitos en su segunda etapa de crecimiento. Desde los 4 hasta los 12 meses de edad. Royal Canin Kitten brinda una tolerancia digestiva reforzada, ayuda a reforzar el sistema inmunológico del gatito y contribuye a un crecimiento saludable.",
    title2: "Crecimiento saludable",
    description2: "Royal Canin Kitten brinda una tolerancia digestiva reforzada, ayuda a reforzar el sistema inmunológico del gatito y contribuye a un crecimiento saludable. <br> Durante este período clave, el sistema inmunológico del gatito se desarrolla progresivamente. Kitten ayuda a reforzar las defensas naturales del gatito en su segunda etapa de crecimiento, gracias en particular a un complejo patentado de antioxidantes, que incluye vitamina E.",
    price: 7500,
    detais: "De 4 a 12 meses de edad",
    imageUrl: "/assets/images/products/Royal Canin Kitten.png",
    category: "productosSecos",
    order: 1,
    active: 3
},
{
    id: crypto.randomUUID(),
    title1: "Kitten Humedo",
    description1: "Royal Canin Alimento Húmedo para Gato Kitten especialmente para gatitos durante la segunda etapa de crecimiento hasta los 12 meses de edad.",
    title2: "Textura suave para los dientes de leche",
    description2: "Trocitos de tamaño, textura y sabor óptimos para gatitos en    crecimiento.<br> Ayuda al desarrollo del sistema inmunitario saludable del gatito con un complejo científicamente probado que incluye vitaminas E y C. <br> Enriquecido con ácidos grasos omega-3 (DHA), para ayudar al desarrollo saludable del cerebro del gatito y ayudar a promover una visión saludable.",
    price: 1500,
    detais: "De 4 a 12 meses de edad",
    imageUrl: "/assets/images//products/Royal Canin Kitten humedo.png",
    category: "productosHumedos",
    order: 2,
    active: 3
},
{
    id: crypto.randomUUID(),
    title1: "Indoor",
    description1: "Alimento para gatos adultos que viven en el interior del hogar - A partir del año de edad.",
    title2:"Calorías moderadas",
    description2: "Un tenor moderado de grasa ayuda a mantener un peso saludable, adaptado a las necesidades de los gatos con niveles bajos de actividad que viven en el interior del hogar. <br> La falta de ejercicio puede conducir a un tránsito intestinal más lento, y dar lugar a una mala calidad de heces muy olorosas. Indoor contiene proteínas de alta digestibilidad (L.I.P.*) para ayudar a reducir la cantidad y el olor fecal. Indoor ayuda a estimular el tránsito intestinal y a eliminar los pelos ingeridos, gracias a fibras específicas.",
    price: 8900,
    detais: "Desde 1 año de edad",
    imageUrl: "/assets/images/products/Royal Canin Indoor.png",
    category: "productosSecos",
    order: 3,
    active: 6
},
{
    id: crypto.randomUUID(),
    title1: "Indoor 7+",
    description1: "Alimento para gatos maduros que viven en el interior del hogar - A partir de los 7 años de edad. Royal Canin Indoor 7+ contribuye a un envejecimiento saludable y al mantenimiento de la función renal, y ayuda a reducir el olor y la cantidad de las heces.",
    title2: "Complejo vitalidad",
    description2: "Para ayudar a los gatos frente a los primeros signos del envejecimiento y mantener la vitalidad después de los 7 años. Indoor 7+ está formulado con un adecuado balance de vitaminas y minerales. Su fórmula está enriquecida con nutrientes que contribuyen al envejecimiento saludable. <br>  Una disminución de la función renal es común en los gatos después de los 7 años de edad. Indoor 7+ contiene un aporte adaptado de fósforo para contribuir al mantenimiento de la función renal.",
    price: 6890,
    detais: "A partir de los 7 años de edad",
    imageUrl: "/assets/images/products/Royal Canin Indoor+7.png",
    category: "productosSecos",
    order: 4,
    active: 8
},
{
    id: crypto.randomUUID(),
    title1: "Instinctive 7+",
    description1: "Alimento húmedo en finas láminas en salsa para satisfacer las  necesidades de los gatos adultos a partir de 7 años de edad.",
    title2: "Peso ideal",
    description2: "Formulado para responder al Perfil Macro Nutricional Óptimo preferido instintivamente por los gatos adultos. <br> Especialmente desarrollado para una palatabilidad excepcional y moderado en energía.",
    price: 2950,
    detais: "A partir de los 7 años de edad",
    imageUrl: "/assets/images//products/Royal Canin Instinctive 7+.png",
    category: "productosHumedos",
    order: 5,
    active: 2
},
{
    id: crypto.randomUUID(),
    title1: "Siamese Adult",
    description1: "Alimento especialmente formulado para gatos adultos de raza Siamés a partir de los 12 meses de edad. Royal Canin Siamese Adult facilita la prensión y masticación, promueve una buena salud digestiva, contribuye a mantener una piel saludable y pelaje brillante, y ayuda a preservar la silueta esbelta y musculosa del gato Siamés.",
    title2: "Mandíbula especial del Siamés",
    description2: "Esta croqueta, especialmente desarrollada en forma de tubo, facilita su prensión y estimula la masticación, contribuyendo a disminuir la velocidad de ingesta de alimento. Contiene una combinación de nutrientes específicos, incluyendo aminoácidos, vitaminas y ácidos grasos omega 3 y 6, que ayudan a mantener una piel saludable y pelaje brillante. Los altos niveles de proteínas (38%) y una cantidad moderada de grasas (16%) contribuyen a preservar la silueta esbelta y musculosa del gato Siamés. Fórmula enriquecida con L-carnitina. Contiene proteínas de alta digestibilidad (L.I.P.) y prebióticos que ayudan a promover una flora intestinal balanceada para una buena salud digestiva.",
    price: 7800,
    detais: "A partir de los 12 meses de edad",
    imageUrl: "/assets/images//products/Royal Canin Siames.png",
    category: "productosSecos",
    order: 6,
    active: 4
},
{
    id: crypto.randomUUID(),
    title1: "Persian Adult",
    description1: "Alimento especialmente formulado para gatos adultos de raza Persa - A partir de los 12 meses de edad. Royal Canin Persian Adult contribuye estimulando el tránsito intestinal, disminuyendo la formación de bolas de pelo y promoviendo la salud de la piel y belleza del pelaje.",
    title2: "Salud del pelaje largo",
    description2: "Un exclusivo complejo de nutrientes que contribuye al mantenimiento de la barrera cutánea, la salud de la piel y la belleza del pelaje. Fórmula enriquecida con ácidos grasos Omega 3 y Omega 6. Una combinación de fibras específicas que ayuda naturalmente a estimular el tránsito intestinal y a reducir la formación de bolas de pelo. Formulado con proteínas de alta digestibilidad (L.I.P), un óptimo contenido de fibras y prebióticos que ayudan a promover una flora intestinal balanceada dando soporte a la salud digestiva.",
    price: 11999,
    detais: "A partir de los 12 meses de edad",
    imageUrl: "/assets/images/products/Royal Canin Persian.png",
    category: "productosSecos",
    order: 7,
    active: 468
},
]


//Verificar si hay datyos en el LocalStorage (base de datos).
//Si no hay agregarlos.
if( localStorage.getItem("userList") === null){
    localStorage.setItem("userList", JSON.stringify(usersSeed));
    
}

if( localStorage.getItem("productList") === null){
localStorage.setItem("productList", JSON.stringify(productsSeed));
}

if(localStorage.getItem("currentUser") === null){
localStorage.setItem("currentUser", JSON.stringify(null));
}

//Obtener Lo0s d atos del LocalStorage y guardarlos en variables global.
let users = localStorage.getItem("userList");
let products = localStorage.getItem("productList");
currentUser = localStorage.getItem("currentUser");

//converti en obj.(Como me los traigo en string, los convierto en obj)
users = JSON.parse(users);
products = JSON.parse(products);
currentUser = JSON.parse(currentUser)



