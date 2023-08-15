const {Activities, Countries} = require('../db.js');

const getAllActivities = async () => {
  try {
      const allActivities = await Activities.findAll({ include: Countries })
      return allActivities

  } catch (error) {
      throw new Error({ error: error.message })
  }
};


module.exports = { getAllActivities} ;