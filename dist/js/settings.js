export const select = {
  templateOf: {
    menuProduct: '#template-product',
    product: '#product',
  },
  containerOf: {
    menu: '#product-list',
    pages: '#pages',
    contact: '#contact',
  },
  nav: {
    links: '.navigation a',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
};

export const templates = {
  // eslint-disable-next-line no-undef
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
};