import {select, settings } from './settings.js';
import Product from './Products.js';

const app = {

  initMenu: function () {
    const thisApp = this;
    console.log('thisApp.data:', thisApp.data);
    for (let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData], thisApp.data.products[productData]);
    }
  },

  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        console.log(parsedResponse);
        
        app.initMenu();
      });
  },

  initProduct: function (){
    const thisApp = this;

    thisApp.productTemplate = document.querySelector(select.containerOf.pages);
    thisApp.pages = new Product(thisApp.productTemplate);
  },

  init: function() {
    const thisApp = this;

    thisApp.initData();
  },
};

app.init();