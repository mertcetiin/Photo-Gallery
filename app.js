const panel1s = document.querySelectorAll('.panel')


panel1s.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panel1s.forEach((panel) => {
        panel.classList.remove('active')
    })
}
