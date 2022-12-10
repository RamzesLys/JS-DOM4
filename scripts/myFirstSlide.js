console.log('My slide');

const [reviewsBtnLeft, reviewsBtnRight] = document.getElementsByClassName('reviews__btn-arrow');
const reviewsSlider = document.getElementsByClassName('.reviews__slider');
const reviewsItem = document.getElementsByClassName('reviews__item');
reviewsItem[2].classList.add('active');
const reviewsItemList = Array.from(reviewsItem);

const cleanActive = () => {
	reviewsItemList.forEach(item => {
		item.classList.contains('active') && item.classList.remove('active');
	})
}

reviewsItemList.forEach((item, index) => {
	item.dataset.index = index
})

reviewsBtnLeft.addEventListener('click', (index) => {
	if (reviewsItemList[2].classList.contains('active')) {
		reviewsItemList[2].classList.remove('active');
		reviewsItemList[1].classList.add('active')
	} 

})

reviewsBtnRight.addEventListener('click', (index) => {
	if (reviewsItemList[2].classList.contains('active')) {
		reviewsItemList[2].classList.remove('active');
		reviewsItemList[3].classList.add('active')
	} 
})