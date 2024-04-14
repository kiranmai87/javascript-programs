//even or odd
// function check(){
//     n1=Number(document.getElementById('input1').value)
// if(n1%2==0){
//     document.write('its even')
// }else{
//     document.write('its odd')
// }
// }
// document.getElementById('result').addEventListener('click',check)


//print table
// function table(){
//     n1=Number(document.getElementById('input1').value)
//      i=1
//      while(i<=10){
//         document.write(n1+' X '+i+'='+n1*i+'<br>')
//         i++
//      }
// }
// document.getElementById('result').addEventListener('click',table)


//decending order 99 to 69

// for(i=99;i>=69;i--){
//     document.write('<br>'+i+'<br>')
// }


//sum of 2 and 3 multiples under 100
// two=0
// three=0
// for(i=0;i<=100;i++){
//     total=2*i
//     two+=total  
// }
// // document.write(two)
// for(i=0;i<=100;i++){
//     total=3*i
//     three+=total  
// }
// document.write(three+two)


//callback to return string

// function call(){
//     n1=document.getElementById('input1').value
//     document.write(n1)
// }
// document.getElementById('result').addEventListener('click',call)


//NULL,NANN, UNDEFINED
// var a
// document.write(a+'<br>')

// var b=null
// document.write(b+'<br>')

// document.write('a'*'b')

// sum=0
// for(i=0;i<=6;i++){
//     if(i%2==0 || i%3==0){
//         sum+=i
//     }
// }
// document.write('<br>'+sum)



//switch case
// function call(){
//     var marks=document.getElementById('input1').value
// switch(true){
//     case marks>=75 && marks<100:
//         document.getElementById('display').innerHTML='A+'
//         break    
//     case marks>=50 && marks<75:
//         document.write('B+')
//         break
//     case marks>=35 && marks<50:
//         document.write('C+')
//         break
//     case marks>=0 && marks<35:
//         document.write('D+')
//         break    
//     default:
//         document.write ('Error')  
// }
// }

// document.getElementById('result').addEventListener('click',call)











//zomato script

// function login_form(){
//     display.classList.add('overlay')
// }
// function signup_form(){
//     signup_display.classList.add('signup-overlay')
// }
// function close_form(){
//     display.classList.remove('overlay')
//     signup_display.classList.remove('signup-overlay')
// }




// qr script

// user=document.getElementById('username')
// function qrGenerator(){
//     qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+user.value
// }

//form validation
form.addEventListener('submit',e=>{
    e.preventDefault()
    validInputs()
})

const setError=(element,message)=>{
    const inputControl=element.parentElement
    const errorDisplay=inputControl.querySelector('.error')
    errorDisplay.innerText=message
}
const setSuccess=(element)=>{
    const inputControl=element.parentElement
    const errorDisplay=inputControl.querySelector('.error')
    errorDisplay.innerText=''
}
const vaildEmail=email=>{
    const re= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        return re.test(String(email).toLowerCase())
}
const hideimage=(e,image)=>{
    const inputControl=e.parentElement
    const imageDisplay=inputControl.getElementById('eye')
    imageDisplay.innerHTML=image
}


const validInputs=()=>{
    const usernameValue=username.value
    const userEmailValue=email.value
    const userPassword=password.value
    const confirmPassword=password1.value 

//username vallidation

    if(usernameValue===""){
        setError(username,"* Username Required")
    }else{
        setSuccess(username)
    }
//email validation
    if(userEmailValue===""){
        setError(email,"* Email Required")
    }else if(!vaildEmail(userEmailValue)){
        setError(email,"* Provide valid email Adress")
    }else{
        setSuccess(email)
    }
//password validation
    if(userPassword==="")  {
        setError(password,"* Password Required")
    }else if(userPassword.length<8){
        setError(password,"* password must be 8 characters")
    }else{
        setSuccess(password)
    }
 
// confirm password validtaion    
    if(confirmPassword==="")  {
        setError(password1,"* Password Required")
    }else if(userPassword!=confirmPassword){
        setError(password1,"* password mismatch")
    }else{
        setSuccess(password1)
    }
  

}


function fun(){
    if (password.value==""){
        eye.classList='fa-solid fa-eye-slash'
     }else if(password.type=="password"){
         password.type='text'
         eye.classList='fa-solid fa-eye'
     }else{
         password.type='password'
         eye.classList='fa-solid fa-eye-slash'
     }
}
 
    
    // document.getElementById('eye').addEventListener('click',eye)