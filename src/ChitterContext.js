import { onAuthStateChanged } from '@firebase/auth';
import { doc, onSnapshot } from '@firebase/firestore';
import {React, createContext, useContext , useState, useEffect } from 'react'
import { auth, db } from './firebase';



const Chitter = createContext()

const ChitterContext = ({children}) => {
    
    const [user, setUser] = useState(null)       
    const [alert, setAlert] = useState({
        open:false,
        message:"",
        type:"success"
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) setUser(user);
          else setUser(null);
        });
        console.log(user);
      }, []);   

    return (
        <Chitter.Provider value={{
        alert,
        setAlert,
        user        
        }}>
            {children}
        </Chitter.Provider>
    )
}

export default ChitterContext;

export const ChitterState = () => {
    return useContext(Chitter);
}
