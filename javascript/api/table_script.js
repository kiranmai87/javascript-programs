// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(data => {
//         const root=document.getElementById('root')
//         root.innerHTML=data.map((e)=>
//         {
//             return(
//                 `<tr>
//                     <tr>
//                         <td>${e.userId}</td>
//                         <td>${e.id}</td>
//                         <td>${e.title}</td>
//                         <td>${e.completed}</td>
//                     </tr>
//                 </tr>`
//             )
//         }).join("")
//         console.log(data)
//         console.log(data.includes(1))
//       })


    

    fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    const root=document.getElementById('root')
    root.innerHTML=data.map((e)=>{
        return(
           `<tr>
           <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.price}</td>
                <td>${e.description}</td>
                <td>${e.category}</td>
                <td><img src="${e.image}"/></td>
                <td>${e.rating.count}</td>
                <td>${e.rating.rate} ⭐</td>
            </tr>`
            
        )

    }).join('')
}
    
)

function search() {
         searchValue=document.getElementById('inputsearch')
         searchTerm=searchValue.value.toLowerCase()
        
        if(searchTerm==""){
            alert('Enter Text')
           
        }else{

        let table = document.getElementById("root");
        let rows = table.querySelectorAll(" #root tr");
    
        for ( i = 0; i <= rows.length; i++) {
            let row = rows[i];
            let cells = row.querySelectorAll("#root tr td");
            let flag = false;
            for (j = 0; j < cells.length; j++) {
                let cell = cells[j];
               
                    let cellText1 = cell.innerHTML ;
                    cellText=cellText1.toLowerCase()
                   
                 
                    if (cellText.includes(searchTerm))  
                    {
                        flag= true;  
                        //console.log(cellText.includes(searchTerm).length)
                    } 
                
            }
            if (flag) {
                row.style.display ="";
                       
            } 
            else {
                row.style.display = "none"
            }
        }
       
       
    }
   
}
    
       
    
    


 
   // console.log(data)
   // console.log(data[1].title.includes('mens'))
    //console.log(data.length)



// row= document.querySelectorAll('td').value
// console.log(row)




  
    //  let cart=[]
    //     for(i=0;i<=data.length;i++){
           
    //         if(data[i].title.includes(inputValue)){   
            
    //             cart.push(data[i])
    //             const root1=document.getElementById('search-display')
    //             root1.innerHTML=cart.map((e)=>{
    //                 return(
    //                    `<tr>
    //                    <td>${e.id}</td>
    //                         <td>${e.title}</td>
    //                         <td>${e.price}</td>
    //                         <td>${e.description}</td>
    //                         <td>${e.category}</td>
    //                         <td><img src="${e.image}"/></td>
    //                         <td>${e.rating.count}</td>
    //                         <td>${e.rating.rate}</td>
    //                     </tr>`
                        
    //                 )
            
    //             }).join('')
               
               
                
    //        }
    //        console.log(cart)
            
    //  } 
       
 
   
  
    
        
//     searchValue=document.getElementById('inputsearch')
//     searchTerm=searchValue.value.toLowerCase()
//     //error=document.getElementById('error')
//     function search(){
//         //error.innerHTML=searchValue.value
//          let tr=document.querySelectorAll('#root tr')
//         // tr.forEach(row=>{
//         //     row.querySelectorAll('td').forEach(td=>{
//         //         if(td.textContent.toLowerCase().includes(searchTerm)){
//         //             const root1=document.getElementById('search-display')
//         //             root1.innerHTML=tr.value
                    
//         //         }
//         //     })

//         // })
      
//     }



//   const root=document.getElementById('root')
//   fetchData()
//     root.innerHTML=data.map((e)=>{
//         return(
//            `<tr>
//            <td>${e.id}</td>
//                 <td>${e.title}</td>
//                 <td>${e.price}</td>
//                 <td>${e.description}</td>
//                 <td>${e.category}</td>
//                 <td><img src="${e.image}"/></td>
//                 <td>${e.rating.count}</td>
//                 <td>${e.rating.rate}</td>
//             </tr>`
            
//         )

//     }).join('')
