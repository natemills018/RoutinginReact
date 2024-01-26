import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetSpecies = () => {

    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/species')
        .then(res => res.json())
        .then(allSpecies => setSpecies(allSpecies))
        .catch(e => alert(e.message))
    })
    return(
        <div className="container">
            <Link to="/" className='btn btn-outline-primary justify-content-center my-3'>Home</Link>
            <div className="row justify-content-center mt-5">
                {species.map((speciesObject) => (
                    <div className="col-md-3 m-3 card" key={`div-${species.id}`}>
                        <div className="card-title mt-2">
                            <div>{speciesObject.name}</div>
                        </div>
                        <div className='card-body mx-1'>
                        {speciesObject.classification}

                        <Link to={`/species/${species.producer}`} className='btn btn-outline-secondary mx-2'>
                            Full Details
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetSpecies;