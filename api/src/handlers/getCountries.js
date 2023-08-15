const { getAllCountries } = require("../controllers/getAllCountries")
const { getCountriesByName } = require("../controllers/getCountriesName")

const getCountries = async (req,res) => {
  const { name } = req.query;
  if(!name){
      try {
          const allCountries = await getAllCountries();
          res.status(200).json(allCountries);
      } catch (error) {
          res.status(404).json({error: error.message});
      }
  }else{
      try {
          const countryName = await getCountriesByName(name);
          res.status(200).json(countryName);
      } catch (error) {
          res.status(404).json({error: "Country not Found"});
      }
  }
}


  module.exports = { getCountries }