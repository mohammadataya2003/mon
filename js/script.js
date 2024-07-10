// Nav Bar
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
allEventListners();
function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 10) {
      $('.navbar-area').addClass('scrolled');
  } else {
      $('.navbar-area').removeClass('scrolled');
  }
});

//End Nav Bar

//Carousel
$(document).ready(function(){
    $(".top-banner").owlCarousel({
      items:1,
      autoplay:true,
      loop:true,
      autoplayTimeout:2000,

    });

    //Some of our products
    $(".owl-products").owlCarousel({
      autoplay:true,
      loop:true,
      autoplayTimeout:2000,
      responsive: {
        0: {
            items: 1
        },
        768: {
            items: 4
        }
      }
    });
//End Some of our products
$(".owl-feedback").owlCarousel({
  items:3,
  autoplay:true,
  loop:true,
  autoplayTimeout:2000,

});
  });

//About Page
const data = {
  name: 'المدير التنفيذي: أحمد محمد عرب',
  children: [
    {
      name: 'مدير قسم الانتاج: باسل اليسقي',
      children: [
        {
          name: 'الموظف 1'

        },
        {
          name: 'الموظف 2'
        }
      ]
    },
    {
      name: 'مدير قسم 2 :  ',
      children: [
        {
          name: 'موظف 3'
        },
        {
          name: 'موظف 4'
        }
      ]
    }
  ]
};

function createChartNode(node) {
  const element = document.createElement('div');
  element.classList.add('chart-node');
  
  const nameElement = document.createElement('div');
  nameElement.classList.add('name');
  nameElement.textContent = node.name;
  element.appendChild(nameElement);
  
  if (node.children) {
    const childrenElement = document.createElement('div');
    childrenElement.classList.add('children');
    node.children.forEach(child => {
      childrenElement.appendChild(createChartNode(child));
    });
    element.appendChild(childrenElement);
  }
  
  return element;
}

const chartContainer = document.getElementById('chart-container');
chartContainer.appendChild(createChartNode(data));

//End About Page

//Contact Page
document.getElementById('contact-form').addEventListener('submit', function(event) {
  var email = document.getElementById('email').value;
  var emailError = document.getElementById('email-error');
  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address';
    event.preventDefault();
  } else {
    emailError.textContent = '';
  }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//End Contact Page

// single product page
// rate
const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
  star.addEventListener('click', function() {
    console.log('تم تقييم المنتج بنجاح:', this.value);
  });
});

// End rate
