import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = () => {
    return (
        <div>
            <h1>I am your father</h1>
            <section className='flex'>
                <Myself></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;