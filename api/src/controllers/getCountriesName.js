const { Countries, Activities } = require('../db.js');
const { Op } = require('sequelize');


const getCountriesByName = async (name) => {
  const theName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const countryByName = await Countries.findAll({
      where: {name: { [Op.substring]: `%${theName}%`} },
      include: {
          model: Activities,
          attributes: ['name', 'difficulty', 'duration', 'season'],
          through: { attributes: [] }
      },
  })
  return countryByName;
};

module.exports = { getCountriesByName };
