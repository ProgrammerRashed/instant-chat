import { getActiveUser } from "@/utils/getActiveUser";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
		setLoading(true)
      try {
        const data = await getActiveUser();
        console.log(data);
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }finally{
		setLoading(false)
	  }
    };
    fetchCurrentUser();
  },[]);

  return (
    <DataContext.Provider value={{ currentUser, loading }}>
      {children}
    </DataContext.Provider>
  );
};
