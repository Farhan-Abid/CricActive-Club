import React, { useState } from 'react';
import './Detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Detail = (props) => {
    const {list} = props;

    let total = 0;
    for(const training of list){
        total = total + training.Time;
    }

    const [breakText, setBreakText] = useState('');

    const handleBreakClick = (text) => {
        setBreakText(text);
    };

    return (
        <div className='detail-container'>
            <h4>Shah Farhan Abid</h4>
            <div className='detail-location'>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <p>Chittagong,Bangladesh</p>
            </div>
            <div className='detail-weight'>
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
            <div className='detail-break'>
            <>
                <button onClick={() => handleBreakClick('10s')}>10s</button>
                </>
                <>
                <button onClick={() => handleBreakClick('20s')}>20s</button>
                </>
                <>
                <button onClick={() => handleBreakClick('30s')}>30s</button>
                </>
                <>
                <button onClick={() => handleBreakClick('40s')}>40s</button>
                </>
            </div>
            <h4>Exercise Details</h4>
            <div>
                <p>Exercise Time: {total} S</p>
                <p>Break Time: {breakText}</p>
            </div>
        </div>
    );
};

export default Detail;