import React from 'react';
import './Training.css';

const Training = (props) => {
    const {handleAddToList,training} = props;
    const {picture,name,comment,Age,Time} = training;
    return (
        <div className='training'>
            <img className='training-img' src={picture} alt="" />
            <h3>{name}</h3>
            <p><small>{comment}</small></p>
            <p>For Age: {Age}</p>
            <p>Time Required: {Time}</p>
            <button onClick={() => handleAddToList(training)} className='btn-cart'>
                <p>Add To List</p>
            </button>

        </div>
    );
};

export default Training;