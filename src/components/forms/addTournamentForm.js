import React, { useState } from 'react'; 
import axios from 'axios';

function AddTournamentForm() {
    const [input, setInput] = useState({
        tournament: "",
        course: "",
        city: "",
        state: "",
        start: "",
        finish: "",
        url: ""
    });
    const [ajga, setAjga] = useState(false);
    const [jgs, setJgs] = useState(false);
    const [kyjrpga, setKyjrpga] = useState(false);
    const [golfweek, setGolfweek] = useState(false);
    const [pga, setPga] = useState(false);
    const [southern, setSouthern] = useState(false);


    function handleChange(event) {
        const {name, value} = event.target
     
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value,
            }
        })
    }
    function handleAjga() {
        setAjga(!ajga);
    }
    function handleJgs() {
        setJgs(!jgs);
    }
    function handleKyjrpga() {
        setKyjrpga(!kyjrpga);
    }
    function handleGolfweek() {
        setGolfweek(!golfweek);
    }
    function handlePga() {
        setPga(!pga);
    }
    function handleSouthern() {
        setSouthern(!southern);
    }

    function refreshPage() {
        window.location.reload(false);
    }

    function handleClick(event) {
        event.preventDefault();
        const newTournament = {
            tournament: input.tournament,
            course: input.course,
            city: input.city,
            state: input.state,
            ajga: ajga,
            jgs: jgs,
            kyjrpga: kyjrpga,
            golfweek: golfweek,
            pga: pga,
            southern: southern,
            start: input.start,
            finish: input.finish,
            url: input.url
        };

        axios.post(`${process.env.REACT_APP_API}/tournaments/`, newTournament);
            
        refreshPage();
        alert("Tournament Added.");
    }

    return  <div className='form-wrapper'>
                <h1 className="form-header">Create New Tournament</h1>
                <form>                
                    <div className="text-inputs-wrapper">
                        <input 
                            onChange={handleChange}
                            name='tournament'
                            value={input.tournament}
                            className="input tournament-field" 
                            type='text' 
                            placeholder="Tournament"
                        ></input>

                        <input 
                            onChange={handleChange}
                            name='course'
                            value={input.course}
                            className="input course-field" 
                            type='text' 
                            placeholder="Golf Course" 
                        ></input>

                        <input 
                            onChange={handleChange}
                            name='city'
                            value={input.city}
                            className="input city-field" 
                            type='text' 
                            placeholder="City" 
                        ></input>

                        <input 
                            onChange={handleChange}
                            name='state'
                            value={input.state}
                            className="input state-field" 
                            type='text' 
                            placeholder="State" 
                        ></input>
                    </div>

                    <div className="tour-selectors-wrapper">
                        <h4>Select Tournament(s):</h4>
                        <div className='tour-checkbox-wrapper'>
                            <label htmlFor='checkbox'>
                                <input 
                                    type='checkbox'
                                    className='checkbox' 
                                    onChange={handleAjga} 
                                ></input>
                                AJGA?
                            </label>

                            <label>
                                <input 
                                    type='checkbox'
                                    className='checkbox' 
                                    onChange={handleJgs} 
                                ></input>
                                JGS?
                            </label>

                            <label>
                                <input 
                                    type='checkbox'
                                    className='checkbox' 
                                    onChange={handleKyjrpga} 
                                ></input>
                                KY JrPGA?
                            </label>

                            <label>
                                <input 
                                    type='checkbox'
                                    className='checkbox' 
                                    onChange={handleGolfweek} 
                                ></input>
                                GolfWeek?
                            </label>

                            <label>
                                <input 
                                    type='checkbox'
                                    className='checkbox' 
                                    onChange={handlePga} 
                                ></input>
                                US JrPGA?
                            </label>

                            <label>
                                <input 
                                    type='checkbox'
                                    className='checkbox' 
                                    onChange={handleSouthern} 
                                ></input>
                                Southern?
                            </label>
                        </div>
                    </div>

                    <div className="date-inputs-wrapper">
                        <h4>Tournament Dates:</h4>
                        <label>
                            <input 
                                onChange={handleChange}
                                name='start'
                                value={input.start}
                                className="input start-field" 
                                type='date' 
                            ></input>
                            Start Date
                        </label>
                        <label>
                            <input 
                                onChange={handleChange}
                                name='finish'
                                value={input.finish}
                                className="input finish-field" 
                                type='date' 
                                placeholder="Finish Date"
                            ></input>
                            End Date
                        </label>
                    </div>

                    <div className='tournament-url'>
                        <input 
                            onChange={handleChange}
                            name='url'
                            value={input.url}
                            className="input url-field" 
                            type='text' 
                            placeholder="URL"
                        ></input>
                    </div>


                    <button onClick={handleClick} className="submit-button" type="submit" >Submit</button>

                </form>
            </div>
}
export default AddTournamentForm