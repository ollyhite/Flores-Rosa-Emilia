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
}

addcart.addEventListener("click", test1);
