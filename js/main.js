/*// const buttonLike = document.getElementById("like")
// const buttonDislike = document.getElementById("dislike")
const h1 = document.querySelector("h1")

let contador = 0

// buttonLike.addEventListener( "click", () => {
//         // console.log("hicieron click")
//         contador++
//         h1.textContent = contador
//         // console.log(contador)
// })
// buttonDislike.addEventListener( "click", () => {
//         // console.log("hicieron click")
//         contador--
//         h1.textContent = contador
//         // console.log(contador)
// })

let contenedor = document.querySelector("#contenedor-principal")
contenedor.addEventListener( "click", event => {
        if(event.target.id == "like"){
                contador++
                // h1.textContent = contador
        }else if(event.target.id == "dislike"){
                contador--
                // h1.textContent = contador
        }
        h1.textContent = contador
        event.stopPropagation()
})

let body = document.querySelector("body")
body.addEventListener("click", event => {
        console.log("click en el body")
})
*/

const listaProductos = [
        {
                precio: 5000,
                title: "Helado",
                imgURL: "https://picsum.photos/200/300"
        },
        {
                precio: 8000,
                title: "Pizza",
                imgURL: "https://picsum.photos/200/300"
        },
        {
                precio: 10000,
                title: "Empanaditas",
                imgURL: "https://picsum.photos/200/300"
        },
        {
                precio: 10000,
                title: "Burrito",
                imgURL: "https://picsum.photos/200/300"
        },
        {
                precio: 17000,
                title: "Perro",
                imgURL: "https://picsum.photos/200/300"
        },
        {
                precio: 20000,
                title: "Hamburguesa",
                imgURL: "https://picsum.photos/200/300"
        }
]

let section = document.querySelector("section")
let carritoDeCompras = []
let contador = document.querySelector("#productos-cantidad")
let sumaTotal = document.querySelector("h5")

document.addEventListener("DOMContentLoaded", () => {
        mostrarProductos()
})


function mostrarProductos() {
        let fragmentoHTML = ""

        listaProductos.map(producto =>{
                fragmentoHTML += `
                <div class="card">
                                <img src=${producto.imgURL} alt="">
                                <h3>${producto.title}</h3>
                                <p>${producto.precio}</p>
                                <button>Agregar</button>
                        </div>
                `
        })

        section.innerHTML = fragmentoHTML
}

section.addEventListener("click", event => {

        if(event.target.tagName == "BUTTON"){
                const producto = event.target.parentElement

                let productObjeto = {
                        title: producto.querySelector("h3").textContent,
                        price:  parseInt(producto.querySelector("p").textContent),
                }
                AgregarCarrito(productObjeto)
        }
        event.stopPropagation()
})

function AgregarCarrito(producto){
        carritoDeCompras.push( producto )
        console.log(carritoDeCompras)
        contador.textContent = carritoDeCompras.length
        calcularTotal()
}

function calcularTotal (){
        let total = carritoDeCompras.reduce((acumulador, current)=> acumulador + current.price, 0)
        sumaTotal.textContent = `TOTAL: $ ${ total}`
}