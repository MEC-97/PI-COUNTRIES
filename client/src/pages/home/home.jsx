import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {   CountryCard,  NavBar,  Loader, Pagination } from '../../components/index.js';
import * as actions from '../../redux/action/index.js';
import './home.css';


const Home = () => {
    
    const [cardsPerPage] = useState(10);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    
    const countriesSorted = useSelector(state => state.countriesSorted);
    const currentPages = useSelector(state => state.paginated);
   

    const lastCardIndex = currentPages * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentCards = countriesSorted.slice(firstCardIndex, lastCardIndex);

    useEffect(()=>{
        setLoading(true);
        dispatch(actions.getAllCountries());
        setTimeout(()=>{
            setLoading(false);
        },2000);
    },[dispatch]);

   
    return(
        <div className="home" >
            <div className="home_navbar">
                <NavBar  setLoading={setLoading} />
            </div >
            <div className="home_container">
                <div className="home_countries">
                    {loading ? (
                        <Loader />
                    ) : (
                        currentCards?.map((country) => {
                            return(
                                <CountryCard 
                                    key={country.id}
                                    id={country.id}
                                    name={country.name}
                                    image={country.image}
                                    population={country.population}
                                    continent={country.continent}                               
                                />
                            )
                        })
                    )}
                </div>
            </div>
            {(
                <Pagination 
                cardsPerPage={cardsPerPage}
                countriesSorted={countriesSorted.length}
                />
            )}
        </div>
    )
};

export default Home;
