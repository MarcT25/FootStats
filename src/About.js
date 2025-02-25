import React from 'react'
import './CSS/Home.css'

function About() {
    return (
        <div>
            <div name="about" className='about'>
                <h1>FootStats</h1>
                <h3>FootStats is a web application designed to provide football enthusiasts with up-to-date statistics, insights, and real-time data on players, teams, and matches.
                     Built using React, the website will offer an intuitive and interactive user experience, 
                     featuring visually appealing dashboards, search and filtering options, and live match tracking.</h3>
            </div>
            <div name="player" className='player'>
                <h1>Player's Data</h1>
                <h3>The Player Statistics section of FootStats provides detailed insights into individual player performances across various leagues and competitions.</h3>
                <div>
                    <p>Statistics include:</p>
                    <ul>
                        <li>
                            Goals,
                        </li>
                        <li>
                            Assists,
                        </li>
                        <li>
                            Saves,
                        </li>
                        <li>
                            Tackles,
                        </li>
                        <li>
                            and more advance statistics.
                        </li>
                    </ul>
                </div>
            </div>
            <div name="teams" className='teams'>
                <h1>Teams Statistics</h1>
                <h3>The Team Statistics section of FootStats offers a detailed analysis of football teams' performances across various leagues and tournaments.</h3>
                <div>
                    <p>Statistics include:</p>
                    <ul>
                        <li>
                            Team Overview,
                        </li>
                        <li>
                            League Standings,
                        </li>
                        <li>
                            Recent Form & Match Results,  
                        </li>
                        <li>
                            and more advance statistics.
                        </li>
                    </ul>
                </div>
            </div>
            <div name="liveMatches" className='liveMatches'>
                <h1>Live Matches</h1>
                <h3>The Live Matches section of FootStats offers real-time updates on ongoing football games, 
                    providing fans with instant access to match statistics, key events, and live scores.
                </h3>
                <div>
                    <ul>
                        <li>
                            Lineups & Formations,
                        </li>
                        <li>
                            Real-Time Score Updates,
                        </li>
                        <li>
                            Match Events Tracker,  
                        </li>
                        <li>
                            Multi-League Coverage.
                        </li>
                        <li>
                            and More.
                        </li>
                    </ul>
                </div>
                    
            </div>
        </div>
    )
}

export default About