
const cardFormHandler = (event)=>{
    event.preventDefault();

    const addcartBtn = event.target.querySelector('button');
    console.log(addcartBtn);
    const productId = addcartBtn.dataset.id;
    const productPrice = addcartBtn.dataset.price;
    const quantity = event.target.querySelector('.number-select').value;
    console.log({productId});
    console.log({productPrice});
    console.log({quantity});
}



// addcartBtn.addEventListener("click",addProduct(this));

const constainerEl = document.getElementsByClassName('container');
// const cardEl = document.getElementsByClassName('card');
for (const form of constainerEl) {
    form.addEventListener('submit', cardFormHandler);
}