import {settings, select, classNames } from './settings.js';
import Product from './Products.js';
// import Contact from './Contact.js';

const app = {

  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        // console.log(parsedResponse);
        
        app.initProduct();
      });
  },

  initProduct: function () {
    const thisApp = this;
    // console.log('thisApp.data:', thisApp.data);

    for (let product in thisApp.data.products){
      new Product(thisApp.data.products[product]);
    }
  },

  // initContact: function () {
  //   const thisApp = this;

  //   thisApp.contactPage = document.querySelector(select.containerOf.contact);
  //   thisApp.contact = new Contact(thisApp.contactPage);
  // },

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
      }); 
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    /* add class "active" to matching pages, remove from non-matching */

    // for(let page of thisApp.pages){
    //   if(page.id == pageId){
    //     page.classList.add(classNames.pages.active);
    //   } else {
    //     page.classList.remove(classNames.pages.active);
    //   }

    /* add class "active" to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class "active" to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  init: function() {
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
    // thisApp.initContact();
  },
};

app.init();