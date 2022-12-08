const $bodyPregunta = document.getElementById('bodyPregunta')
const childrenBody = $bodyPregunta.children

for (let i = 0; i < childrenBody.length; i++) {
    const btnDelete = childrenBody[i].children[7].children[0]
    btnDelete.addEventListener("click", async (e) => {
        let id = btnDelete.getAttribute('id')
        childrenBody[i].remove()
        await http.delete({ url: `/admin/delete/pregunta/${id}` })
    })
}

const $bodyTutorado = document.getElementById('bodyTutorado')
const childrenBody2 = $bodyTutorado.children
console.log(childrenBody2[0]);
for (let i = 0; i < childrenBody2.length; i++) {
    const btnDeleteT = childrenBody2[i].children[5].children[1]
    btnDeleteT.addEventListener("click", async (e) => {
        let id = btnDeleteT.getAttribute('id')
        childrenBody2[i].remove()
        await http.delete({ url: `/admin/delete/tutorado/${id}` })
    })
}