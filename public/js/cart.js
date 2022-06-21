//generater the shopping list in cart page
const shoppingList = JSON.parse(localStorage.getItem('buyinglist'))
console.log("shoppingList",shoppingList);
const emptyH1 = document.querySelector("#empty-cart")
if(!shoppingList||shoppingList.length<0||shoppingList===null){
    emptyH1.setAttribute('style','display:block;')
    
}else{
    for (let i = 0; i < shoppingList.length; i++) {
        const element = shoppingList[i];
        console.log(element);
        
    emptyH1.setAttribute('style', 'display:none;')
    const accordionEl = document.createElement('div');
    accordionEl.setAttribute('id','accordionExample');
    accordionEl.classList.add('accordion');
    const leftSection = document.querySelector('#cart-left');
    leftSection.appendChild(accordionEl)
    const accordionItemEl = document.createElement('div');
    accordionItemEl.classList.add("accordion-item", "mb-5")
    accordionEl.appendChild(accordionItemEl);

    const accordionHeaderEl = document.createElement('h2');
    accordionHeaderEl.classList.add("accordion-header","delete-frame", "d-flex", "align-items-center");
    accordionHeaderEl.setAttribute("id",`heading${element.id}`)
    accordionItemEl.appendChild(accordionHeaderEl);


    const accordionBtnEl = document.createElement('button');
    accordionBtnEl.classList.add("accordion-button");
    accordionBtnEl.setAttribute('type','button');
    accordionBtnEl.setAttribute('data-bs-toggle','collapse');
    accordionBtnEl.setAttribute('data-bs-target',`#collapse${element.id}`);
    accordionBtnEl.setAttribute('aria-expanded','true');
    accordionBtnEl.setAttribute('aria-controls',`collapse${element.id}`);
    accordionBtnEl.textContent=`${element.name}`;
    accordionHeaderEl.appendChild(accordionBtnEl)

    const deletBtnEl = document.createElement('button');
    deletBtnEl.classList.add("btn", "btn-link","delete", "me-md-2");
    deletBtnEl.setAttribute("onclick","removeLi()")
    deletBtnEl.setAttribute("type","button")
    deletBtnEl.setAttribute("id","delete-btn")
    deletBtnEl.setAttribute("data-id",`${i}`)
    const deletIcon = document.createElement('img')
    deletIcon.setAttribute("src",'/images/delete_icon.svg')
    deletBtnEl.appendChild(deletIcon);
    accordionHeaderEl.appendChild(deletBtnEl)

    const accordionCollapseEl = document.createElement('div')
    accordionCollapseEl.classList.add("accordion-collapse","collapse", "show");
    accordionCollapseEl.setAttribute('id',`collapse${element.id}`)
    accordionCollapseEl.setAttribute('aria-labelledby',`heading${element.id}`)
    accordionCollapseEl.setAttribute('data-bs-parent','#accordionExample')
    accordionItemEl.appendChild(accordionCollapseEl)


    const accordionBody = document.createElement('div');
    accordionBody.classList.add('accordion-body',"deleteItem");
    accordionCollapseEl.appendChild(accordionBody);

    const rowEl = document.createElement('div');
    rowEl.classList.add('row');
    accordionBody.appendChild(rowEl);
    
    const col1El = document.createElement('div');
    col1El.classList.add('col','order-1');
    rowEl.appendChild(col1El);

    const col1Title = document.createElement('h5');
    col1Title.textContent = "Pictuture";
    col1El.appendChild(col1Title);


    const col1Img = document.createElement('img');
    col1Img.setAttribute('src', `${element.img}`);
    col1Img.classList.add('w-50');
    col1El.appendChild(col1Img);

    const col2El = document.createElement('div');
    col2El.classList.add('col','order-2');
    rowEl.appendChild(col2El);

    const col2Title = document.createElement('h5');
    col2Title.textContent = "Name";
    col2El.appendChild(col2Title);

    const col2P = document.createElement('p');
    col2P.textContent=`${element.name}`
    col2El.appendChild(col2P);

    const col3El = document.createElement('div');
    col3El.classList.add('col','order-3');
    rowEl.appendChild(col3El);

    const col3Title = document.createElement('h5');
    col3Title.textContent = "Price";
    col3El.appendChild(col3Title);

    const col3P = document.createElement('p');
    col3P.textContent=`$ ${element.price} USD`
    col3El.appendChild(col3P);
    
    const col4El = document.createElement('div');
    col4El.classList.add('col','order-4');
    rowEl.appendChild(col4El);

    const col4Title = document.createElement('h5');
    col4Title.textContent = "Quantity";
    col4El.appendChild(col4Title);

    const col4P = document.createElement('input');
    col4P.classList.add("form-control")
    col4P.setAttribute('type','number')
    col4P.setAttribute('id','number-input')
    col4P.setAttribute('min','0')
    col4P.setAttribute('value',`${element.quantity}`)
    // col4P.setAttribute("onchange","changeNum()")
    col4El.appendChild(col4P);

    // const col5El = document.createElement('div');
    // col5El.classList.add('col','order-5');
    // rowEl.appendChild(col5El);

    // const col5Title = document.createElement('h5');
    // col5Title.textContent = "Total";
    // col5El.appendChild(col5Title);

    // const col5P = document.createElement('p');
    // const totlePrice = Number(col4P.value)* Number(element.price)
    // col5P.textContent=`$ ${totlePrice} USD`
    // col5El.appendChild(col5P);

    }
    
    
}

//delete item in shopping list 
const removeLi =(event)=>{
    event.preventDefault();
    console.log('delet');
    console.log(event.target);
    const thisBtn = event.target.parentNode;
    console.log(thisBtn);
    const index = shoppingList.indexOf(thisBtn.dataset.id);
    if (index) {
    shoppingList.splice(index, 1); // 2nd parameter means remove one item only
    const originItemQantity = JSON.parse(localStorage.getItem("numbersOfList")) || "0";
    const newNum = parseInt(originItemQantity)-1;
    localStorage.setItem("numbersOfList",JSON.stringify(newNum))
    }
    thisBtn.parentNode.parentNode.remove();
    localStorage.setItem("buyinglist",JSON.stringify(shoppingList))
    window.location.reload();  
}

const changeNum=(event)=>{
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.value);
    const thisInput = event.target;
    thisInput.setAttribute('value',event.target.value);
    const price = event.target.parentNode;
    console.log(price);
    
}

// const cartEl = document.getElementsByClassName('cart-left');
const cartEl = document.getElementsByClassName('deleteItem');
const headerEl = document.getElementsByClassName('delete-frame');
const deleteBtn = document.querySelector('#delete-btn');

for (const input of cartEl) {
    input.addEventListener('change', changeNum);
}

for (const deleteBtn of headerEl) {
    deleteBtn.addEventListener('click', removeLi);
}