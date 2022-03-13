import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faTrashAlt, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import ajga from '../../images/tour_logos/ajga_logo.png';
import golfweek from '../../images/tour_logos/gwtour_logo.svg';
import jgs from '../../images/tour_logos/jgs_logo.png';
import kyjrpga from '../../images/tour_logos/kyJrGolf_logo.png';
import southern from '../../images/tour_logos/sga_logo.png';
import pga from '../../images/tour_logos/jrpga_logo.png';
import AddTournamentForm from '../forms/addTournamentForm';

function Tournaments() {

    const [tournaments, setTournaments] = useState([]);
    const isAdmin = sessionStorage.getItem("isAdmin");
    const [tournamentForm, setTournamentForm] = useState(false);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/tournaments`)
    
        .then((res) => {
            setTournaments(res.data.data.sort((a,b) => {
                let da = new Date(a.finish),
                    db = new Date(b.finish);
                return da - db;
            })
            );
        })
        .catch(err => console.log(err));
    },[]); 
    

    async function onDeleteClick(item) {

        await axios
        .delete(`${process.env.REACT_APP_API}/tournaments/${item._id}`)
        .then(() => alert("Tournament deleted."));
    }

    function addTournFormToggle() {
        tournamentForm === false ? setTournamentForm(true) : setTournamentForm (false)
      }
    
    return (
        <div className='schedule-wrapper'>
            
            { isAdmin === "true" ?
                <div className='true-wrapper'>
                    <h1 className='page-header'>2022 Tournament Schedule
                        <button className='add-tourn-button' onClick={addTournFormToggle}>
                            { tournamentForm === false ? <FontAwesomeIcon icon={faPlusCircle}/> : <FontAwesomeIcon icon={faMinusCircle} /> }
                        </button>
                    </h1>
                    <div className="schedule-forms-wrapper">
                        {tournamentForm && <AddTournamentForm />}
                    </div> 
                </div>
            :                     
            <h1 className='page-header'>2022 Tournament Schedule</h1>
            }
            
            {tournaments.map(item => {
                return <div className='schedule-item' key={item._id}>
                    <div className="tournament-title" >
                        <a href={item.url} target="_blank" rel="noreferrer">{item.tournament}</a>
                    </div>

                    {isAdmin === 'true' ? 
                        <button className='delete-button' type='submit' onClick={() => onDeleteClick(item)}>
                            <FontAwesomeIcon icon={faTrashAlt}/></button> : 
                        null} 

                    <div className='tournament-tour'> 
                        {item.golfweek ? <img src={golfweek} alt='GolfWeek Logo'/> : null} 
                        {item.ajga ? <img src={ajga} alt='AJGA Logo'/> : null} 
                        {item.jgs ? <img src={jgs} alt='JGS Logo'/> : null} 
                        {item.kyjrpga ? <img src={kyjrpga} alt='KY Jr PGA Logo'/> : null} 
                        {item.southern ? <img src={southern} alt='SGA Logo'/> : null} 
                        {item.pga ? <img src={pga} alt='PGA Logo'/> : null} 
                    </div>

                    <div className='tournament-date'>
                        <p className='date'>{new Date(item.start).toLocaleDateString()} - {new Date(item.finish).toLocaleDateString()}
                        </p>
                    </div>

                    <div className='tournament-location'>
                        <p className='course'>{item.course}</p>
                        <div className='city-state'>
                            <p className='city'>{item.city},</p>
                            <p className='state'> {item.state}</p>
                        </div>
                    </div>

                </div>
            })}

        </div>
    )
}

export default Tournaments;