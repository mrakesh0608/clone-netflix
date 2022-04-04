let Name=null;
let email=null;
let password=null;

let signInPage = document.getElementById('Sign-in');
let signUpPage = document.getElementById('Sign-up');

document.getElementById('Sign-in-now').addEventListener('click',signin);
document.getElementById('Sign-up-now').addEventListener('click',signup)

function signin()
{
    signUpPage.style.display = "none";
    signInPage.style.display = "flex";
}
function signup()
{
    signInPage.style.display = "none";
    signUpPage.style.display = "flex";
    Name=null;
    email=null;
    password=null;
}
//Authentication

let signUpBtn = document.getElementById('sign-up-btn');
signUpBtn.addEventListener('click',()=>{
    Name = document.getElementById('Name').value;
    email = document.getElementById('up-usermail').value;
    password = document.getElementById('up-pass').value;
    if(Name === "" || email === "" || password === "")
    {
        alert('Please enter details again'); 
    }
    else{
        alert('successful registration');
        signin();
    }
})

let signInBtn = document.getElementById('sign-in-btn');
signInBtn.addEventListener('click',()=>{
    let enteredEmail = document.getElementById('in-usermail').value;
    let enteredPass = document.getElementById('in-pass').value;
    if( enteredEmail !=="" && enteredEmail === email && email !==null )
    {
        if( enteredPass !=="" && enteredPass === password && password !==null)
        {
            alert("Welcome " + Name);
            myWindow = window.open("User/browse.html","_self");
        }
        else alert("Invalid Password");
    }
    else alert("Invalid Email");
})