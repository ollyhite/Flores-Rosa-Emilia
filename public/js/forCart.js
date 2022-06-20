const addcart = document.getElementById("addcartbtn");
const numberSel = document.getElementById("quantity");
// const quantity = numberSel.value;
const product_id = parseInt(addcart.dataset.a);
const price = parseInt(addcart.dataset.b);
const user_id = addcart.dataset.c;
let quantity = "";
function checkTextbox(element) {
  var check = element.value;
  quantity = check;
  return quantity;
}

console.log(quantity);

function test1() {
  console.log(user_id);
  console.log(product_id);
  console.log(price);
  console.log(quantity);

  const buylistArray = JSON.parse(localStorage.getItem("buyinglist")) || [];
    const originItemQantity = JSON.parse(localStorage.getItem("numbersOfList")) || "0";
    const addItem = {id:product_id,price:price,quantity:quantity}
    buylistArray.push(addItem);
    localStorage.setItem("buyinglist", JSON.stringify(buylistArray));

    const addItemQantity = parseInt(originItemQantity)+parseInt(quantity);
    console.log(addItemQantity);
    localStorage.setItem("numbersOfList", JSON.stringify(addItemQantity));

    const carNumEl = document.getElementById('lblCartCount');
    var val = parseInt(carNumEl.innerHTML);
    const newNum = val + parseInt(quantity);
    while( carNumEl.firstChild ) {
    carNumEl.removeChild( carNumEl.firstChild );
    }
    carNumEl.appendChild( document.createTextNode(newNum) );
}

addcart.addEventListener("click", test1);



// comment api

const commentsFormHandler = async (event) => {
  event.preventDefault();
  const submitBtn = document.querySelector('.submit')
    const isLogin = submitBtn.dataset.login;
    if(isLogin){
    const review_title = document.querySelector('#review_title').value.trim();
    const review_text = document.querySelector("#review_text").value.trim()
    const rating = document.querySelector("#rating").value
    const product_id = submitBtn.dataset.productId;
    const user_id = submitBtn.dataset.userId;

    // const product_id = Number(submitBtn.value);
        console.log({reviewTitle});
        console.log({reviewText});
        console.log({product_id});
        console.log({rating});
        console.log({user_id});

    if (review_title && review_text && product_id && rating) {
        const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({ reviewTitle, reviewText, product_id,rating,user_id }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace(`/product/${product_id}`);
        } else {
        alert('Failed to add reviews.');
        }
    }
  }else{
    alert('Please Login first')
    document.location.replace(`/login`);
  }
};

document
    .querySelector('.reviews-form')
    .addEventListener('submit', commentsFormHandler);