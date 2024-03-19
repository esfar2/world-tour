import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])
  function handleVisitedCountries(country){
    console.log("Visited")
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited countries: {visitedCountries.length}</h3>
        <ul style={{listStyle: "none"}}>
          {visitedCountries.map(visited => <li>{visited.name.common}</li>)}
        </ul>
      </div>
      <div className='country-container'>
      {countries.map((country) => (
        <Country key={country.cca3} country={country} handleVisitedCountries = {handleVisitedCountries}/>
      ))}
      </div>
    </div>
  );
};

export default Countries;
