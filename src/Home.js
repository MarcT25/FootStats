import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CSS/Home.css'
import { faFutbol, faNewspaper, faPlus } from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <div className='main'>
            <div name="welcomeBanner" className='welcomeBanner'>
            <h1>
                Welcome to FootStats 
            </h1>
            <h3>
                Place where you can find youre favorite Teams, Player and Historical Statistics.
            </h3>
            </div>

            <div className='homeLeft'>
                <h4>Visit your favorite leagues: </h4>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faFutbol}/> La Liga
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFutbol}/> Premier League
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFutbol}/> Serie a
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFutbol}/> Bundesliga
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFutbol}/> Liga Portugal
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPlus} />    and more leagues
                        </li>
                    </ul>
            </div>
            <div className='homeRight'>
                <h4>Lastest News</h4>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faNewspaper} />Link to news article
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNewspaper} />Link to news article
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNewspaper} />Link to news article
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNewspaper} />Link to news article
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNewspaper}/>Link to news article
                    </li>
                </ul>
            </div>
        </div>
    )
}



export default Home