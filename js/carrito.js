let totalCarrito = 0; 
let tbody = document.querySelector("#lCarrito")   
    let carrito = JSON.parse(localStorage.getItem("listaCarrito"))
    for (let a of carrito) {
        let contenedor = document.createElement("tr"); 
        contenedor.innerHTML = `
        <th scope="row">${a.id}</th>
        <td>${a.nombre}</td>
        <td>\$${a.precio}</td>
        `
        tbody.appendChild(contenedor)
        span.textContent = carrito.length;
        totalCarrito += a.precio
    };
    
    document.querySelector("#totalCarrito").innerText="$" + totalCarrito; 

function mostrarCarrito () {
};
    
let eliminarCarrito = document.querySelector(".imagenDelete")

if (eliminarCarrito.addEventListener("click", () => {
    localStorage.removeItem("listaCarrito");
}));



    




