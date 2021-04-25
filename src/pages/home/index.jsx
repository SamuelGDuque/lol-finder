import React, { useState, useEffect } from 'react'
import ChampionCard from './champions/'
import { ListChampions } from './style';
import Container from '@material-ui/core/Container';
import { loadChampions } from '../../services/api_dragon'


const Home = () => { 
    const url = `/11.1.1/data/pt_BR/champion.json`
    const[champions, setChampions] = useState([])
    const[loading, setLoading] = useState(true);
    const index = Math.floor(Math.random() * 153);
    const index2 = Math.floor(Math.random() * 153);
    const index3 = Math.floor(Math.random() * 153);

    useEffect(() => {
        loadChampions(url, setChampions,setLoading)
    }, [loadChampions])

    return(
        <>
            <ListChampions>
                <Container>
                    <div className="title-champions">
                        <h2> Personagens em Destaque </h2>
                    </div>
                    {loading 
                        ?
                            <p>No</p>
                        : 
                        <div class="list">
                            <ChampionCard class="champions" champion={champions[index].info}></ChampionCard>
                            <ChampionCard class="champions" champion={champions[index2].info}></ChampionCard>
                            <ChampionCard class="champions" champion={champions[index3].info}></ChampionCard>
                        </div>
                    }
                </Container>
            </ListChampions>
        </>
    )
    
}


export default Home