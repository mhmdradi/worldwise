// import { useState, useEffect, createContext, useContext } from "react";
// import PropTypes from "prop-types";

// const CitiesContext = createContext();

// function CitiesProvider({ children }) {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentCity, setCurrentCity] = useState({});

//   useEffect(() => {
//     async function fetchCities() {
//       try {
//         setIsLoading(true);
//         const res = await fetch(`http://localhost:5000/cities`);
//         const data = await res.json();
//         setCities(data);
//       } catch (error) {
//         alert("There is something wrong in fetching data...");
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     fetchCities();
//   }, []);

//   async function getCity(id) {
//     try {
//       setIsLoading(true);
//       const res = await fetch(`http://localhost:5000/cities/${id}`);
//       const data = await res.json();
//       setCurrentCity(data);
//     } catch (error) {
//       alert("There is something wrong in fetching data...");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
//       {children}
//     </CitiesContext.Provider>
//   );
// }

// CitiesProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// function useCities() {
//   const context = useContext(CitiesContext);
//   if (context === undefined) {
//     throw new Error("useCities must be used within a CitiesProvider");
//   }
//   return context;
// }

// // export { CitiesProvider, useCities, CitiesContext };
// export default CitiesContext;
import { useState, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:5000/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There is something wrong in fetching data...");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:5000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      alert("There is something wrong in fetching data...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

CitiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("useCities must be used within a CitiesProvider");
  }
  return context;
}

export { CitiesProvider, useCities };
