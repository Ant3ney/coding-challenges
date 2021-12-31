let titleEle = document.querySelector('.title');
let subtitleEle = document.querySelector('.subtitle');
let submitButtonEle = document.querySelector('.submit');
let infoEle = document.querySelector('.info');
let loaderEle = document.querySelector('.loader');
let inputEle = document.querySelector('.zipcode-input');
let placeEle = document.querySelector('.place');
let stateEle = document.querySelector('.state');
let stateShapeEle = document.querySelector('.state-shape');
let lowerContextEle = document.querySelector('.lower-context');
let ctxStateEle = document.querySelector('.ctx-state');
let ctxLatEle = document.querySelector('.ctx-lat');
let ctxLongEle = document.querySelector('.ctx-long');

let searched = false;
let inputText;
let loadZip = 'loaded';

var client = new XMLHttpRequest();

function search(e) {
   e.preventDefault();
   inputText = inputEle.value;
   if (!inputText || inputText === '') {
      alert('In valid zip code');
      return;
   } else if (!searched) {
      titleEle.classList.add('searched');
      subtitleEle.classList.add('searched');
      submitButtonEle.classList.add('searched');
      infoEle.classList.add('searched');
      loaderEle.classList.add('searched');
   }

   client.open('GET', `http://api.zippopotam.us/us/${inputText}`, true);
   client.onreadystatechange = function () {
      removeClass(loaderEle, 'searched');
      loaderEle.classList.add('loaded');

      if (client.readyState == 4 && client.status === 200) {
         let res = JSON.parse(client.responseText);
         let place = res.places[0];
         let stateAbb = place[`state abbreviation`];

         placeEle.innerText = place['place name'] + ' ';
         stateEle.innerText = place.state + ' ';
         ctxStateEle.innerText = stateAbb;
         ctxLatEle.innerText = `Lat: ${place.latitude}`;
         ctxLongEle.innerText = `Long: ${place.longitude}`;

         infoEle.classList.add('loaded');
         stateShapeEle.classList.add('loaded');
         lowerContextEle.classList.add('loaded');

         let stateShapeSvgSrc = `/states/${stateAbb}.svg`;
         stateShapeEle.setAttribute('src', stateShapeSvgSrc);
      } else if (client.readyState == 4 && client.status !== 200) {
         alert(`Failed to get informaion from zip code ${inputText}`);
      }
   };

   client.send();
}

function removeClass(ele, className) {
   if (!ele) return;
   while (ele.classList.contains(className)) {
      ele.classList.remove(className);
   }
}
