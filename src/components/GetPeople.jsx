import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const GetPeople = () => {
    


    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://api-ghibli.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
    }, [])
    
    
    
    
    return(
        <div className='container'>
             <Link to="/" className='btn btn-outline-primary justify-content-center my-3'>Home</Link>
            <div className='row justify-content-center mt-5'>
                {people.map((peopleObject) => (
                     <div className='col-md-3 m-3 card' key={`div-${people.id}`}>
                        <div className='card-body'>
                            <h1>{peopleObject.name}</h1>
                            <div>{peopleObject.age}</div>
                        </div>
                     </div>
                ))}
            </div>
        </div>
    )
}

export default GetPeople;