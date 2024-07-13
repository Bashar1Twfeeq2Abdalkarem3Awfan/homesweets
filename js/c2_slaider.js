let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

// ------------------------------    الاكلات

let products = [
    {
        id: 1,
        name: 'DRINKS NAME 1',
        image: '1_2.jpg',
        price: 120000
    },
    {
        id: 2,
        name: 'DRINKST NAME 2',
        image: '2_2.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'DRINKS NAME 3',
        image: '3_2.jpg',
        price: 220000
    },
    {
        id: 4,
        name: 'DRINKS NAME 4',
        image: '4_2.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'DRINKS NAME 5',
        image: '5_2.jpg',
        price: 320000
    },
    {
        id: 6,
        name: 'DRINKS NAME 6',
        image: '6_2.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'DRINKS NAME 7',
        image: '7_2.jfif',
        price: 120000
    },
    {
        id: 8,
        name: 'DRINKS NAME 8',
        image: '8_2.jfif',
        price: 120000
    },
    {
        id: 9,
        name: 'DRINKS NAME 9',
        image: '9_2.jpg',
        price: 120000
    }
];
//-----------------------------------------

let listCards  = [];
function initApp(){ //  --------------------------------> حفظ الطلب
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}