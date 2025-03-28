import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from 'react';
import { addUser , removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
            // Sign-out successful.

         .catch((error) => {
            // An error happened.
            navigate("/error");
          });  
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid , email , displayName , photoURL} = user;
           dispatch(
           addUser({
              uid: uid ,
               email: email,
                displayName: displayName ,
                 photoURL: photoURL,
                })
            );  
            navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");   
          } 
        });  

        return () => unsubscribe();

       }, [dispatch, navigate]);// Here i have add dispatch and navigate in the dependence


    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
        className="w-24" 
        src = {LOGO}
        alt="logo" />

       { user && (
         <div className="flex p-2">
           <img className="w-8 h-9 "
           alt = "userIcon" 
           src={user?.photoURL}
           />

           <button onClick={handleSignOut} className="font-bold text-white text-sm ml-2">
            (Sign Out)
            </button>
         </div>
       )}
     </div>
    );
};
export default Header;