let qrbutton=document.querySelector(".btn")
let qrinput=document.querySelector(".input")
let qrimage=document.querySelector(".image")
let qrtext=document.querySelector(".text")

qrbutton.addEventListener("click", ()=>{
    const inputValue=qrinput.value
    if(!inputValue){
        alert("Please enter the valid URL")
        return;
    }
    else{
        qrimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        qrtext.innerHTML=`QR-CODE`
       
    }
    

})




