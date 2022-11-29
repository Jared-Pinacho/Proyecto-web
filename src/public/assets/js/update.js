const $formulario = document.getElementById("tutor-registro");


$formulario.addEventListener("submit",async (event) => {
    event.preventDefault();
  let $nombre = document.getElementById("nombreR").value;
  let $edad = document.getElementById("edad").value;
  let $sexo = document.getElementById("sexo").value;
 
  let tutorado={ nombre: $nombre, edad:$edad, sexo: $sexo}

  let tutoradoJson = JSON.stringify(tutorado);

  //console.log(tutorJson)

  const datos = {
    nombre: $nombre, email:$email, username: $username, password: $password
  };
  
  const respuestaRaw = await fetch("http://localhost:4000/tutores", {
    body: JSON.stringify(datos), // <-- Aquí van los datos
    headers: {
      "Content-Type": "application/json", // <-- Importante el encabezado
    },
    method: "POST",
  });
  
  const jsonDecodificado = await respuestaRaw.json();
  console.log(jsonDecodificado);

})
