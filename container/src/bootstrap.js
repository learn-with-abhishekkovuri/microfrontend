import { mount as ProductMount } from 'products/ProductsIndex';
import { mount as CartMount } from 'cart/Cartshow'

console.log('Container!');

ProductMount(document.querySelector('#my-products'));
CartMount(document.querySelector('#my-cart'));
