function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}


function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

function modal(triggerSelector, modalSelector) {
    const modal = document.querySelector(modalSelector),
        btns = document.querySelectorAll(triggerSelector)
    btns.forEach((btn) => {
        btn.addEventListener('click', () => openModal(modalSelector))
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector )
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal(modalSelector)
        }
    })
    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal(modalSelector)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)
}

export default modal
export {closeModal}
export {openModal}