import { settings, templates } from './settings.js';

const app = {

  initProductPage: function(){
    const thisApp = this;

    const productTemplates = document.querySelector('#template-products');
    const container = document.querySelector('#pages #product');

    container.innerHTML = templates.productList(productTemplates);
  
    console.log(thisApp.data.products);
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

        this.initProductPage();
      });
  },


  init: function() {
    const thisApp = this;

    thisApp.initData();
  },
};

app.init();