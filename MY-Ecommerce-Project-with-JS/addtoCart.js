export const addtoCart=(Event,id,stock)=>{
    const currenProductElement=document.querySelector(`#card${id}`);

    let quantity=currenProductElement.querySelector(".productQuantity").innerText;
    let price=currenProductElement.querySelector(".productPrice").innerText;

console.log(quantity,price)
}