import React, { useState, useEffect }from 'react';
import axios from 'axios';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function TournamentResults() {
    const [results, setResults] = useState([]);
    const isAdmin = sessionStorage.getItem("isAdmin");

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/results`)
        .then(response=> {
            setResults(response.data.data.sort((a,b) => {
                let da = new Date(a.finish),
                    db = new Date(b.finish);
                return db - da;
            }))
            ;
        })
        .catch(err=> console.log(err)); 
    },[]); 

    async function onDeleteClick(item) {

        await axios
        .delete(`${process.env.REACT_APP_API}/results/${item._id}`)
        .then(() => alert("Tournament deleted."));
    }

  return (
    <div className='results-wrapper'>
        <h1 className='page-header'>Tournament Results</h1>
        {results.map(item => {
            return <div className='result-item' key={item._id}>
                    <div className="tournament-title" >
                        <a href={item.url} target="_blank" rel="noreferrer">{item.tournament}</a>
                    </div>
                    {isAdmin === 'true' ? 
                        <button className='delete-button' type='submit' onClick={() => onDeleteClick(item)}>
                            <FontAwesomeIcon icon={faTrashAlt}/></button> : 
                        null} 

                    <div className='mid-card-wrapper'>
                        <p className='course'>{item.course}</p>
                        <p className='pipes-wrapper'> || </p>
                        <p className='finish-wrapper'>
                            Finish: {item.position} of {item.field}
                        </p>
                    </div>    
                    <div className='tournament-date'>
                        <p className='date'>{new Date(item.start).toLocaleDateString()}</p>
                        <p> - </p>
                        <p className='date'>{new Date(item.finish).toLocaleDateString()}</p>
                    </div>
                    <div className='scores-rating-wrapper'>
                        {item.roundOne ?
                            <div className='round-wrapper'>
                                <div className='round-title'>Round One:</div> 
                                <div>Score: {item.roundOne}</div>
                                <div>Rating: {item.ratingOne}</div> 
                            </div>
                        : null}
                        {item.roundTwo ?
                            <div className='round-wrapper'>
                                <div className='round-title'>Round Two:</div> 
                                <div>Score: {item.roundTwo}</div>
                                <div>Rating: {item.ratingTwo}</div> 
                            </div>
                        : null}
                        {item.roundThree ?
                            <div className='round-wrapper'>
                                <div className='round-title'>Round Three:</div> 
                                <div>Score: {item.roundThree}</div>
                                <div>Rating: {item.ratingThree}</div> 
                            </div>
                        : null}
                        {item.roundFour ?
                            <div className='round-wrapper'>
                                <div className='round-title'>Round Four:</div> 
                                <div>Score: {item.roundFour}</div>
                                <div>Rating: {item.ratingFour}</div> 
                            </div>
                        : null}
                    </div>
                </div>
        })}
        
    </div>
  )
}

export default TournamentResults