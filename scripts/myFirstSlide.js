//my slide

const [btnPrev, btnNext] = document.getElementsByClassName('reviews__btn-arrow');
const revSliderList = document.getAnimations('reviews__slider');
const revSliderItem = document.querySelectorAll('.reviews__item');
revSliderItem[2].classList.add('active');

let index = 2;

const cleaning = () => {
	revSliderItem.forEach(item => {
		item.classList.contains('active') && item.classList.remove('active');
	})
}

const activeSlide = (item) => {
	for (revSliderItem of revSliderList) {
		revSliderItem.classList.remove('active');
	}
	cleaning()
	revSliderItem[item].classList.add('active');
}

const currentSlide = (idx) => {
	activeSlide(idx)
}

btnNext.addEventListener('click', () => {
	if (index === revSliderItem.length - 1) {
		index = 0
		currentSlide(index);
	} else {
		index ++;
		currentSlide(index);
	}
});

btnPrev.addEventListener('click', () => {
	if (index === 0) {
		index = revSliderItem.length - 1;
		currentSlide(index);
	} else {
		index --;
		currentSlide(index);
	}
});
