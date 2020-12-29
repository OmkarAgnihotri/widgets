import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : term
                }
            })   
        }

        fetchData();

    },[term]);

    return (
        <div>
            <div className="form-group">
                <label for="searchInput">Enter Search term</label>
                <input 
                    className="form-control" 
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                />
            </div>
        </div>
    )
}

export default Search;