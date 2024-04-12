// ---------------------mobile menu

let menuBtn = document.querySelectorAll(".header__burgerIcon");
let menu = document.querySelector(".header__menu");
let menuLinks = document.querySelectorAll(".header__menu-item");

menuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleMenu();
  });
});
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.body.classList.toggle("lock");
}
window.addEventListener("scroll", () => {
  document.body.classList.remove("lock");
});

// ----------------------end mobile menu

// --------------------- faq section
let accItem = document.getElementsByClassName("faq__item");
let accHD = document.getElementsByClassName("faq__head");
console.log(accItem);
console.log(accHD);

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
  let itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "faq__item close";
  }
  if (itemClass == "faq__item close") {
    this.parentNode.className = "faq__item open";
  }
}

// --------------------- sliders 
var funcs = [];
var splides = document.querySelectorAll('.splide-slider');

for (let i = 0; i < splides.length; i++) {

	funcs[i] = function() {
	  let splideElement = splides[i];
	  var splideClassname = splideElement.classList[0];	
			  
      var splideDefaultOptions = {
        gap: "30px",
        perPage: 3,
        pagination: false,
        autoWidth: true,
        breakpoints: {
          800: {
          perPage: 1,
          },
        },
        breakpoints: {
          480: {
          perPage: 1,
          gap: '20px',
          },
        },
      };
				  
	  var splide = new Splide( splideElement, splideDefaultOptions );
	  
	  splide.on( 'mounted move', function () {
	  var getBar = '.'+ splideClassname + ' .my-slider-progress-bar';
	  var bar = splide.root.querySelector(getBar);	
	  var end = splide.Components.Controller.getEnd() + 1;
	  bar.style.width = String( 100 * ( splide.index + 1 ) / end ) + '%';
	  });
			  
	  splide.mount();

	};
}
for (var j = 0; j < splides.length; j++) {
		funcs[j]();
}
