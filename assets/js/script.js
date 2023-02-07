function signup(){

    
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email =document.getElementById("email").value;
    var password = document.getElementById("password").value;
 
    
  
    localStorage.setItem("name",name);
    localStorage.setItem("contact",contact);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

    console.log(name+".....");
    

    }