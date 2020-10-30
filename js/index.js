const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'main-content2': {
    'features-h4': 'Features After Update',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About After Update',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page.jpg',
    'services-h4': 'Services After Update',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product After Update',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision After Update',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2020',
  },
};

// write your code here
const navMenu = document.querySelectorAll('.container a');
const valuesArray = Object.values(siteContent.nav);
//console.log(valuesArray);
for(var i =0; i<navMenu.length;i++){
    navMenu[i].textContent = valuesArray[i];
    navMenu[i].setAttribute("style", "color: green;");
}

document.getElementById("logo-img").src = valuesArray[valuesArray.length-1];
document.getElementById("cta-img").src = siteContent.cta['img-src'];
/*------------------------------------------------------------------------------*/

const cta_h1 = document.querySelector('.cta-text h1');
cta_h1.textContent = siteContent.cta.h1;
const cta_btn = document.querySelector('.cta-text button');
cta_btn.textContent = siteContent.cta['button'];
/*------------------------------------------------------------------------------*/
const ContentValuesArray = Object.values(siteContent['main-content']);
const content_h4 = document.querySelectorAll('.text-content h4');
//console.log(content_h4)
content_h4[0].textContent = ContentValuesArray[0];
content_h4[1].textContent = ContentValuesArray[2];
content_h4[2].textContent = ContentValuesArray[5];
content_h4[3].textContent = ContentValuesArray[7];
content_h4[4].textContent = ContentValuesArray[9];
/*------------------------------------------------------------------------------*/
const content_p = document.querySelectorAll('.text-content p');
//console.log(content_h4)
content_p[0].textContent = ContentValuesArray[1];
content_p[1].textContent = ContentValuesArray[3];
content_p[2].textContent = ContentValuesArray[6];
content_p[3].textContent = ContentValuesArray[8];
content_p[4].textContent = ContentValuesArray[10];
/*------------------------------------------------------------------------------*/
document.getElementById("middle-img").src = ContentValuesArray[4];
/*------------------------------------------------------------------------------*/
const ContactValuesArray = Object.values(siteContent.contact);
const contact_p = document.querySelectorAll('.contact p');
const contact_h4 = document.querySelector('.contact h4');
contact_h4.textContent = ContactValuesArray[0];
for (var i = 0 ; i<contact_p.length ; i++){
contact_p[i].textContent = ContactValuesArray[i+1];
}
/*------------------------------------------------------------------------------*/
/*const Footer = document.getElementsByTagName('footer');
const Footer_p = Footer.getElementsByTagName('p');
Footer_p.textContent = siteContent.footer.copyright;*/
//const Footer = document.getElementsByTagName('footer p');
//console.log(Footer)
const Footer = document.getElementsByTagName("footer")[0];
Footer.getElementsByTagName("p")[0].textContent = siteContent.footer.copyright;
/*------------------------------------------------------------------------------*/
//document.getElementsByTagName("a").style.color = "blue";
//document.getElementsByTagName("a").setAttribute("style", "background-color: red;");
/*------------------------------------------------------------------------------*/
const item1 = document.createElement('a');
const item2 = document.createElement('a');
item1.textContent = 'Register';
item2.textContent = 'Donate';
const navElement = document.querySelector('.container nav');
item1.setAttribute("style", "color: green;");
item2.setAttribute("style", "color: green;");
navElement.appendChild(item1);
navElement.appendChild(item2);

/*------------------------------------------------------------------------------*/
const btn = document.createElement('button');
btn.textContent = 'Update';
const update_btn = document.getElementsByClassName('cta-text');
// const update_btn = document.getElementsByTagName('body');
update_btn[0].appendChild(btn);

// cta_btn.appendChild(btn);
/*------------------------------------------------------------------------------*/
btn.addEventListener("click", function() {
const ContentValuesArrayAfterUpdate = Object.values(siteContent['main-content2']);
const content_h4_Update = document.querySelectorAll('.text-content h4');
content_h4_Update[0].textContent = ContentValuesArrayAfterUpdate[0];
content_h4_Update[1].textContent = ContentValuesArrayAfterUpdate[2];
content_h4_Update[2].textContent = ContentValuesArrayAfterUpdate[5];
content_h4_Update[3].textContent = ContentValuesArrayAfterUpdate[7];
content_h4_Update[4].textContent = ContentValuesArrayAfterUpdate[9];
});
