import React, { useEffect, useState } from 'react';
import './Exercise.css';
import Training from '../../Training/Training';
import images from '../../../images/dp.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Exercise = () => {
    const [trainings,setTrainings] = useState([]);
    const [list,setList] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTrainings(data))
    }, []);

    const handleAddToList = (training) => {
        console.log(training);
        const newList = [...list,training];
        setList(newList);
    }
    return (
        <div className='exercise-container'>
            <div className='training-container'>
                {
                 trainings.map(training => <Training
                 key={training.id}
                 training={training}
                 handleAddToList={handleAddToList}
                 ></Training>)
                }
            </div>
            <div className='details-container' >
            <img src={images} alt="" />
            <h4>Shah Farhan Abid</h4>
            <div className='details-location'>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <p>Chittagong,Bangladesh</p>
            </div>
            <div className='details-weight'>
                <>
                <p>75 KG</p>
                <p>Weight</p>
                </>
                <>
                <p>6.5 </p>
                <p>Height</p>
                </>
                <>
                <p>25yrs </p>
                <p>Age</p>
                </>
            </div>
            <h4>Add A Break</h4>
            <div className='details-break'>
            <>
                <p>10s</p>
                </>
                <>
                <p>20s</p>
                </>
                <>
                <p>30s</p>
                </>
                <>
                <p>40s</p>
                </>
            </div>
            <h4>Exercise Details</h4>
            <div>
                <p>Exercise Time: {list.length}</p>
                <p>Break Time:</p>
            </div>
            </div>
        </div>
    );
};

export default Exercise;