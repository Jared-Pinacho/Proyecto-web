const $span = document.getElementById('user')
const $bodyPregunta = document.getElementById('bodyPregunta')
const childrenBody = $bodyPregunta.children
const user = $span.innerText

for (let i = 0; i < childrenBody.length; i++) {
    const btnDelete = childrenBody[i].children[6].children[1]
    btnDelete.addEventListener("click", async (e) => {
        let id = btnDelete.getAttribute('itemid')
        await http.delete({ url: `/tutor/admin/${id}` })
    })
}