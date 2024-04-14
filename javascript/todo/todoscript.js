inputText=document.getElementById('addtext')
listItems=document.getElementById('todo-list')
function add(){

    if(inputText.value==""){
        alert('Enter Text')
    }else{
        li=document.createElement('li')
    

       // li.innerHTML=inputText.value+`<i class="fa-regular fa-trash-can" onclick=del(this)></i>`
       li.innerHTML=inputText.value
        listItems.append(li)
        inputText.value=""

        span=document.createElement('i')
        span.className="fa-regular fa-trash-can"
        li.append(span)


        
    }
   
store()

}
// function del(e){
//     e.parentElement.remove()
//     //e.parentElement.style.textDecoration="line-through"
 
// }
listItems.addEventListener('click',(e)=>{
    if(e.target.tagName=="I"){
        e.target.parentElement.remove()
    }
})
function store(){
    localStorage.setItem('items',listItems.innerHTML)
}
function show(){
   listItems.innerHTML=localStorage.getItem('items')
}
show()