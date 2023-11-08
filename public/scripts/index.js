// cartButton = document.querySelector('.js-add-to-cart-button')


// cartButton.addEventListener('click', () => {
//     cartButton.innerHTML = "clicked";
// })



function activateButton (onButton, offButton1, offButton2) {
    console.log(onButton.classList.contains('clicked-button'));
    if (onButton.classList.contains('clicked-button')) {
        onButton.classList.remove('clicked-button');
    } else {
        onButton.classList.add('clicked-button');
        offOtherButtons(offButton1, offButton2);
    }
}

function offOtherButtons(offButton1, offButton2) {
    if (offButton1.classList.contains('clicked-button')){
        offButton1.classList.remove('clicked-button');
    } else {
        offButton2.classList.remove('clicked-button');
    }
}

popularButton = document.querySelector('.js-popular-button');
latestButton = document.querySelector('.js-latest-button');
topSaleButton = document.querySelector('.js-top-sale-button');

// default activation
activateButton(popularButton, latestButton, topSaleButton);

popularButton.addEventListener('click', () => {
    activateButton(popularButton, latestButton, topSaleButton);
});

latestButton.addEventListener('click', () => {
    activateButton(latestButton, popularButton, topSaleButton);
});

topSaleButton.addEventListener('click', () => {
    activateButton(topSaleButton, popularButton, latestButton);
});

// categoryMenu = document.querySelector('.js-category-menu');
// categoryMenu.addEventListener('click', (e) => {
//     console.log(e);
// });

const products = [];

function Product (productImg, productName, productPrice, oldPrice) {

    this.productImg = productImg;
    this.productName = productName;
    this.productPrice = productPrice;
    this.oldPrice = oldPrice;
}
products.push(new Product('images/white-shirt', 'White-shirt', '₱120.00', '₱230.00'));
products.push(new Product('images/new-tumbler', 'Tumbler', '₱380.00', '₱499.00'));
products.push(new Product('images/black-shoes', 'Black-shoes', '₱660.00', '₱860.00'));
products.push(new Product('images/red-shirt', 'Red-shirt', '₱230.00', '₱299.00'));
products.push(new Product('images/short-pants', 'Short-pants', '₱220.00', '₱330.00'));
products.push(new Product('images/ricecooker', 'Ricecooker', '₱980.00', '₱1299.00'));

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    // append to the container here
    const container = document.querySelector('.products-container');
    container.appendChild(productElement);
    console.log(product);

    const productImg = document.createElement("img");
    productImg.src = product.productImg + '.jpg';
    productImg.classList.add("product-img");
  
    const productName = document.createElement("div");
    productName.textContent = product.productName;
    productName.classList.add("product-name");
  
    const productPrice = document.createElement("div");
    productPrice.textContent = product.productPrice;
    productPrice.classList.add("product-price");
  
    const oldPrice = document.createElement("div");
    oldPrice.textContent = product.oldPrice;
    oldPrice.classList.add("old-price");

    const spacer = document.createElement("br");
    
    productElement.appendChild(productImg);
    productElement.appendChild(productName);
    productElement.appendChild(productPrice);
    productElement.appendChild(oldPrice);
    productElement.appendChild(spacer);

});