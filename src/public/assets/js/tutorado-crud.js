const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomstr= Math.random().toString(36).substring(0,num);       

    return randomstr;
}

const $codigo = document.getElementById('codigo')
$codigo.setAttribute('value',generateRandomString(7))