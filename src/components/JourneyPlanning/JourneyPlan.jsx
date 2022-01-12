import React from 'react';
import Map from './Map';
import Plantable from './PlanTable';
import './journeyplan.css'

const Journeyplan = () => {
    return (
        <div className='plan-container'>

            <Plantable />
            <Map />
        </div>
    );
}

export default Journeyplan;
