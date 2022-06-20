
const cardFormHandler = (event)=>{
    event.preventDefault();
    // console.log("click");

    const addcartBtn = event.target.querySelector('button');
    const productId = addcartBtn.dataset.id;
    const productPrice = addcartBtn.dataset.price;
    const quantity = event.target.querySelector('.number-select').value;
    // console.log({productId});
    // console.log({productPrice});
    // console.log({quantity});

    const buylistArray = JSON.parse(localStorage.getItem("buyinglist")) || [];
    const originItemQantity = JSON.parse(localStorage.getItem("numbersOfList")) || "0";
    const addItem = {id:productId,price:productPrice,quantity:quantity}
    buylistArray.push(addItem);
    localStorage.setItem("buyinglist", JSON.stringify(buylistArray));

    const addItemQantity = parseInt(originItemQantity)+parseInt(quantity);
    localStorage.setItem("numbersOfList", JSON.stringify(addItemQantity));

    const carNumEl = document.getElementById('lblCartCount');

    const carNum = localStorage.getItem('numbersOfList');

    if(!carNum || carNum===0 || carNum==="0"){
        carNumEl.setAttribute('css','display:none;')
    }else{
        while( carNumEl.firstChild ) {
        carNumEl.removeChild( carNumEl.firstChild );
        }
        carNumEl.appendChild( document.createTextNode(addItemQantity) );
    }
}


const constainerEl = document.getElementsByClassName('container');
for (const form of constainerEl) {
    form.addEventListener('submit', cardFormHandler);
}

