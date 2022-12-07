console.log('Hi, Ramzes');

const sliderList = document.getElementById('slider-list');
const [btnLeft, btnRight] = document.getElementsByClassName('biography__btn-arrow');

const sliderContentList = [
{
	content: `Molestie ultricies quam. Donec sem. 
	Praesent pretium.
	Maorbi quis nulla vehicula felsd laoreet.
	Sed ullamcorper arcu ante sed ipsum tempus
	tempor orcide. Nulla vierra ultrices magnal
	Nam rutrum congue diam. Vestibulum non lorem.
	Aliquam ullamcorper sem.`
},
{
	content: `Lorem ipsum dolor sit amet consectetur 
	adipisicing elit. Porro amet quisquam ducimus odit 
	eum sapiente saepe. Facilis repellendus incidunt nihil.`
},
{
	content: `Lorem ipsum dolor sit amet consectetur 
	adipisicing elit. Porro amet quisquam ducimus odit 
	eum sapiente saepe. orem ipsum dolor sit amet consectetur 
	adipisicing elit. Facilis repellendus incidunt nihil.`
},
{
content: `Lorem ipsum dolor sit amet consectetur 
adipisicing elit. `
}
];

sliderContentList.forEach(item => {
    const comment = document.createElement('li');
    comment.textContent = item.content;
    sliderList.append(comment);
    comment.classList.add('biography__text')

});

btnLeft.addEventListener('click', (event) => {
    console.log('clicked!!!', event);

});

btnRight.addEventListener('click', (event) => {
    console.log('clicked!!!', event);
		sliderList.style.right = 916 + 'px'
});

console.log(sliderList, btnLeft, btnRight);