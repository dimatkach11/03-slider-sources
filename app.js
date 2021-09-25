const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

let activeSlideIndex = 0

const container = document.querySelector('.container')

const sidebar = document.querySelector('.sidebar')

const mainSlide = document.querySelector('.main-slide')

const slidesCount =  mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${ ( slidesCount - 1 ) * container.clientHeight }px`

upBtn.addEventListener('click', () =>{
  changeSlide('up')
} )

downBtn.addEventListener('click', () =>{
  changeSlide('down')
} )

function changeSlide(direction) {
  if ( direction === 'up') {
    activeSlideIndex ++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else {
    activeSlideIndex --
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const clientHeight = container.clientHeight

  mainSlide.style.transform = `translateY( -${  activeSlideIndex * clientHeight}px)`
  sidebar.style.transform = `translateY( +${  activeSlideIndex * clientHeight}px)`
}