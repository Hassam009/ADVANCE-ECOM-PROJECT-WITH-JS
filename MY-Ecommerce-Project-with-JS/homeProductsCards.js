

const productContainer=document.querySelector(".productContainer");

const productTemplate=document.querySelector(".productTemplate")


export const showProductContainer=(products)=>{
if(!products){
    return false;
}

 prducts.forEach((curProd)=>{
    const {brand, category,description, id, image, name,price,stock}=curProd;
 
const productClone=document.importNode(productTemplate.textContent,true);

productClone.querySelector('.productName').textContent=name;

productContainer.append(productClone);
});
}