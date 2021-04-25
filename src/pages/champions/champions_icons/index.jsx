import React, { useState, useEffect } from 'react'
import { Champion } from './style';
import { Link } from 'react-router-dom'

const ChampionIcons = ( { champion } ) => { 
    const url = `http://ddragon.leagueoflegends.com/cdn/11.1.1/img/champion/`
    return(
        <Link to={`/champions/${champion.id}`} className="champion-icon">
            <Champion className='champion' title={champion.name}>
                <img src={url+champion.image.full} ></img>
            </Champion>
        </Link>
    )
    
}


export default ChampionIcons