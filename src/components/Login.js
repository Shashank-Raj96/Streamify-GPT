import { useState , useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);

    const[errorMessage,setErrorMessage] = useState(null);
     
    const name= useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the Data
      const message = checkValidData(email.current.value, password.current.value );
     setErrorMessage (message);

      if (message) return;  
     // if this is valid then can do sign in / sign up

     // Sign In Sign Up Form

     if(!isSignInForm){
          // Sign Up Logic

          createUserWithEmailAndPassword(auth, email.current.value , password.current.value
          )
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              // ...
            } )
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // User is signed out
              setErrorMessage(errorCode + "-" + errorMessage);
            });
          
     }
     else {
          // Sign In Logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
     }
    };


    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
   
    return (
        
  <div>

     <Header/>
        <div className="absolute">
         <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_small.jpg"
          alt="logo" />
        </div>

      <form  onSubmit = {(e) => e.preventDefault()} className=" w-3/12 absolute p-6 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

         { !isSignInForm && (
          <input
            ref={name}
            type="text" 
             placeholder="Full Name" 
              className="p-4 my-4 w-full bg-gray-700" 
         />
        )}


        <input
        ref={email}
         type="text"
          placeholder="Email Address"
           className="p-4 my-4 w-full bg-gray-700" /> 




        <input
        ref={password}
         type="password" 
         placeholder="Password" 
         className="p-4 my-4 w-full bg-gray-700" />

         <p className="text-red-500 font-bold text-lg py-3">
            {errorMessage}
         </p>

        <button 
          className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm 
           ? "New to Netflix? Sign Up Now" 
           :  "Already Registered? Sign In Now. "}
            
            </p>
      </form>
  </div>

    );
};
export default Login;