const inputNombreCiudad = document.getElementById ("inputNombreCiudad");

const consultarClima = async () => {

    const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputNombreCiudad.value}&appid=616629f9acdc3b22b8b09553e632e5da`)
    const datos = await respuesta.json()
    console.log(datos);



    console.log("obteniendo clima");
    console.log(inputNombreCiudad.value);
};