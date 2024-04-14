// async function fetchCategories(){
//     const response=await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
//     const CategoriesData=await response.json()
//     //console.log(CategoriesData.categories)
//     return CategoriesData.categories

// }


// async function renderData(){
//     const categoriesProducts=await (fetchCategories())
//     //console.log(categoriesProducts)
//     //console.log(categoriesProducts.length)
//     if(!categoriesProducts.length){
//         document.getElementById('root').innerHTML=`<h1>No Products Available</h1>`
//     }else{
       
//         DisplayData(categoriesProducts,0)
//         DisplayData(categoriesProducts,1)
//         DisplayData(categoriesProducts,2)
//         DisplayData(categoriesProducts,3)
        
//     }
// }

// function DisplayData(categoriesProducts,index){
//     root=document.getElementById('root')
//     let data=['Men','Women','Kids']
//     data.map((category)=>{
//         const productItems=categoriesProducts.find(cat=>cat.category_name==category)?.category_products
//         r1=productItems[index]
    
//         const tr=document.createElement('tr')
//         tr.innerHTML=`
//         <td style="font-weight:bold;">${category}</td>
//         <td>${r1.id}</td>
//         <td>${r1.title}</td>
//         <td>Rs. ${r1.price}</td> 
//         <td><img src=${r1.image} /></td>
//         <td>${r1.badge_text}</td>  
//         <td>${r1.vendor}</td> 
              
//         `
//        root.append(tr)
//        td=document.createElement('td')
//        span=document.createElement('i')
//        span.className="fa-regular fa-trash-can"
//        td.append(span)
//        tr.append(td)
        
  
//     })    
// }
// renderData()

// root.addEventListener('click',(e)=>{
    
//     if(e.target.tagName=="I"){
//       // console.log(e.target.parentElement.parentElement)       
//          e.target.parentElement.parentElement.remove()
//     }
// })


async function fetchproductCategories(){
    const response=await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
    const products=await response.json()
    return products.categories

}


async function renderProducts(){
    const productsCategories=await fetchproductCategories() 
    console.log(productsCategories)
    if(!productsCategories.length){
        document.getElementById('root').innerHTML=<h1>No products are available</h1>
    
    }else{
        ListAllproducts(productsCategories)

    }
}



 function ListAllproducts(productsCategories){
    const appElement=document.getElementById('root')
    var data=["Men","Women","Kids"]

    data.map(category=>{
        const categoryProducts=productsCategories.find(ctg=>ctg.category_name===category)?.category_products
        if(!categoryProducts.length){
            appElement.innerHTML+=<h2>no products are avalibale in ${category}</h2>
        }

        const productList=document.createElement('ul')
        appElement.appendChild(productList)

        categoryProducts.map(product=>{
            const listitem=document.createElement('li')
            listitem.innerHTML=${product.title}<br><img src=${product.image} width="200" height="200"/>
            productList.append(listitem)
           
        })

    })
}

renderProducts()