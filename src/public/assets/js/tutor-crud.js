const $bodyTutor = document.getElementById('bodyTutor')
const childrenBody = $bodyTutor.children

for (let i = 0; i < childrenBody.length; i++) {
    const btnDelete = childrenBody[i].children[5].children[1]
    btnDelete.addEventListener("click", async (e) => {
        let id = btnDelete.getAttribute('itemid')
        await http.delete({ url: `/tutor/crud/${id}` })
        location.href = "../tutor/crud"
    })
}