import {settings } from './settings.js';
import Product from './Products.js';

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
        console.log(parsedResponse);
        
        app.initProduct();
      });
  },

  initProduct: function () {
    const thisApp = this;
    console.log('thisApp.data:', thisApp.data);

    for (let product in thisApp.data.products){
      new Product(thisApp.data.products[product]);
    }
  },

  init: function() {
    const thisApp = this;

    thisApp.initData();
  },
};

app.init();