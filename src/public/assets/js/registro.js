
const API_COUNTRY ='http://localhost:4000/tutorados';

fetch(API_COUNTRY)
.then(response=>response.json() )
.then(data => {
    let element = document.getElementById('tabla')
   element.innerHTML= "";
   
    for(var i = 0 ; i<data.length; i++){
        console.log(data[i].nombre)
        element.innerHTML+= `<td>${data[i].nombre}</td><td>${data[i].edad}</td><td>${data[i].sexo}</td><td>${data[i].aciertos}</td> <td><button id="editar" class="btn" value="${data[i].idTutorado}" >Editar</button><form method="DELETE" action="http://localhost:4000/tutorados/${data[i].idTutorado}"  id="delete"  >  <button id="delete" class="btn"  value="${data[i].idTutorado}">Eliminar</button>  </form></td>` 
    
        console.log(data[i].idTutorado)
    }

    console.log("data")

})
.catch(err=>console.log(err))



