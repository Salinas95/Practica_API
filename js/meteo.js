

/************************ METEOROLOGÍA ************************/
const contenido1=document.getElementById("contenido1");
const meteo=document.getElementById("meteo");
const meteoro=document.getElementById("meteoro");


const mostrarMeteo=(meteo)=>{

    //NOMBRE
    const nombre=document.createElement("p");
    nombre.textContent=meteo.location.name+" (E.E.U.U.)";
    meteoro.append(nombre);

    //HORA LOCAL
    const hora=document.createElement("p");
    hora.textContent="Hora local: "+meteo.location.localtime+"h";
    meteoro.append(hora);

    //COORDENADAS
    const coords=document.createElement("p");
    coords.textContent="Coordenadas: "+meteo.location.lat+"º / "+meteo.location.lon+"º";
    meteoro.append(coords);

    //ZONA HORARIA
    const zona=document.createElement("p");
    zona.textContent="Zona Horaria: "+meteo.location.timezone_id;;
    meteoro.append(zona);

    //TIEMPO
    const tiempo=document.createElement("p");
    tiempo.textContent="Tiempo: "+meteo.current.weather_descriptions[0];
    meteoro.append(tiempo);

    //IMAGEN
    for(met of meteo.current.weather_icons){
        //console.log(met);
        const img=document.createElement("img");
        img.src=met;
        meteoro.append(img);
    }

    //TEMPERATURA
    const temperatura=document.createElement("p");
    temperatura.textContent="Temperatura: "+meteo.current.temperature+"ºC";
    meteoro.append(temperatura);

    //HUMEDAD
    const humedad=document.createElement("p");
    humedad.textContent="Humedad: "+meteo.current.humidity+"%";
    meteoro.append(humedad);

    //PRESIÓN
    const presion=document.createElement("p");
    presion.textContent="Presión: "+meteo.current.pressure+"hPa";
    meteoro.append(presion);

    //VISIBILIDAD
    const visibilidad=document.createElement("p");
    visibilidad.textContent="Visibilidad: "+meteo.current.visibility+"%";
    meteoro.append(visibilidad);
}

const buscarMeteo=()=>{
    fetch("http://api.weatherstack.com/forecast?access_key=a395a4a3dc186936c3892eee789e6b03&query=New+York&units=m")
        .then(meteo => meteo.json())
        .then(meteo => mostrarMeteo(meteo))
}

document.addEventListener("DOMContentLoaded",buscarMeteo);
/************************ METEOROLOGÍA ************************/










