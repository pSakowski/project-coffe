export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
  },
  containerOf: {
    home: '.home-wrapper',
    pages: '#pages',
  },
};
  
export const classNames = {
  pages: {
    active: 'active',
  },
};
  
export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
};
  
export const templates = {
  // eslint-disable-next-line no-undef
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
};