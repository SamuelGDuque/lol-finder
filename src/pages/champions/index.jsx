import React, { useState, useEffect } from 'react'
import ChampionIcons from './champions_icons'
import { ListChampions } from './style';
import Container from '@material-ui/core/Container';
import { loadChampions, loadChampion } from '../../services/api_dragon'
import SearchChampion from '../../components/searchChampion';


const Champions = () => { 
    const url = `/11.1.1/data/pt_BR/champion.json`
    const[champions, setChampions] = useState([])
    const[loading, setLoading] = useState(true);

    const getChampion = ( champion ) => {
        loadChampion(champion, setChampions,setLoading)
    }

    useEffect(() => {
        loadChampions(url, setChampions,setLoading)
    }, [loadChampions])

    return(
        <> 
            <SearchChampion getChampion={getChampion}></SearchChampion>
            <ListChampions>
                <Container>
                    <div className="title-champions">
                        <h2> Campeões </h2>
                    </div>
                    {loading 
                        ?
                            <p>No</p>
                        : 
                        <div className="list">
                            {
                                champions.map((champion, index)=> (
                                    <ChampionIcons class="champions" champion={champion.info} key={index}></ChampionIcons>
                                ))
                            }
                        </div>
                    }
                </Container>
            </ListChampions>
        </>
    )
    
}


export default Champions