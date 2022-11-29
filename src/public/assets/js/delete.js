



  
//let  = $delete.getAttribute("value");


 


function borrar(elemento,id){

  //let elemento = document.ge


   

fetch('http://localhost:4000/tutorados/'+elemento.value, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    
})
.then(response => {
    
})

}