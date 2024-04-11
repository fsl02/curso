
let formProdutos = document.getElementById('form-produtos');
let inputName = document.getElementById('input-name');
let inputPrice = document.getElementById('input-price');
let inputNameError = document.getElementById('input-name-error');
let inputPriceError = document.getElementById('input-price-error');
let formMsg = document.getElementById('form-msg');
let productList = document.getElementById('product-list');

let storage = window.localStorage.getItem('products');
storage = JSON.parse(storage);

storage.forEach(function (item, index) {
    let trNode = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdAction = document.createElement('td');
    
    let editLink = document.createElement('a');
    editLink.href = "#edit";
    editLink.textContent = "Editar ";
    
    let deleteLink = document.createElement('a');
    deleteLink.href = "#delete";
    deleteLink.textContent = "Excluir ";
    deleteLink.dataset.index = index;

    tdAction.append(editLink, deleteLink);

    tdName.textContent = item.name;
    tdPrice.textContent = item.price;
    trNode.append(tdName, tdPrice, tdAction);
    productList.querySelector('tbody').prepend(trNode);
})

console.log(storage);

formProdutos.addEventListener('submit', event => {
    event.preventDefault();

    inputNameError.textContent = '';
    inputPriceError.textContent = '';

    let hasError = false;

    if(!inputName.value){
        inputNameError.textContent = 'Campo Nome precisa ser preenchido';
        hasError = true;
    }

    if(!inputPrice.value) {
        inputPriceError.textContent = 'Campo Preço precisa ser preenchido';
        hasError = true;
    }

    if(hasError) {
        formMsg.classList.remove('show');
        return;
    }

    let product = {
        name: inputName.value,
        price: inputPrice.value
    }

    storage.push(product);

    window.localStorage.setItem('products', JSON.stringify(storage));
    
    let trNode = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdAction = document.createElement('td');

    tdName.textContent = inputName.value;
    tdPrice.textContent = inputPrice.value;
    trNode.append(tdName, tdPrice, tdAction);

    productList.querySelector('tbody').prepend(trNode);

    formMsg.classList.add('show');
    formProdutos.reset();

    setTimeout(() => {
        formMsg.classList.remove('show');
    }, 2000);
    
});






/*let byTagName = document.getElementsByTagName('h1')
let byClassName = document.getElementsByClassName('meu_titulo')
let byId = document.getElementById('titulo-1');
let bySelector = document.querySelector('.body .meu_titulo')
let bySelectorAll = document.querySelectorAll('.body .meu_titulo')

console.log('antes do for');

for (let index = 0; index <= 10000000000; index++){
    index += 10
}

console.log({
    byTagName, 
    byClassName, 
    byId, 
    bySelector, 
    bySelectorAll
})*/