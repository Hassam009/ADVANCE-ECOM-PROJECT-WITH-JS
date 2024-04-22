export const getCartProductFromLS=()=>{
let cartProducts=localStorage.getItem("cartProductLs");
if(!cartProducts){
    return[];
}

cartProducts=JSON.parse(cartProducts);
return cartProducts;

}