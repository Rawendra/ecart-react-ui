import { PageConfig } from "../typeDef/pagestype";
import ProductInventory from "../view/product-inventory/ProductInventory";
import Cart from "../view/cart/Cart";
import SignUp from "../view/sign-up/SignUp";
import SignIn from '../view/sign-in/SignIn'
export const ROUTES = {
  PRODUCT_INVENTORY: "/product-inventory",
  CART: "/cart",
  SIGN_UP:'/sign_up',
  SIGN_IN:'/sign_in'
};

export const TITLES = {
  PRODUCT_INVENTORY: "Products",
  CART: "Your Cart",
  SIGN_UP:'Sign Up',
  SIGN_IN:'Sign In'
};

export const pages: PageConfig[] = [
  {
    route: ROUTES.PRODUCT_INVENTORY,
    title: TITLES.PRODUCT_INVENTORY,
    Component: ProductInventory,
    isAuthNeeded: true,
  },
  {
    route: ROUTES.CART,
    title: TITLES.CART,
    Component: Cart,
    isAuthNeeded: true,
  },
  {
    route: ROUTES.SIGN_UP,
    title: TITLES.SIGN_UP,
    Component: SignUp,
    isAuthNeeded: false,
  },
  {
    route: ROUTES.SIGN_IN,
    title: TITLES.SIGN_IN,
    Component: SignIn,
    isAuthNeeded: false,
  },
];
