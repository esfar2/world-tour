import { useState } from "react";
import "./Country.css"
const Country = ({ country,handleVisitedCountries }) => {
  // eslint-disable-next-line react/prop-types
  console.log(country);
  const {name: {common : name}, flags, capital, population} = country;
  const [visited,setVisited] = useState(false)

  function handleVisited() {
    setVisited(!visited)
  }
  return (
    <div  className={`country ${visited && 'visited'}`} >
      <h3 >Name: {name}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Population: {population}</h3>
      <img src={flags?.png} alt="" />
      <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
      <button onClick={handleVisited}>Visited</button>
      <span style={{marginLeft: "10px"}}>{visited && "I have visited"}</span>
    </div>
  );
};

export default Country;
