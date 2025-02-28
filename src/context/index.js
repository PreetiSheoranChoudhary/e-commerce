"use client";
import { createContext ,useState} from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const[showNavModal,setShowNavModal] = useState(true)
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        showNavModal, 
        setShowNavModal, 
        isAuthUser,
        setIsAuthUser,
        user,
        setUser,
        currentUpdatedProduct,
        setCurrentUpdatedProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
