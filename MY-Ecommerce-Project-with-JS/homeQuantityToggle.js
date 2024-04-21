export const homeQuantityToggle=(Event,id,stock)=>{

 const currentProductElement=document.querySelector(`#card${id}`)
// console.log(currentProductElement)

const productQuantity=currentProductElement.querySelector('.productQuantity');

let quantity=parseInt(productQuantity.getAttribute('data-quantity')) || 1;

if(Event.target.className==='cartIncrement'){
    if(quantity<stock){
        quantity+=1;
    }else if(quantity===stock){
        quantity=stock;
    }
}

if(Event.target.className==='cartDecrement'){
    if(quantity>1){
        quantity-=1;
    }
}  


productQuantity.innerText=quantity;
productQuantity.setAttribute("data-quantity", quantity.toString());
return quantity;
}   