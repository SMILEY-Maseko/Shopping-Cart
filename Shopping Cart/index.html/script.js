let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listProduct = document.querySelector('.listProduct');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Air Force 1',
        image: 'imaheAF1.jpeg',
        price: 1499.99
    },
    {
        id: 2,
        name: 'Air Jordan',
        image: 'imageAJ.jpg',
        price: 2499.99
    },
    {
        id: 3,
        name: 'Airmax',
        image: 'imageAM.jpg',
        price: 2799.99
    },
    {
        id: 4,
        name: 'Blaze',
        image: 'imageBL.jpg',
        price: 1899.99
    },
    {
        id: 5,
        name: 'High Dunk',
        image: 'imageHD.jpg',
        price: 2399.99
    },
    {
        id: 6,
        name: 'Low Dunk',
        image: 'imageLD.jpg',
        price: 2699.99
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('product');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCart[key] = JSON.parse(JSON.stringify(products[key]));
        listCart[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listProduct[key];
    }else{
        listCart[key].quantity = quantity;
        listCart[key].price = quantity * products[key].price;
    }
    reloadCart();
}