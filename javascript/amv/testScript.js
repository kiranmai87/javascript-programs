

fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
.then(res=>res.json())
.then(data=> {
      item=data.categories
      console.log(item)
    
}
)
function find(){
 
      inputValue=document.getElementById('search').value.toLowerCase()
      for(i=0;i<item.length;i++){
            const categoryName=item[i].category_name.toLowerCase()
            //console.log(categoryName)
            if(categoryName==inputValue){
                  //console.log(item[i].category_products)
                  const men=item[i].category_products
                  //console.log(men)
                  root=document.getElementById('root')
                  root.innerHTML=men.map((e)=>{
                        //console.log(e.id)
                       
                        return(

                              `
                              <tr>                             
                              <td>${e.id}</td>
                              <td>${e.title}</td>  
                              <td>${e.price}</td> 
                              <td><img src="${e.image}"/></td> 
                              <td><img src="${e.second_image}"/></td> 
                              <td>${e.badge_text}</td>  
                              <td>${e.vendor}</td>    
                                                
                               </tr>`
                        )
                  }).join('')
            }
   
     
}
} 












// console.log(data.categories[0].category_products[0]
//     )
   