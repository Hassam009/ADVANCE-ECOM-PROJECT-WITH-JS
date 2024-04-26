import { getCartProductFromLS } from "./getcartProducts";

getCartProductFromLS();

export const addtoCart=(Event,id,stock)=>{


let arrLocalStorageProduct=getCartProductFromLS();
     
    const currenProductElement=document.querySelector(`#card${id}`);
    let quantity=currenProductElement.querySelector(".productQuantity").innerText;
    let price=currenProductElement.querySelector(".productPrice").innerText;

//console.log(quantity,price)

let existingProd=arrLocalStorageProduct.find((curProd)=>
    curProd.id===id
);



if (existingProd && quantity > 1) {
    quantity = Number(existingProd.quantity) + Number(quantity);
    price = Number(price * quantity);
    let updatedCart = { id, quantity, price };

    updatedCart = arrLocalStorageProduct.map((curProd) => {
      return curProd.id === id ? updatedCart : curProd;
    });
    console.log(updatedCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    //show toast when product added to the cart
    showToast("add", id);
  }

  if (existingProd) {
    // alert("bhai duplicate hai");
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);

  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  //update the cart button value
  updateCartValue(arrLocalStorageProduct);

} 








