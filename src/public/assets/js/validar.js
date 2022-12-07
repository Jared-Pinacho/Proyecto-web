const $form = document.getElementById('formulario')
const $inputs = document.querySelectorAll('#formulario input')

$form.addEventListener('submit', (e) =>{
    let flag = true;
    for (let i = 0; i < $inputs.length; i++) {
        if ($inputs[i].value === "") {
            e.preventDefault()
            flag = false
        }
    }
    if(!flag){
        alert('Rellene el campo')
    }
})