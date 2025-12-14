
let basket = JSON.parse(localStorage.getItem('data')) || [];
const shop = document.getElementById('shop');
const generateShop = ()=>{
    return (  shop.innerHTML = shopItemsData.map((items)=>{
        let {id,name,price,desc,img} = items;
        let search = basket.find((x)=> x.id === id)|| [];
        return ` <div class="item" id= product-id-${id}>
        <img src="${img}" alt="" width="222" height="200">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="priceQuantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
        
                 <button onclick = "decrement('${id}')" class="removeItem">remove</button>
                    <div id = ${id} class="quantity">
                    ${search.item === undefined ? 0:search.item}
                    </div>
                 
                 <button onclick = "increment('${id}')" class="addItem">Add to cart</button>

                </div>
            </div>
        </div>
    </div>`
    }).join(''))
};
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

 localStorage.setItem('data',JSON.stringify(basket));
}
const updated = (id)=>{
    let search = basket.find((x)=> x.id === id)
    document.getElementById(id).innerHTML = search.item;
    calculation()
}
const calculation = (id)=>{
let carIcon = document.getElementById('cartAmount');
  let aded = basket.map((x)=> x.item).reduce((x,y)=> x + y,0);
  carIcon.innerHTML = aded;
}
calculation();
let searchItems = ()=>{
    const searchBar = document.getElementById('searchInput').value.toLowerCase();
let filteredProducts = shopItemsData.filter((x)=>x.name.toLowerCase().includes(searchBar));
document.getElementById('shop').innerHTML = filteredProducts.map((product)=>{
    let {id,name,img,desc,price} = product;
    let search = basket.find((x)=> x.id === id) || [];
    return ` <div class="item" id= product-id-${id}>
        <img src="${img}" alt="" width="222" height="200">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="priceQuantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                 <button onclick = "decrement('${id}')" class="removeItem">remove</button>
                    <div id = ${id} class="quantity">
                    ${search.item === undefined ? 0:search.item}
                    </div>
                 <button onclick = "increment('${id}')" class="addItem">Add to cart</button>
                </div>
            </div>
        </div>
    </div>`
    }).join('');
}
searchItems();
generateShop();

