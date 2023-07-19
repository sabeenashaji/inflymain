const nav = document.getElementById("icon5");
const icon = document.getElementById("mobile");

icon.addEventListener("click",()=>{
    nav.classList.toggle("jav")
});


const link1 = document.getElementById('svg1');
const svg1 = document.getElementById('dropicon');
const boxes = document.getElementsByClassName('incheight');
const hello = document.getElementsByClassName('test');
const items = document.getElementsByClassName('image1');
const itempic = document.getElementsByClassName('itempic');
const hiddenbox = document.getElementById('hiddenbox');
const sec3 = document.getElementsByClassName('sec3full');
const feedback = document.getElementById('feedbackbtn');
const products = document.getElementById('products');
const mobilediv = document.getElementById('mbdiv');
const offerBtn = document.getElementById('offerbtn');
const aboutus = document.querySelector('.aboutus');
const feed = document.querySelector('.feed');
const popup = document.getElementById('popup');
const mobilenav = document.getElementById('mob');
const overlay = document.createElement('div');

const x = boxes.length;
const y = items.length;

for (let j = 0; j < items.length; j++) {
  items[j].addEventListener('click', (event) => {
    event.stopPropagation(); // Stop the click event from propagating to the document
    if (window.innerWidth < 930) {
      hiddenbox.classList.add('w-100');
    } else {
      hiddenbox.classList.toggle('width');
    }
  });
}

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const sideNav = document.getElementById('hiddenbox');

  // Check if the clicked element is within the side navigation or its child elements
  if (!sideNav.contains(clickedElement)) {
    closeNav();
  }
  if (!popup.contains(event.target)) {
    popup.classList.remove('click');
  }
  if (!products.contains(event.target)) {
    products.classList.remove('opacity');
  }
});

function hideProducts(event) {
  products.classList.toggle('opacity');
  event.stopPropagation();
}

function closeNav() {
  if (hiddenbox.classList.contains('w-100')) {
    hiddenbox.classList.remove('w-100');
  } else {
    document.getElementById('hiddenbox').classList.remove('width');
  }
}



function closeExp() {
  popup.classList.remove('click');
  document.body.removeChild(overlay);
}

function closeExp() {
  popup.classList.remove('click');
  document.body.removeChild(overlay);
}

feedback.addEventListener('click', (event) => {
  event.stopPropagation();
  popup.classList.toggle('click');
  document.body.appendChild(overlay);
});
document.querySelector('#rate').addEventListener('click',()=>{
  event.stopPropagation();
  popup.classList.toggle('click');
  document.body.appendChild(overlay);
})

popup.addEventListener('click', (event) => {
  event.stopPropagation();
});

overlay.classList.add('overlay');

overlay.addEventListener('click', () => {
  popup.classList.remove('click');
  document.body.removeChild(overlay);
});
