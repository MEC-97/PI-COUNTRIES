const { getCountrieDetailAPI } = require("../controllers/getCountriesById")

const getCountrieId = (req,res) => {
    const {id} = req.params;
    getCountrieDetailAPI(id)
    .then(response=> res.status(200).json (response))
     .catch(error=>res.status(400).json(error)) ;
    
};
  module.exports = { getCountrieId }