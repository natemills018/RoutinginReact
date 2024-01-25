import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetFilms = () => {


    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
            .catch(e => alert(e.message));
    }, [])

    return (
        <div className="container">
            <Link to="/" className='btn btn-outline-primary justify-content-center my-3'>Home</Link>
            <div className="row justify-content-center mt-5">
                {films.map((filmObject) => (
                    <div className="col-md-3 m-3 card" key={`div-${films.id}`}>
                        <div className="card-title mt-2">
                            <div>{filmObject.title}</div>
                        </div>
                        <div className='card-body mx-1'>
                        {filmObject.director}

                        <Link to={`/films/${films.producer}`} className='btn btn-outline-secondary mx-2'>
                            Full Details
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetFilms