

function hover(element) {
    console.log(element);
    const iconId = element.getAttribute('id')
    console.log(iconId);
    if(iconId==="facebook"){
        element.setAttribute('src', '/images/fb_hover.svg');
    }else{
        element.setAttribute('src', '/images/whatapp_hover.svg');
    }
}

function unhover(element) {
    console.log(element);
    const iconId = element.getAttribute('id')
    console.log(iconId);
    if(iconId==="facebook"){
        element.setAttribute('src', '/images/facebook.svg');
    }else{
        element.setAttribute('src', '/images/whatsapp.svg');
    }
}