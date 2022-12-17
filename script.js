let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('pwd');
let button=document.getElementById('btn');
let messageDiv=document.getElementById('message');
emailInput.addEventListener("change",validate);
passwordInput.addEventListener("change",validate)

let message_emaildiv=document.getElementById('message_email');
let message_passworddiv=document.getElementById('message_password');

emailInput.onchange=validate();
passwordInput.onchange=validate();
function xyz()
{
   if(confirm()==true)
   {
       alert("successfull signup!")
   }
   if(confirm()==false)
   {
       emailInput.value="";
       passwordInput.value="";
       messageDiv.innerText="Kindly check your mail id,password!"
   }
   
}

function validate()
{

    let email=emailInput.value;
    

    let password=passwordInput.value;
    

    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8) {
       
       
        if(password != "" && password.length>8)
       {
          messageDiv.innerText="All good to go!";
        messageDiv.style.color="green";
        message_emaildiv.innerText="";
        message_passworddiv.innerText="";
       
       }
        else{
           
            messageDiv.innerText="Email or password is invalid";
             message_emaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
             message_emaildiv.style.color="red";
             message_passworddiv.innerText=" Make sure password is more than 8 characters.";
             message_passworddiv.style.color="red";
     
             console.log("Email or password is invalid");
         }
     
    }

  
       
        else(password != "" && password.length>8)
      {
    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8){
          
            messageDiv.innerText="All good to go!";
            messageDiv.style.color="green";
           

        message_emaildiv.innerText="";
        message_passworddiv.innerText="";
      
       

        }
        else{
            
            messageDiv.innerText="";
             message_emaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
             message_emaildiv.style.color="red";
             message_passworddiv.innerText=" Make sure password is more than 8 characters.";
             message_passworddiv.style.color="red";
             console.log("Email or password is invalid");
         }
     }
}