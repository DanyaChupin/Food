function modal() {
    const modal = document.querySelector('.modal'),
        btns = document.querySelectorAll('[data-modal]')

    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    btns.forEach((btn) => {
        btn.addEventListener('click', openModal)
    })
    function openModal() {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal()
        }
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal()
        }
    })
    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)
}
export default modal