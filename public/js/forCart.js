const addcart = document.querySelector("#addcartbtn");
const addQ = document.querySelector("#quantity");
addcart.addEventListener("click", test1);
function test1() {
  const product_id = parseInt(addcart.dataset.a);
  const price = parseInt(addcart.dataset.b);
  console.log(product_id);
  console.log(price);
  console.log(addQ);
}

const response = fetch("/api/cart", {
  method: "POST",
  body: JSON.stringify((user_id, product_id, price, quantity)),
  headers: { "Content-Type": application / json },
});
if (response.ok) {
  console.log("Good!");
} else console.log("Bad!");
