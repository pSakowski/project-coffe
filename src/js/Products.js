import {select, templates} from './settings.js';
import utils from './utils.js';

class Product {
  constructor (data){
    const thisProduct = this;

    // thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
    thisProduct.initWidgets();
  }

  renderInMenu(){
    const thisProduct = this;

    /* generate HTML based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);
    
    /* create element using utils.createElementFromHtml */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
   
    /* find menu container */
    const menuContainer = document.querySelector(select.containerOf.menu);

    /* add element to menu */
    menuContainer.appendChild(thisProduct.element);
  }

  initWidgets(){
    const elem = document.querySelector('.main-carousel');

    //eslint-disable-next-line no-undef
    new Flickity (elem, {
      //options
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
      prevNextButtons: false,
      wrapAround: true,
      imagesLoaded: true,
    });
  }
}

export default Product;