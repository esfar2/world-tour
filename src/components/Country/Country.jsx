import "./Country.css"
const Country = ({ country }) => {
  // eslint-disable-next-line react/prop-types
  const {name: {common : name}, flags} = country;
  return (
    <div className="country">
      <h3 >Name: {name}</h3>
      <img src={flags?.png} alt="" />
    </div>
  );
};

export default Country;
