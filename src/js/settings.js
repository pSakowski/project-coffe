export const select = {
  templateOf: {
    productList: '#template-products',
  },
  containerOf: {
    product: '.product-wrapper',
    pages: '#pages',
  },
  nav: {
    links: '.navigation a',
  }
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
    title: '.title',
    description: '.description',
    image: '.image',
    roasting: '.roasting',
    intensity: '.intensity',
  },
};
  
export const templates = {
  // eslint-disable-next-line no-undef
  productList: Handlebars.compile(document.querySelector(select.templateOf.productList).innerHTML),
};