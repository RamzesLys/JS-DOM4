//my slide

const [btnPrev, btnNext] = document.getElementsByClassName('reviews__btn-arrow');
const revSliderList = document.getAnimations('reviews__slider');
const revSliderItem = document.querySelectorAll('.reviews__item');
revSliderItem[2].classList.add('active');

let index = 2;

const activeSlide = (item) => {
	for (revSliderItem of revSliderList) {
		revSliderItem.classList.remove('active');
	}
	slides[item].classList.add('active');
}

console.log(revSliderItem);