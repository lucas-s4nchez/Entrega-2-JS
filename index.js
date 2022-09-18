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
  const pizzaId = parseInt(input.value);
  if (!pizzaId) {
    mostrarAlerta("Elegí un id válido (1-6)");
    reset();
    return;
  }
  if (pizzaId <= 0 || pizzaId > pizzas.length) {
    mostrarAlerta("Elegí un id válido (1-6)");
    reset();
    return;
  }
  const resultado = pizzas.find((pizza) => pizza.id === pizzaId);
  renderPizza(resultado);
}
const renderPizza = (pizza) => {
  const { nombre, precio } = pizza;
  h2.innerHTML = `<span class= "text-xl">Nombre: </span>${nombre}`;
  h4.innerHTML = `<span class= "text-xl">Precio: </span>${precio}`;
};

const mostrarAlerta = (mensaje) => {
  const existeAlerta = document.querySelector(".alerta");
  if (existeAlerta) {
    existeAlerta.remove();
  }
  const divAlert = document.createElement("div");
  divAlert.classList.add("text-center", "m-auto", "alerta");
  divAlert.innerHTML = `
    <p class="alert text-small">${mensaje}</p>
    `;
  contenedor.appendChild(divAlert);
  setTimeout(() => {
    divAlert.remove();
  }, 3000);
};
const reset = () => {
  h2.innerHTML = "";
  h4.innerHTML = "";
};
