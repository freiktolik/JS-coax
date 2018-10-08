const IMAGES = [
  'https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=9060',
  'https://images.pexels.com/photos/1451074/pexels-photo-1451074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=450&w=560',
  'https://images.pexels.com/photos/1460880/pexels-photo-1460880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200',
  'https://images.pexels.com/photos/1437629/pexels-photo-1437629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=500',
  'https://images.pexels.com/photos/87284/ocean-seacoast-rocks-water-87284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=426&w=400',
  'https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=1260',
  'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];

const DELAY = 10;
const IMAGE_CHANGE_INTERVAL = 5;

const getRandomNumberUpTo = max => Math.floor(Math.random() * max);

const imageOnUnactive = document.getElementById('img');

const setImageSrc = () => imageOnUnactive.src = IMAGES[getRandomNumberUpTo(IMAGES.length)];

const showImage = () => imageOnUnactive.classList.remove('d-n');

const hideImage = () => imageOnUnactive.classList.add('d-n');


const checkUserUnactivity = () => {
  let idleTime = 0;
  setImageSrc();

  setInterval(() => {
    if (idleTime++ >= DELAY) {
      idleTime % IMAGE_CHANGE_INTERVAL === 0 ? setImageSrc() : showImage();
    } else {
      hideImage();
    }
  }, 1000);

  ['keypress', 'mousemove', 'scroll', 'click'].forEach(eventName =>
    addEventListener(eventName, () => idleTime = 0 ));
};


// run
checkUserUnactivity();