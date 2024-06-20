let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector(".listProduct");

let listProducts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})
iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProducts.length > 0){
        listProducts.forEach(product => {
            let newProduct = documen.createElement('div');
            newProduct.classlist.add('item');
            newProduct.innerHTML = 
            `<img src="imageAF.jpg" alt="">
             <h2>Air Force 1</h2>
              <div class="price">R1499.99</div>
               <button class="addCart">
                   ADD TO CART
                </button>` 
                

                

        }) 
    }
}
const initApp = () => {
     // get data from json
     fetch('product.json')
     then(response => response.json())
     then(data => {
        listProducts = data;
       addDataToHTML();
     })
}
initApp();