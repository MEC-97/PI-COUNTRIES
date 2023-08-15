import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME';
export const CREATE_ACTIVITIES = 'CREATE_ACTIVITIES';
export const FILTER_COUNTRIES_BY_CONTINENT = 'FILTER_COUNTRIES_BY_CONTINENT';
export const FILTER_ACTIVITIES = 'FILTER_ACTIVITIES';
export const FILTER_BY_SUPERFICIE = 'FILTER_BY_SUPERFICIE';
export const FILTER_BY_POPULATION = 'FILTER_BY_POPULATION';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const PAGINATED = 'PAGINATED'; 
export const SORT_BY = 'SORT_BY';

export const getAllCountries = () => {
    return async function (dispatch){
        const response = (await axios.get('http://localhost:3001/countries')).data;

        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: response
        });
    }
};

export const getCountryById = (id) => {
    return async function (dispatch){
        const response = (await axios.get(`http://localhost:3001/countries/${id}`)).data;

        return dispatch ({
            type: GET_COUNTRY_DETAIL,
            payload: response
        });
    }
};

export const getCountryByName = name => {
    return async function (dispatch){
        try {
            const response = (await axios.get(`http://localhost:3001/countries?name=${name}`)).data;

            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: response,
            });
        } catch (error) {
            console.log(error.message);
        };
       
    }
};

export const filterCountriesByContinent = (payload) => {
    return {
        type: FILTER_COUNTRIES_BY_CONTINENT,
        payload,
    }
};

export const getAllActivities = () => {
    return async function (dispatch){
        const dbActivities = (await axios.get('http://localhost:3001/activities')).data;

        return dispatch({ type: GET_ALL_ACTIVITIES, payload: dbActivities});
    };
};

export const createActivities = (payload) => {
    return async function (dispatch){
        const response = await axios.post(`http://localhost:3001/activities`, payload);
        return dispatch({
            type: CREATE_ACTIVITIES,
            payload: response.data
        });
    }
};

export const filterActivities = (payload) => {
    return {
        type: FILTER_ACTIVITIES,
        payload,
    }
};



export const filterByPopulation = (payload) => {
    return {
        type: FILTER_BY_POPULATION,
        payload
    }
    
};


export const clearFilters = countries =>{
    return {
        type: CLEAR_FILTERS,
        payload: countries
    }
};

export  const getPages = (payload) => {
    return {
        type: PAGINATED,
        payload
    }
};

export const sortBy = (payload) => {
    return {
        type: SORT_BY,
        payload
    }
}

export const filterBySuperficie = (payload) => {
    return {
        type: FILTER_BY_SUPERFICIE,
        payload
    }
}