import {
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAIL,
    GET_COUNTRY_BY_NAME,
    CREATE_ACTIVITIES,
    GET_ALL_ACTIVITIES,
    FILTER_COUNTRIES_BY_CONTINENT,
    FILTER_ACTIVITIES,
    FILTER_BY_POPULATION,
    CLEAR_FILTERS,
    PAGINATED,
    SORT_BY,
    FILTER_BY_SUPERFICIE
} from '../action/index.js';

const initialState = {
    countries: [],
    countriesSorted: [],
    countryDetail: [],
    activities: [],
    error: [],
    paginated: 1
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countriesSorted: action.payload,
                countries: action.payload,
            };
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            };
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countriesSorted: action.payload,
            };
        case CREATE_ACTIVITIES: 
            return {
                ...state,
                activities: action.payload
            };
        case FILTER_COUNTRIES_BY_CONTINENT:
            const allCountries = state.countries
            const filterContinent = action.payload === 'All' ? allCountries: allCountries.filter(f=> f.continent === action.payload)
            return {
                ...state,
                countriesSorted: filterContinent,
            };

        case FILTER_BY_SUPERFICIE:
            const newCountries2 = state.countries
            const filtroSuperfice = action.payload === newCountries2.filter(country=>country.superficie > 5000000);
             return {
                ...state,
                countriesSorted: filtroSuperfice
             }
          

        case FILTER_ACTIVITIES:
              
                const auxContries = state.countries;
                const filtered = auxContries.filter((country) =>
                country.Activities.some((activity) => activity.name === action.payload)
            )
            return {
                ...state,
                countriesSorted: filtered
            }
        case GET_ALL_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            };
        
            
        case FILTER_BY_POPULATION:
            const newCountries = state.countriesSorted;
            const populationFilter = newCountries.filter(country=>country.population >  10000000);
            return {
                ...state,
                countriesSorted: populationFilter,
            };

        case CLEAR_FILTERS:
            return {
                ...state,
                countries: action.payload,
                countriesSorted: [],
                error: {},
            };

        case PAGINATED:
            return {
                ...state,
                paginated: action.payload,
            };

           case SORT_BY:
             if (action.payload === "POP-") {
                return {
                    ...state,
                    countriesSorted: state.countriesSorted.slice().sort((a, b) => a.population - b.population)
                }

            } else if (action.payload === "POP+") {

                return {
                    ...state,
                    countriesSorted: state.countriesSorted.slice().sort((a, b) => b.population - a.population)
                }
            } else if (action.payload === "ASC") {
                const result = state.countriesSorted.slice().sort((a, b) => {
                    if (a.name < b.name) return -1
                    if (b.name < a.name) return 1
                    return 0
                })
                return {
                    ...state,
                    countriesSorted: result
                }
            } else if (action.payload === "DES") {
                const result = state.countriesSorted.slice().sort((a, b) => {
                    if (a.name < b.name) return -1
                    if (b.name < a.name) return 1
                    return 0
                })
                return {
                    ...state,
                    countriesSorted: result.reverse()
                }
            } else {
                return {
                    ...state,
                    countriesSorted: state.countries
                }
            }
            
        default: 
            return { ...state };
    }
};

export default rootReducer;