import React, { useState, useEffect } from 'react'
import { SearchForm } from './style';


const SearchChampion = ( {getChampion} ) => { 
    const[champion, setChampion] = useState([])

    useEffect(() => {
        getChampion(champion)
    }, [champion])

    return(
        <div className="searchChampion"> 
            <SearchForm>
                <input onChange={e => setChampion(e.target.value)} value={champion}/>
            </SearchForm>
        </div>
    )
    
}


export default SearchChampion