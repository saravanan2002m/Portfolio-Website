let roundBtn=document.querySelector('.round-btn')
let navbar=document.querySelector('.navbar')
let cancelBtn=document.querySelector('.cancel-btn')

roundBtn.addEventListener('click',function(e){
    navbar.style.display="block"
    cancelBtn.style.display="block"
})
cancelBtn.addEventListener('click',function(e){
    navbar.style.display="none"
    cancelBtn.style.display="none"
})
let nextBtn=document.querySelector('.next')
let separate=document.querySelector('.separate')
nextBtn.addEventListener('click',function(e){
    separate.style.display="flex"
})
const form=document.querySelector('form')
const input1=document.querySelector('#input-1')
const input2=document.querySelector('#input-2')
const text=document.querySelector('#text')
form.addEventListener('submit',function(e){
    if(!validateinputs()){
        e.preventDefault()
    }
})
function validateinputs(){
    const input1Val=input1.value.trim()
    const input2Val=input2.value.trim()
    const textVal=text.value.trim()
    success=true
    if(input1Val==""){
        success=false
    }
    else if(input2Val==""){
        success=false
    }
    else if(textVal==""){
        success=false
    }
    else{
        success=true
    }
    return success
}