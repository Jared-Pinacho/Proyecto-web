const $bodyPregunta = document.getElementById('bodyPregunta')
const childrenBody = $bodyPregunta.children

for (let i = 0; i < childrenBody.length; i++) {
    const btnDelete = childrenBody[i].children[7].children[1]
    btnDelete.addEventListener("click", async (e) => {
        let id = btnDelete.getAttribute('itemid')
        await http.delete({ url: `/tutor/admin/${id}` })
        location.href = "../tutor/admin"
    })
}