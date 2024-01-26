import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';


const FilmDetails = () => {

    const { filmid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://api-ghibli.herokuapp.com/films${filmid}`)
            .then(res => res.json())
            .then(allFilms => setDetails(allFilms))
            .catch(e => alert(e.message));
    }, [filmid])

    return(
        <div className='col-md-6'>
            <div className="card shadow">
                <div className="card body">
                    <h4 className="card title">{details.producer}</h4>
                    <Link to='/films'>Go Back</Link>
                </div>
            </div>
        </div>
    );
}

export default FilmDetails;