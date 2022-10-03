import { settings, templates } from './settings.js';

const app = {
  initHomePage: function(){
    const thisApp = this;

    const homeTemplates = document.querySelector('#template-home-widget');
    const container = document.querySelector('#pages #home');

    container.innerHTML = templates.homeWidget(homeTemplates);
  
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
        this.initHomePage();
      });
  },


  init: function() {
    const thisApp = this;
    thisApp.initData();
  },
};

app.init();