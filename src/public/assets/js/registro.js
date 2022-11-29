
const API_COUNTRY ='http://localhost:4000/tutorados';

fetch(API_COUNTRY)
.then(response=>response.json() )
.then(data => {
    let element = document.getElementById('tabla')
  
   
    for(var i = 0 ; i<data.length; i++){
        console.log(data[i].nombre)
        element.innerHTML+= `<tr><td>${data[i].nombre}</td><td>${data[i].edad}</td><td>${data[i].sexo}</td><td>${data[i].aciertos}</td> <td> <button id="editar" class="btn" value="${data[i].idTutorado}" >Editar</button>  <button  id="delete${data[i].idTutorado}" class="btn" onClick="borrar(this,${data[i].idTutorado})" value="${data[i].idTutorado}" >Eliminar</button>   <button  id="entrar" class="btn"  value="${data[i].idTutorado}">Entrar</button> </td> </tr>` 
    
        console.log(data[i].idTutorado)
    }

    console.log("data")

})
.catch(err=>console.log(err))



