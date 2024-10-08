export enum EAppPage {
    BASKET = 'BASKET',
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
    PRODUCTS = 'PRODUCTS',
    PRODUCT = 'PRODUCT',
    ROOT = 'ROOT',
}

export const APP_LINK_URLS = {
    [EAppPage.BASKET]: '/basket',
    [EAppPage.LOGIN]: '/login',
    [EAppPage.SIGNUP]: '/sign-up',
    [EAppPage.PRODUCTS]: '/products',
    [EAppPage.PRODUCT]: '/product/:id',
    [EAppPage.ROOT]: '/',
};

export const EXTERNAL_LINK_URLS = {
    FB: 'https://www.facebook.com/',
    INSTAGRAM: 'https://www.linkedin.com/',
    LINKEDIN: 'https://www.instagram.com/',
    COURSE: 'https://www.mas',
};
