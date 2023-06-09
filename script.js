
/*
 Ovo je responsive menu 
*/

const mobileMenu = () => {
	let menu = document.querySelector('.header ul');
	let btn = document.querySelector('.header button');
 	

 	if (btn.innerText === 'MENU') {
 		menu.style.display ='block';
 		btn.innerText = 'CLOSE'

 	} else {
 		menu.style.display ='none';
 		btn.innerText = 'MENU'
 	}

 	



}

/*
* Ovo je galerija 
*/ 

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;

/* pomerasanje slike u Right */ 
const moveRight = () => {
	displayNone(pictures);
	imgNum++;

	if (imgNum === pictures.length){
	imgNum = 0;
	}
 
	pictures[imgNum].style.display = 'block';
}

/*pomeranje slike u levo */
const moveLeft = () => {
	displayNone(pictures);
	imgNum--;

	if (imgNum === -1){
		imgNum = pictures.length-1;
	}
 
	pictures[imgNum].style.display = 'block';

}


/*event listeneri za strelice desno levo  */
rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

/* 
ov funkcija ce da sakrije sve slike

*/
const displayNone = (pictures) => {
	pictures.forEach( (img) => {
		img.style.display = 'none';

	})
}

/* portfolio */ 
window.onload = () => {
  const buttons = document.querySelectorAll('.portfolio-categories button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      portfolioSort(button);
    });
  });
};

const portfolioSort = (button) => {
  let kategorije = button.getAttribute('data-category');
  let portfolioItems = document.querySelectorAll('.portfolio-single-item');

  portfolioItems.forEach((item) => {
    item.style.display = 'none';
  });

  if (kategorije === 'sve') {
    portfolioItems.forEach((item) => {
      item.style.display = 'block';
    });
  } else {
    portfolioItems.forEach((item) => {
    	let itemKategorije = item.getAttribute('data-category');
      if (item.getAttribute('data-category').includes(kategorije)) {
        item.style.display = 'block';
      }
    });
  }
};





/* otvaramo modal */


const openModal = () => {
	let modalWindow = document.querySelector('.popup-modal');
	let crnilo = document.querySelector('.overlay');
		modalWindow.style.display = 'block';
		crnilo.style.display = 'block';

} 



/* zatvaramo modal */


const closeModal = () => {
let modalWindow = document.querySelector('.popup-modal');
	let crnilo = document.querySelector('.overlay');
		modalWindow.style.display = 'none';
		crnilo.style.display = 'none';

}