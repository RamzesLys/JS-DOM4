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

revSliderItem.forEach((item, idx) => {
	item.addEventListener('click', () => {
		index = idx;
		currentSlide(index);
	})
})

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

const nextSlide = () => {
	if (index === revSliderItem.length - 1) {
		index = 0
		currentSlide(index);
	} else {
		index ++;
		currentSlide(index);
	}
}

const prevSlide = () => {
	if (index === 0) {
		index = revSliderItem.length - 1;
		currentSlide(index);;
	} else {
		index --;
		currentSlide(index);
	}
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

console.log(revSliderItem);