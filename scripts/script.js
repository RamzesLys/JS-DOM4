console.log('Hi, Ramzes');

const comment = document.createElement('li');


const sliderContentList = [
    {
        content: `Molestie ultricies quam. Donec sem. Praesent pretium.
        Maorbi quis nulla vehicula felsd laoreet.
        Sed ullamcorper arcu ante sed ipsum tempus
        tempor orcide. Nulla vierra ultrices magnal
        Nam rutrum congue diam. Vestibulum non lorem.
        Aliquam ullamcorper sem.`

    }
];

const sliderList = document.getElementById('slider-list');
const [btnLeft, btnRight] = document.getElementsByClassName('biography__btn-arrow');

btnLeft.addEventListener('click', (event) => {
    console.log('clicked!!!', event);
});

btnRight.addEventListener('click', (event) => {
    console.log('clicked!!!', event);
});

console.log(sliderList, btnLeft, btnRight);