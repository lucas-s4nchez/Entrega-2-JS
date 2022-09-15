const h2 = document.getElementById("nombre");
const h4 = document.getElementById("precio");
const input = document.querySelector("input");
const btnEnviar = document.getElementById("enviar");
const contenedor = document.getElementById("contenedor");
const pizzas = [
  {
    id: 1,
    nombre: "Mozzarella",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "orégano",
      "aceitunas",
    ],
    precio: 1200,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "albahaca",
      "aceite de oliva",
    ],
    precio: 1400,
  },
  {
    id: 3,
    nombre: "Fugazza",
    ingredientes: ["queso mozzarella", "cebolla", "orégano", "aceitunas"],
    precio: 1400,
  },
  {
    id: 4,
    nombre: "Cuatro Quesos",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "queso gorgonzola",
      "queso fontina",
      "queso parmesano",
    ],
    precio: 1900,
  },
  {
    id: 5,
    nombre: "Especial",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "jamón",
      "huevo",
      "morrones",
      "aceitunas",
    ],
    precio: 1500,
  },
  {
    id: 6,
    nombre: "Rúcula y Jamón",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "jamón crudo",
      "rúcula",
      "aceitunas",
    ],
    precio: 1600,
  },
];
btnEnviar.addEventListener("click", enviarId);

function enviarId(e) {
  e.preventDefault();
  //Al hacer click capturo el valr del inputy lo asigno a pizzaId
  const pizzaId = parseInt(input.value);
  //Si intenta enviar sin poner nada en el input
  if (!pizzaId) {
    mostrarAlerta("Elegí un id valido (desde 1 hasta 6)");
    reset();
    return; // no va a pasar al siguiente codigo hasta que cumpla la condicion
  }
  //Si intenta enviar un numero mayor o menor a los id que tienen las pizzas mi array 'pizzas'
  if (pizzaId <= 0 || pizzaId > pizzas.length) {
    mostrarAlerta("Elegí un id valido (desde 1 hasta 6)");
    reset();
    return; // no va a pasar al siguiente codigo hasta que cumpla la condicion
  }
  //Pasa todas las validaciones y busco la pizza que tenga el id igual al valor del input
  const resultado = pizzas.find((pizza) => pizza.id === pizzaId);
  renderPizza(resultado); //a esa pizza que encontré la muestro en pantalla
}
//Mostrar en pantalla
const renderPizza = (pizza) => {
  const { nombre, precio } = pizza; //Destructuracion del objeto (la pizza que encontré)
  //Inyecto el nombre en el h2
  h2.innerHTML = `<span class= "text-small">Nombre: </span>${nombre}`;
  //Inyecto el precio en el h4
  h4.innerHTML = `<span class= "text-small">Precio: </span>${precio}`;
};

// creo la alerta
const mostrarAlerta = (mensaje) => {
  //Sirve para saber si ya existe una alerta previa
  const existeAlerta = document.querySelector(".m-auto");
  if (!existeAlerta) {
    //si no existe la creo
    const divAlert = document.createElement("div");
    divAlert.classList.add("text-center", "m-auto");
    divAlert.innerHTML = `
    <p class="alert">${mensaje}</p>
    `;
    //La agrego al contenedor (es el div padre de todos algo así como Odín 😜)
    contenedor.appendChild(divAlert);
    //Remuevo la alerta despues de 3 segundos
    setTimeout(() => {
      divAlert.remove();
    }, 3000);
  }
};

//Esto resetea el h2 y h4
const reset = () => {
  h2.innerHTML = "";
  h4.innerHTML = "";
};
