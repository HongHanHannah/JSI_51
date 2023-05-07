
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

    handleSubmit = (a) => {
        
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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