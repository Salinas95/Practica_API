

/************************** PIXABAY **************************/
const contenido4=document.getElementById("contenido4");
const galeria=document.getElementById("galeria");
const img=document.getElementById("img");


const mostrarPixabay=(imagenes)=>{
    for(imagen of imagenes.hits){
        //console.log("hola");
        console.log(imagen);

        /* const hola=document.createElement("div");
        hola.className+="article__contenido4"; */

        const img=document.createElement("img");
        img.className+="contenido4__img";
        img.src=imagen.webformatURL;
        galeria.append(img);
    } 
}

const buscarPixabay=()=>{
    fetch("https://pixabay.com/api/?key=20164793-b3f95408f84ff41044484cc56&q=new+york&image_type=photo")
        .then(imagenes => imagenes.json())
        .then(imagenes => mostrarPixabay(imagenes))
}

document.addEventListener("DOMContentLoaded",buscarPixabay);
/************************** PIXABAY **************************/










