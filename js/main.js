const products = [
  {
    id: 1,
    name: 'Reprogramación Stage 1',
    price: 299,
    description: 'Aumenta la potencia y mejora el consumo.',
  },
  {
    id: 2,
    name: 'Escape deportivo valvulado',
    price: 499,
    description: 'Sonido y rendimiento al máximo nivel.',
  },
  {
    id: 3,
    name: 'Kit vinilos estilo racing',
    price: 199,
    description: 'Dale un look agresivo y personalizado a tu coche.',
  },
];

const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = [];
