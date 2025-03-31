import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from 'react';
import { addUser , removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector ((store) => store.gpt.showGptSearch)
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
           navigate("/");   // Here i have removed "/" from the navigate , so if we reload the page it will redirect to y browse page ig i am login in

          } 
        });  

        return () => unsubscribe();

       }, []);// Here i have add dispatch and navigate in the dependence

     const handleGptSearchClick = () => {
         // Toggle GPT Search
        
         dispatch (toggleGptSearchView());
     };

     const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
     }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
        className="w-24" 
        src = {LOGO}
        alt="logo" />

       { user && (
         <div className="flex p-2">
           { showGptSearch && (
            <select
           className="p-2 bg-gray-500 text-white m-2" 
           onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
                 <option key=
                 {lang.identifier} 
                  value={lang.identifier}>
                  {lang.name}
                 </option>
            ))}
          </select>
        )}
             <button 
             className="py-2 px-2 mx-3 my-1 bg-purple-800 text-white rounded-lg" 
              onClick={handleGptSearchClick}
             >
              {showGptSearch? "Homepage":"GPT Search"} 
              </button>
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