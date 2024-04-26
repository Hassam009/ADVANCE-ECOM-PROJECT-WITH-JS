import { getCartProductFromLS } from "./getcartProducts";

getCartProductFromLS();

export const addtoCart=(Event,id,stock)=>{


let arrLocalStorageProduct=getCartProductFromLS();
     
    const currenProductElement=document.querySelector(`#card${id}`);
    let quantity=currenProductElement.querySelector(".productQuantity").innerText;
    let price=currenProductElement.querySelector(".productPrice").innerText;

//console.log(quantity,price)


price=price.replace("Rs", "");
price=Number(price*quantity);
quantity=Number(quantity);

arrLocalStorageProduct.push({id,quantity,price});
localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct))
 

updateCartValue(arrLocalStorageProduct);
} 








