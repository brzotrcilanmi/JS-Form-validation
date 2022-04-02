let userName = document.getElementById('name');
let email = document.getElementById('email');
let web = document.getElementById('web-site');
let message = document.getElementById('message');
let confirmBtn = document.getElementById('confirm');

let errorName = document.querySelector('.error-name')
let errorEmail = document.querySelector('.error-email')
let errorWeb = document.querySelector('.error-website')
let errorMessage = document.querySelector('.error-message')
let errorMain = document.querySelector('.main-error')

let modal = document.querySelector('.modal')
let continueBtn = document.getElementById('continue')

confirmBtn.addEventListener('click', ()=>{
    let nameInput = userName.value;
    let emailInput = email.value;
    let webInput = web.value;
    let messageInput = message.value;
    
    if(nameInput === '' || messageInput === ''|| emailInput === ''){
        errorMain.textContent = "Please fill required fields!"
    }else{
        errorMain.textContent =''
    }
    if(nameInput === ''){
        errorName.textContent = 'Please fill required field!'   
        userName.style.border= "3px solid red"
        
    }else{
        userName.style.border= "none"
        errorName.textContent=''
    } 
    if(emailInput === ''){
        errorEmail.textContent = 'Please fill required field!'    
        email.style.border= "3px solid red"
    } else{
        errorEmail.textContent= '';
        email.style.border= "none"
    }
     if(messageInput === ''){
        message.style.border= "3px solid red"
        errorMessage.textContent = 'Please fill required field!'   
    }else{
        errorMessage.textContent = ''   
        message.style.border= "none"
    }
    if( nameInput !== '' && messageInput !== ''&& emailInput !== ''){
        modal.style.display = "block";
    }
})


continueBtn.addEventListener('click', ()=> modal.style.display = 'none');
window.onkeydown = (e) =>{
    if(e.keyCode == 27){
        modal.style.display = 'none'
    }
}

