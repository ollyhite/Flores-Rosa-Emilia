// const changeLang = (languageCode) => {
//         event.preventDefault();
//        console.log(languageCode);
//        document.documentElement.setAttribute("lang", languageCode);
//       };

//top btn
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//cart num

const carNum = localStorage.getItem("numbersOfList");
// console.log(carNum);
const carNumEl = document.getElementById("lblCartCount");
const addBtn = document.getElementsByClassName("addcart-btn");
// const val = parseInt(carNumEl.innerHTML);
// const quantity = document.querySelector('.number-select').value;

if (!carNum || carNum === 0 || carNum === "0") {
  localStorage.setItem("numbersOfList", 0);
  carNumEl.setAttribute("css", "display:none;");
} else {
  // const newNum = val + parseInt(quantity);
  console.log(carNum);
  while (carNumEl.firstChild) {
    carNumEl.removeChild(carNumEl.firstChild);
  }
  carNumEl.appendChild(document.createTextNode(carNum));
}
