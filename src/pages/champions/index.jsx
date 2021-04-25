import React, { useState, useEffect } from 'react'
import ChampionIcons from './champions_icons'
import { ListChampions } from './style';
import Container from '@material-ui/core/Container';
import { loadChampions } from '../../services/api_dragon'


const Champions = () => { 
    const url = `/11.1.1/data/pt_BR/champion.json`
    const url_image = `http://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/`
    const[champions, setChampions] = useState([])
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        loadChampions(url, setChampions,setLoading)
    }, [loadChampions])

    return(
        <>
            <ListChampions>
                <Container>
                    <div className="title-champions">
                        <h2> Campeões </h2>
                    </div>
                    {loading 
                        ?
                            <p>No</p>
                        : 
                        <div class="list">
                            {
                                champions.map((champion)=> (
                                    <ChampionIcons class="champions" champion={champion.info}></ChampionIcons>
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