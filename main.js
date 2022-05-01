'use strict';

// make navbar transperent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarToggle = document.querySelector('.navbar__toggle-btn')
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY >= navbarHeight)  {
    navbar.classList.add('navbar--dark');
  } else  {
    navbar.classList.remove('navbar--dark');
  }
});



function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth'});
}

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', () =>  {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null)  {
    return;
  } 
  navbarMenu.classList.remove('open');
  scrollIntoView(link); 
});

document.addEventListener('scroll', () => {
  navbarMenu.addEventListener('click', (e) => {
    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected')
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');
  
  })
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
})


const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', () =>  {
  scrollIntoView('#contact');
});


// Home 투명도

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity =1.2 - window.scrollY / homeHeight;
});


// 조금 내리면 위로 올리기 버튼 나오기

const upBtn = document.querySelector('.upBtn');


document.addEventListener('scroll', () => {
  if(window.scrollY > 700)  {
    upBtn.classList.add('upBtn__open');
  } else  {
    upBtn.classList.remove('upBtn__open');
  }
upBtn.style.opacity = -1 +  window.scrollY / 700 ;
});

upBtn.addEventListener('click', () =>  {
  scrollIntoView('#home');
});

// Project

const InvestBtnContainer = document.querySelector('.invest__categories');
const projectContainer = document.querySelector('.invest__projects');
const projects = document.querySelectorAll('.project');

InvestBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected')
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) =>  {
      console.log(project.dataset.type);
      if(filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else  {
        project.classList.add('invisible');
      }
    });
  projectContainer.classList.remove('anim-out');
  }, 300);
})


// Project

const p2eBtnContainer = document.querySelector('.p2e__categories');
const reinvestmentContainer = document.querySelector('.reinvestmentsets');
const reinvestmentsets = document.querySelectorAll('.reinvestmentset');

p2eBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.p2e__category__btn.selected')
  active.classList.remove('selected');
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  reinvestmentContainer.classList.add('anim-out');
  setTimeout(() => {
    reinvestmentsets.forEach((reinvestmentset) =>  {
      console.log(reinvestmentset.dataset.type);
      if(filter === reinvestmentset.dataset.type) {
        reinvestmentset.classList.remove('invisible');
      } else  {
        reinvestmentset.classList.add('invisible');
      }
    });
    reinvestmentContainer.classList.remove('anim-out');
  }, 300);
})




const sectionIds  = [
  '#home',
  '#about',
  '#p2e',
  '#invest',
  '#shop',
  '#contact'
];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));
console.log(sections);
console.log(navItems);
