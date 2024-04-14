const products=[
    {
        image:'images/levovo.jpg',
        title:'lenovo',
        price:5000
    },
    {
        image:'images/nokia.jpg',
        title:'Nokia',
        price:4000
    },
    {
        image:'images/oneplus.jpg',
        title:'OnePlus',
        price:25000
    },
    {
        image:'images/oppo.jpg',
        title:'Oppo',
        price:9000
    },
    {
        image:'images/samsung.jpg',
        title:'Samsung',
        price:10000
    },
    {
        image:'images/vivo.jpg',
        title:'Vivo',
        price:8000
    }
]
 //console.log(products)
const categories=[... new Set(products.map((items)=> {
    return items
}))]
var i=0;
//console.log(categories)
document.getElementById('content').innerHTML=categories.map((e)=>{
    var{image,title,price}=e;
    return(
        ` <div class="card">
        <img src='${image}'></img>
        <h2>${title}</h2>
        <p>${price}.00</p>`+
       "<button onclick='addcart("+(i++)+")'>Add to cart</button>"+
        `</div>
        `
    )
}).join("")

let cart=[]
function addcart(i){
    cart.push({...categories[i]})
 
    displaycart() 
    store()
}
// function delcart(e){
//     cart.splice(e,1)
//     displaycart()
// }
 function displaycart(){
    j=0, total=0
   
    document.getElementById('count').innerHTML=cart.length
    if(cart.length==0){
        document.getElementById('cart').innerHTML=`<h1>Your Cart is Empty</h1>`
        document.getElementById('total').innerHTML=0.00
    }else{
        document.getElementById('cart').innerHTML=cart.map((item)=>{
            var{image,title,price}=item;
            total=total+price
            document.getElementById('total').innerHTML=total
          
            return(
                `<div id="cart-items">
                <img src=${image}></img>
                <h2>${title}</h2>
                <p>${price}</p>
        
                <i class='fa-solid fa-trash'></i>
              </div>
              
             `
             
            )
          
        }).join("")
    }
  
    
 }

 function display(){
    show_item.classList.add('show')  
 }
 listItems=document.getElementById('cart')
 listItems.addEventListener('click',(e)=>{
    if(e.target.tagName=="I"){
        e.target.parentElement.remove()
    }
})
 function store(){
    localStorage.setItem('data',listItems.innerHTML)
}
function fun(){
    listItems.innerHTML=localStorage.getItem('data')
}
fun()




        // "<i class='fa-solid fa-trash' onclick='delcart("+(j++)+")'></i>"+`