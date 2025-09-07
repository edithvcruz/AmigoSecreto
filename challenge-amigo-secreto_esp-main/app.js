//variables de uso
let listaAmigos=[];
let amigoSorteado;
let nombreAmigo;
let amigoAgregado;

//Función Editar un elemento HTML 
function editElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
    
//Función: Agregar un nuevo Amigo
function agregarAmigo() {
    nombreAmigo=document.getElementById('amigo').value;
    console.log(nombreAmigo);

    //Si campo esta vacio
    if(nombreAmigo===""){
    alert("Agrega el nombre de un amigo");
    }
    //Si campo se agrega un amigo
    else{
        listaAmigos.push(nombreAmigo);

        // Limpiar la lista visual antes de volver a mostrarla
        let listaHTML = document.querySelector("#listaAmigos");
        listaHTML.innerHTML = "";

        // Recorrer la lista actualizada y mostrar todos los amigos
        for (let i = 0; i < listaAmigos.length; i++) {
            let amigoAgregado = document.createElement("li");
            amigoAgregado.textContent = listaAmigos[i];
            listaHTML.appendChild(amigoAgregado);
        }


        console.log(listaAmigos);
        limpiarCaja();

    }
}





        

function sortearAmigo(){
    amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    editElemento("#resultado", `El amigo Secreto es: ${amigoSorteado}`)
    editElemento("#listaAmigos", "")

}


//Limpiar caja para facilitar acceso
function limpiarCaja(){
   document.querySelector('#amigo').value='';
}
