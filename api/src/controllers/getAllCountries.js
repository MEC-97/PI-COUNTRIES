const { Countries, Activities } = require('../db.js');




const getAllCountries = async () => {
  const allCountries = await Countries.findAll({
      attributes: ['id', 'name', 'image', 'continent', 'capital', 'subregion', 'area', 'population'],
      include: {
          model: Activities,
          attributes: ['name', 'difficulty', 'duration', 'season'],
          through: {attributes: [] },//Indica que no desea incluir información de la tabla intermedia que relaciona las tablas de Países y Actividades.
      }
  });
  return allCountries;
};
  
  

module.exports =  { getAllCountries };