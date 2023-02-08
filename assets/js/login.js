
 function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function signup(){

    
 
    var email =document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
   
	// Defining error variables with a default value
    
   
    var emailErr = true;
    
    var passwordErr = true;
   
   
       console.log(email)
        console.log(password)
    // Validate name
   
    
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
    if((emailErr || passwordErr) == true) {
       console.log(nameErr)       
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          
                           "Email Address: " + email + "\n" +
                        
            
                         
             
       console.log(dataPreview);
        // Display input data in a dialog box before submitting the form
     
	   
	   alert(dataPreview);
	   
	   validated =true;
       if(validated=true){
        
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
    
        console.log(name+".....");
    
    }
	  
      
    return true;       
 
}

    

  
};
