// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => console.log(json))

const root=document.getElementById('root')

async function fetchProducts(){
    const response=await fetch('https://dummyjson.com/products')
    const ProductsCategories=await response.json()
    //console.log(ProductsCategories.products)
    return ProductsCategories.products
}
//fetchProducts()

async function renderData(){
    const categoriesProducts=await (fetchProducts())
    //console.log(categoriesProducts)
    Displaydata(categoriesProducts)
}

function Displaydata(categoriesProducts){

    //console.log(categoriesProducts)
    root.innerHTML=categoriesProducts.map((e)=>{
  
        return(
           
            ` 
            <div class="card">
            <img src='${e.thumbnail}'></img>
            <h2>${e.title}</h2>            
            <p>${e.description}</p>
            <div class="price">
            <h3>Price:<br>Rs. ${e.price}.00</h3>
            <h4>Discount: <br>${e.discountPercentage}%</h4>
            </div>
            <h5>Rating: ${e.rating} ⭐<h5>
            </div>
            `
        )
        
     
    
        
    }).join('')
}
renderData()
async function find(value){
    searchTerm=value.toLowerCase()
    //console.log(searchTerm)
   heading.innerHTML=`<h1>${value}</h1>`
    data=await(fetchProducts())
    //console.log(data)
    root.innerHTML=data.map((e)=>{
        if(searchTerm==e.category.toLowerCase()){
            return(
                ` 
            <div class="card">
            <img src='${e.thumbnail}'></img>
            <h2>${e.title}</h2>            
            <p>${e.description}</p>
            <div class="price">
            <h3>Price:<br>Rs. ${e.price}.00</h3>
            <h4>Discount: <br>${e.discountPercentage}%</h4>
            </div>
            <h5>Rating: ${e.rating} ⭐<h5>
            </div>
            `
            )
         
        }
     
     
        
    }).join('')

}

