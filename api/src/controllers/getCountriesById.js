const { Countries, Activities } = require('../db.js');

const getCountrieDetailAPI = async (id) => {
    const countryId = await Countries.findByPk(id.toUpperCase(),{
        include: {
            model: Activities,
            attributes: ['name', 'difficulty', 'duration', 'season']
        }
    });
    return countryId;
};


  
  module.exports = { getCountrieDetailAPI };
  



