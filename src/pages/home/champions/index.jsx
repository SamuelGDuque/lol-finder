import React, { useState, useEffect } from 'react'
import { Champion } from './style';
import { Link } from 'react-router-dom'

const ChampionCard = ( { champion } ) => { 
    const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/`
    return(
        <Link to={`/champions/${champion.id}`} className="champion-icon">
            <Champion className='champion'>
                <img src={url+champion.id+'_0.jpg'}></img>
                <h3>{champion.name}</h3>
            </Champion>
        </Link>
    )
    
}


export default ChampionCard