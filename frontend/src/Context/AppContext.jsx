import { createContext, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
   const [data, setData] = useState({ email: '', password: '' });
   const [isLogin, setIsLogin] = useState(false);

   return (
      <AppContext.Provider value={{ data, setData, isLogin, setIsLogin }}>
         {children}
      </AppContext.Provider>
   );
}

export default AppContextProvider;