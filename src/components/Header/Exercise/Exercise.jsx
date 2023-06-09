import React, { useEffect, useState } from 'react';
import './Exercise.css';
import Training from '../../Training/Training';
import Detail from '../../Detail/Detail';

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
                <Detail list={list}></Detail>
            
            </div>
        </div>
    );
};

export default Exercise;