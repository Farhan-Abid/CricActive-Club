import React from 'react';
import './Detail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Detail = ({list}) => {
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
    );
};

export default Detail;