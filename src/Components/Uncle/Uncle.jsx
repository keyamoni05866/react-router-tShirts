import React from 'react';
import Cousing from '../Cousin/Cousing';

const Uncle = () => {
    return (
        <div>
            <h1>I am your uncle</h1>
            <section className='flex'>
                <Cousing>Rajib</Cousing>
                <Cousing>Selina</Cousing>
            </section>
        </div>
    );
};

export default Uncle;