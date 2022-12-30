
function shown(){
    // Check whether all mandatory fields are filled or not
    let fName=document.getElementById('fullname').value;
    let lName=document.getElementById('lastname').value;
    let email=document.getElementById('email').value;
    let reason =document.getElementById('reason').value;

    console.log(fName, lName, email, reason);

    // show the alert only if all mandatory input fields are filled
    if(fName && lName && email && reason){
        alert("Form Submitted Successfully!!");
    }
    else{
        alert("Please fill the mandaotory fields");
    }
   
}