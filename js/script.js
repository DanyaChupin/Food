import tabs from './modules/tabs'
import modal from './modules/modal'
import forms from './modules/forms'
import slider from './modules/slider'
import cards from './modules/cards'
import timer from './modules/timer'
import calc from './modules/calc'

window.addEventListener('DOMContentLoaded', () => {
  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active',
  )
  modal('[data-modal]', '.modal')
  timer('.timer', '2022-09-11')
  calc()
  forms()

  slider({
    container:'.offer__slider',
    slide:'.offer__slide',
    nextArrow:'.offer__slider-next',
    prevArrow:'.offer__slider-prev',
    totalCounter:'#total',
    currentCounter:'#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'

  })
  cards()

})
