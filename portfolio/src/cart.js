let basket = JSON.parse(localStorage.getItem('data')) || [];
const shopingCart = document.getElementById('shopingCart');
const totalBill = document.getElementById('label');

const calculation = (id)=>{
let carIcon = document.getElementById('cartAmount');
  let aded = basket.map((x)=> x.item).reduce((x,y)=> x + y,0);
  carIcon.innerHTML = aded;
}
calculation();
const generateCartItem = ()=>{
    if (basket.length !== 0) {
      return (shopingCart.innerHTML = basket.map((x)=>{
        let {id,item} = x;
        let search = shopItemsData.find((y)=> y.id === id) || [];
         return `<div class = 'cart-item'>
        <img src=${search.img} alt="" width="150" height = "100">
          <div class = 'cartdetails'>
             <div class = text-price-x>
             <h4 class = 'title'>
               <p >${search.name}</p>
               <p class = 'selected-price'>$ ${search.price}</p>

             </h4>
             <i onclick="removeitem('${id}')" class="bi bi-x-lg"></i>
             </div> 
                   <div class="buttons">
                    <i onclick = "decrement('${id}')" class="bi bi-dash-lg"></i>
                    <div id = ${id} class="quantity">${item} </div>
                    <i onclick = "increment('${id}')" class="bi bi-plus-lg"></i>
               </div> 
               <h3 class = 'item-P'>$ ${item * search.price}</h3>   
           </div>
        
         </div>`
       }).join(''));
    }else{
        shopingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is empty</h2>
        <a href ='index.html'> <button class = 'emptyBtn'> back to home page</button> </a>
        `
    }
}
generateCartItem();

const increment = (id)=>{
    let selected = id;
    let search = basket.find((x)=> x.id === selected);
    if (search === undefined) {
        basket.push({
        id:selected,
        item:1
    })
    }else{
        search.item +=1
    }
generateCartItem();

updated(selected)
localStorage.setItem('data',JSON.stringify(basket))
}
const decrement = (id)=>{
 let selectedDec = id;
 let search = basket.find((x)=> x.id === selectedDec);
 if(search === undefined){
  return
 }else if (search.item === 0) {
   return
 }else{
    search.item -=1
 }
updated(selectedDec);
 basket = basket.filter((x)=> x.item !== 0);
generateCartItem();

 localStorage.setItem('data',JSON.stringify(basket));
}
const updated = (id)=>{
    let search = basket.find((x)=> x.id === id)
    document.getElementById(id).innerHTML = search.item;
    calculation()
totalAmount()

}
const removeitem = (id)=>{
  let selectedId = id;
 basket = basket.filter((x)=>x.id !== selectedId)
generateCartItem();
calculation()
totalAmount();
localStorage.setItem('data',JSON.stringify(basket))
};
const clearCart = ()=>{
  basket =[];
generateCartItem();
calculation()
localStorage.setItem('data',JSON.stringify(basket))

}
const totalAmount = ()=>{
  if (basket.length !== 0) {
    let amount = basket.map((x)=>{    
      let {id , item} = x;
      let search = shopItemsData.find((y)=> y.id === id) || [];
      return item * search.price
    }).reduce((x,y)=> x+y,0)
   totalBill.innerHTML = `
   <h2> Total Bill: $ ${amount}</h2>
   <button class = 'checkbtn'>Check out</button>
   <button onclick = "clearCart()" class = 'removebtn'>Clear cart</button>
  
   `
 

   
  } else {
    return
  }
}
totalAmount();
