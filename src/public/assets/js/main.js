const $btn = document.getElementById("btnObtener");
const $bodyTable = document.getElementById("data");

$btn.addEventListener("click",async (event) => {
    const response = await fetch('http://localhost:4000/api/v1/example/listar')
    const body = await response.json();
    for (let index = 0; index < body.length; index++) {
        const status = body[index]["status"];
        const htlm = `<tr><td>${status}</td></tr>`;
        $bodyTable.innerHTML +=htlm;
    }
});
