import Login from "./login.js"
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


class Login {
    $containerDiv
    $titleH2
    $signinForm
    $emailInputEmail
    $passInputPass
    $submitBtn

    constructor() {
        this.$emailInputEmail = document.createElement("input"); // <input> </input>
        this.$emailInputEmail.type = "email"; 
        this.$emailInputEmail.placeholder = "Enter your email..."


     

        

    }

    handleSubmit = (e) => {
           
// validation
e.preventDefault(); // can lai cac su mac dinh de xem co dung yeu cau nhap du lieu chua 
const email = this.$emailInputEmail.value;
const password = this.$passInputPass.value;


if(email == "") {
 alert("Email cannot be empty!");
 return;
}
if(password.length < 6) {
 alert("Password must be least 6 letters!");
 return;
}

 if(password != confirmPass) {
  alert("Your password not match!");
  return;
 }



        
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }





    gotoSignin = () => {
        const login = new Login();



    }

   
}


export default Login;