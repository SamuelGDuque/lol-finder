import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import { loadChampions } from '../../services/api_dragon'


const ChampionInterna = () => { 
    const url = `/11.1.1/data/pt_BR/champion.json`
    const[champions, setChampions] = useState([])
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        loadChampions(url, setChampions,setLoading)
    }, [loadChampions])

    return(
        <>
            oi
        </>
    )
    
}


export default ChampionInterna