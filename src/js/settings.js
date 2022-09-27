export const select = {
  templateOf: {
    menuProduct: '#template-menu-product',
  },
  containerOf: {
    menu: '#product-list',
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
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};