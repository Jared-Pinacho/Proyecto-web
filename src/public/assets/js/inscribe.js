
const $formulario = document.getElementById("tutorado-registro");


$formulario.addEventListener("submit",async (event) => {
    event.preventDefault();
  let $nombre = document.getElementById("nombre").value;
  let $edad = parseInt(document.getElementById("edad").value);
  let $sexo = true;
  let $password = 5;
  let a = 5;
 
  let tutor={ idTutor: $password, nombre: $nombre, edad:$edad, sexo: $sexo, aciertos:a }


  
  let tutorJson = JSON.stringify(tutor);

  //console.log(tutorJson)

  const datos = {
    idTutor: $password, nombre: $nombre, edad:$edad, sexo: $sexo, aciertos:a
  };
  const respuestaRaw = await fetch("http://localhost:4000/tutorados", {
    body: JSON.stringify(datos), // <-- Aquí van los datos
    headers: {
      "Content-Type": "application/json", // <-- Importante el encabezado
    },
    method: "POST",
  });
  
  const jsonDecodificado = await respuestaRaw.json();
  console.log(jsonDecodificado);

})
