import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState("");
    const [results,setResults] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
           const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list : 'search',
                    origin : '*',
                    format : 'json',
                    srsearch : term
                }
            });

            setResults(data.query.search);
      
        }

        const timeoutID = setTimeout(()=>{
            if(term.length > 0)fetchData();
        },1000);

        return () => {
            clearTimeout(timeoutID);
        }

    },[term]);

    const renderedResults = results.map((item,index) => {
       
        return (
            <div className="row" key={item.pageid}>
                <div className="col p-3">
                    <div className="card">
                            
                        <div className="card-body">
                
                            <a 
                                href={`https://en.wikipedia.org?curid=${item.pageid}`}
                                target='_blank'
                            >
                                <h5 className="card-title ">
                                    {item.title}
                                </h5>
                            </a>
                            <div className="card-text">
                            
                                <span dangerouslySetInnerHTML={{__html:item.snippet}} ></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    })

    return (
        <div>
            <div className="form-group m-3">
                <label for="searchInput">Enter Search term</label>
                <input 
                    className="form-control" 
                    value={term}
                    onChange={(event) => setTerm(event.target.value)}
                />
            </div>
            <div className="container">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;