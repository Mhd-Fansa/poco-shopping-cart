import { add as addToCart } from './cart'
export function add(product) {
    // Add a product item to the shopping list
    const list = document.getElementById('shopping-list');

    // create card element
    const card = document.createElement('div');
    card.className = 'list-item card m-3';

    // Create card image
    const cardImage = document.createElement('div');
    cardImage.className = 'view overlay';
    cardImage.innerHTML = `
        <img class="card-img-top" src="${product.image}" alt="${product.name}">
        <div class="mask rgba-white-slight"></div>
    `;
    // create card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    // create card title
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = product.name;
    // create card text
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.innerHTML = `
        <h5 class="pink-text"><i class="fas fa-apple-alt"></i> ${product.material}</h5>
        <span class="badge badge-secondary">${product.adjective}</span>
        <span class="badge badge-primary">${product.price}</span>
    `;
    // create card button
    const cardButton = document.createElement('button');
    cardButton.className = 'btn btn-unique btn-block btn-sm waves-effect waves-light';
    cardButton.innerHTML = '<i class="fas fa-cart-plus"></i> Add to cart';
    cardButton.addEventListener('click', () => {
        addToCart(product);
    });

    // Add card's title, text and button to card's body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
    // Add card's image and body to card element
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    list.appendChild(card);
}