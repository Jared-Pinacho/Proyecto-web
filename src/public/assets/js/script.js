
const $formulario = document.getElementById("tutor-registro");


$formulario.addEventListener("submit",async (event) => {
    event.preventDefault();
  let $nombre = document.getElementById("nombreR").value;
  let $email = document.getElementById("ema").value;
  let $username = document.getElementById("usernameR").value;
  let $password = document.getElementById("passwordR").value;
  let tutor={ nombre: $nombre, email:$email, username: $username, password: $password}

  let tutorJson = JSON.stringify(tutor);

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




