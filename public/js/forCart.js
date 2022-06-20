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
