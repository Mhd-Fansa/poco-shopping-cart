import faker from 'faker';
import { add } from './list';
import { init } from './cart';

function fillShoppingCart() {
    for (let i = 0; i < 20; i++) {
        const product = {
            name: faker.commerce.productName(),
            image: faker.random.image(),
            price: parseFloat(faker.commerce.price()),
            adjective: faker.commerce.productAdjective(),
            material: faker.commerce.productMaterial()
        };
        add(product);
    }
}
init();
fillShoppingCart();