console.log('Hi, Ramzes');

const sliderList = document.getElementById('slider-list');
const [btnLeft, btnRight] = document.getElementsByClassName('biography__btn-arrow');
const [sliderVisible] = document.getElementsByClassName('slider__visible');
const [imgBlock] = document.getElementsByClassName('biography__img-block');

const sliderContentList = [
	{
		content: `Molestie ultricies quam. Donec sem. 
			Praesent pretium.
			Maorbi quis nulla vehicula felsd laoreet.
			Sed ullamcorper arcu ante sed ipsum tempus
			tempor orcide. Nulla vierra ultrices magnal
			Nam rutrum congue diam. Vestibulum non lorem.
			Aliquam ullamcorper sem.`,
		url: './img/biography-mike.png'
	},
	{
		content: `Lorem ipsum dolor sit amet consectetur 
			adipisicing elit. Porro amet quisquam ducimus odit 
			eum sapiente saepe. Facilis repellendus incidunt nihil.`,
		url: './img/avatar_diana.png'
	},
	{
		content: `Lorem ipsum dolor sit amet consectetur 
			adipisicing elit. Porro amet quisquam ducimus odit 
			eum sapiente saepe. orem ipsum dolor sit amet consectetur 
			adipisicing elit. Facilis repellendus incidunt nihil.`,
		url: './img/avatar_adam.png'
	},
	{
		content: `Lorem ipsum dolor sit amet consectetur 
			adipisicing elit. `,
		url: './img/avatar_julia.png'
	}
];

let shift = 0;

const width = -sliderVisible.clientWidth;

sliderContentList.forEach((item, idx) => {
	const comment = document.createElement('li');
	comment.textContent = item.content;
	comment.classList.add('biography__text');

	const img = document.createElement('img');
	img.classList.add('biography__img');
	img.alt = `img-${idx + 1}`;
	img.src = item.url;

	imgBlock.append(img)
	sliderList.append(comment);
});

const imgList = document.getElementsByClassName('biography__img');
imgList[0].classList.add('active')

const clearActive = () => {
	Array.from(imgList).forEach(img => {
		img.classList.contains('active') && img.classList.remove('active');
	})
}


btnLeft.addEventListener('click', () => {
	if (shift === 0) {
		shift = width * (sliderContentList.length - 1);
	} else {
		shift = shift - width
	}

	const idx = shift / width;
	clearActive();
	imgList[idx].classList.add('active');

	sliderList.style.left = shift + 'px';
});

btnRight.addEventListener('click', () => {
	if (shift < width * (sliderContentList.length - 2)) {
		shift = 0;
	} else {
		shift = shift + width
	}

	const idx = shift / width;
	clearActive();
	imgList[idx].classList.add('active');
	sliderList.style.left = shift + 'px';
});

