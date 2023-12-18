
function signup(event) {
    event.preventDefault();

    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-comfirm_password').value;

    localStorage.setItem('username', username);
    // let users = JSON.parse(localStorage.getItem("users")) || [];
    // users.push(username);
    // localStorage.setItem("users",JSON.stringify(users));

    localStorage.setItem('password', password);
    // let pass = JSON.parse(localStorage.getItem("pass")) || [];
    // pass.push(password);
    // localStorage.setItem("pass",JSON.stringify(pass));


    console.log(username);
    if(!username|| !password){
        alert("Must enter something");
    }else if (confirm === password) {

        let myLoginBox = document.getElementById("logIn_box");
        let mySignUpBox = document.getElementById("signUp_box");

        mySignUpBox.classList.remove("old-signUp-box");
        mySignUpBox.classList.add("new-signUp-box");

        mySignUpBox.classList.add("old-signUp-box");
        mySignUpBox.classList.remove("new-signUp-box");
        

        myLoginBox.classList.remove("old-login-box");
        myLoginBox.classList.add("new-login-box");
        myLoginBox.classList.remove("new-login-box");
        myLoginBox.classList.add("old-login-box"); 
    }
}

function login(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    let user = localStorage.getItem('username', username);
    let pass = localStorage.getItem('password', password);

    

    if (username == user && password == pass) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.getItem('username', username);

        window.location.href = 'MainPage.html';
    } else {
        alert("Enter a valid username or password");
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
}
function loginPage(){
    let myLoginBox = document.getElementById("logIn_box");
    let mySignUpBox = document.getElementById("signUp_box");

    mySignUpBox.classList.remove("new-signUp-box");
    mySignUpBox.classList.add("old-signUp-box");

    myLoginBox.classList.remove("new-login-box");
    myLoginBox.classList.add("old-login-box");
}
function signUpPage(){
    let myLoginBox = document.getElementById("logIn_box");
    let mySignUpBox = document.getElementById("signUp_box");

    mySignUpBox.classList.remove("old-signUp-box");
    mySignUpBox.classList.add("new-signUp-box");

    myLoginBox.classList.remove("old-login-box");
    myLoginBox.classList.add("new-login-box");
}