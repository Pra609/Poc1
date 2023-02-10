var validated=false
 function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function signup(){

    
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email =document.getElementById('email').value;
    var password = document.getElementById('password').value;

   
   
	// Defining error variables with a default value
    var nameErr =true;
   
    var emailErr = true;
    var contactErr = true;
    var passwordErr = true;
   
    console.log(name)
    
       console.log(email)
        console.log(password)
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
   
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate contact number
    if(contact == "") {
        printError("contactErr", "Please enter your contact number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(contact) === false) {
            printError("contactErr", "Please enter a valid 10 digit contact number");
        } else{
            printError("contactErr", "");
            contactErr = false;
        }
    }
    
//    // Validate role
//    if(role == "Select") {
//        printError("roleErr", "Please select your role");
//    } else {
//        printError("roleErr", "");
//        roleErr = false;
//    }
  
  // validate password
  
    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        var regex = /^[a-zA-Z1-9\s]+$/;                
        if(regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid password");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }
  
  
    
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || contactErr || passwordErr) == true) {
       console.log(nameErr)       
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          " Name: " + name + "\n" +
                           "Email Address: " + email + "\n" +
                          "Contact Number: " + contact + "\n" ;

            
                         
             
       console.log(dataPreview);
        // Display input data in a dialog box before submitting the form
     
	   
	   alert(dataPreview);
	   
	   validated =true;
       if(validated=true){
        localStorage.setItem("name",name);
        localStorage.setItem("contact",contact);
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
    
        console.log(name+".....");
    
    }
	  
      
    return true;       
 
}

    

  
};
