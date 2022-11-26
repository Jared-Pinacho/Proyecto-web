

const $formulario = document.getElementById("delete");


$formulario.addEventListener("submit",async (event) => {
  
    let idTutorado = $delete.getAttribute(value);
    console.log(idTutorado);

const respuestaRaw = await fetch("http://localhost:4000/tutorados/"+idTutorado, {
  
  headers: {
    "Content-Type": "application/json", // <-- Importante el encabezado
  },
  method: "DELETE",
  
});


console.log("eliminado XD");

})