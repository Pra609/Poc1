var loginValidated=false;
 

function login(){

    
 
    var email =document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //console.log(email+"email");

    var email1=localStorage.getItem("email");
    var password1=localStorage.getItem("password");

    if(email1.match(email) && password1.match(password)){
        loginValidated=true;
    }
  
      console.log(loginValidated+"loginvalidated");

     
   if(loginValidated==true){
   alert("login success")
 
  
   }else{
    alert("password or email is incorrect")
    return false;
   }

   
	

    

  
};
