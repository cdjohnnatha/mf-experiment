import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('Container!');

mountProducts(document.querySelector('#products-mf'));
mountCart(document.querySelector('#cart-mf'));