const filteredCard = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')

filteredCard.addEventListener('input', filterCards)

function filterCards () {
    if (filteredCard.value !== '') {
        for (let card of cards) {
            let title = card.querySelector('h2')
            title = title.textContent.toLowerCase()
            let filteredCardText = filteredCard.value.toLowerCase()

            if (!title.includes(filteredCardText)) {
                card.style.display = "none"
            } else {
                card.style.display = "block"
            }            
        }
    } else {
        for (let card of cards) {
            card.style.display = "block"
        }
    }
}
