import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [wholeQuran, setWholeQuran] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-abubakrzakaria.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Convert response to JSON
        const result = await response.json();
        // Update the state with fetched data
        setWholeQuran(result);
      } catch (error) {
        // Handle any errors
        setError(error.message);
      } finally {
        // Set loading to false when data is fetched or error occurs
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  console.log(wholeQuran);
  const dataInfo = {
    wholeQuran,
  };
  return (
    <AuthContext.Provider value={dataInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
