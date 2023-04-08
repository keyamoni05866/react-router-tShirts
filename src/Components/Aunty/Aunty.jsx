import React from 'react';
import Cousing from '../Cousin/Cousing';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousing>Abir</Cousing>
                <Cousing>Nibir</Cousing>
            </section>
        </div>
    );
};

export default Aunty;